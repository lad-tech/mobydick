import {
  Canvas,
  Group,
  SkiaDomView,
  Text,
  useCanvasRef,
  useFont,
} from '@shopify/react-native-skia';
import {
  Extrapolation,
  interpolate,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {StyleProp, ViewStyle} from 'react-native';
import {useTheme} from '@lad-tech/mobydick-core';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import Coordinates from '../components/Coordinates';
import {
  chartPaddingHorizontal,
  chartPaddingVertical,
  defaultChartHeightDivider,
} from '../utils/constants';
import {
  IChartState,
  IDataset,
  IFormatter,
  IRenderHeader,
  IRenderSectionItem,
  ISelectedValues,
} from '../types';
import Section from '../components/Section';
import {generatePeriodsWithLinePaths} from '../utils/generatePeriodsWithLinePaths';
import {Lines} from '../components/Lines';
import XLine from '../components/XLine';

export interface ILineChartProps {
  dataset: IDataset;
  renderHeader?: IRenderHeader;
  renderSectionItem?: IRenderSectionItem;
  containerStyles?: StyleProp<ViewStyle>;
  sectionContainerStyles?: StyleProp<ViewStyle>;
  chartContainerStyles?: StyleProp<ViewStyle>;
  formatterX?: IFormatter;
  formatterY?: IFormatter;
  hideDataPoints?: boolean;
  popup?: SkiaDomView;
}

export const LineChart = ({
  dataset,
  renderHeader,
  renderSectionItem,
  containerStyles,
  chartContainerStyles,
  sectionContainerStyles,
  formatterY,
  formatterX,
  hideDataPoints = false,
}: ILineChartProps) => {
  const {colors, spaces} = useTheme();
  const font = useFont(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Medium.ttf'),
    12,
  );

  const ref = useCanvasRef();

  const {height: frameHeight, width: frameWidth} = useSafeAreaFrame();

  const size = useSharedValue({
    height: frameHeight,
    width: frameWidth,
  });

  const periodsWithPaths = useDerivedValue(() => {
    return generatePeriodsWithLinePaths({
      dataset,
      width: size.value.width,
      height: size.value.height,
    });
  });

  // animation value to transition from one graph to the next
  const transition = useSharedValue(0);
  // indices of the current and next graphs
  const state = useSharedValue<IChartState>({
    next: 0,
    current: 0,
  });

  const maxY = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current];
    const end = periodsWithPaths.value[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.maxY;
  });

  const maxX = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current];
    const end = periodsWithPaths.value[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.maxX;
  });

  const minX = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current];
    const end = periodsWithPaths.value[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.minX;
  });

  const minY = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current];
    const end = periodsWithPaths.value[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.minY;
  });

  const coordinatesLength = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current];
    const end = periodsWithPaths.value[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.maxCoordinatesLength;
  });

  const selectedPeriodName = useDerivedValue(() => {
    const {next} = state.value;

    const periods = Object.keys(dataset);
    const periodName = periods[next];

    if (periodName === undefined) {
      throw Error('period === undefined');
    }

    return periodName;
  });

  const selectedPeriod = useDerivedValue(() => {
    const check = dataset[selectedPeriodName.value];

    if (check === undefined) {
      throw Error('selectedPeriod === undefined');
    }

    return check;
  });

  const selectedValues = useDerivedValue<ISelectedValues>(() => {
    const {next} = state.value;
    const end = periodsWithPaths.value[next];

    if (end === undefined) {
      throw Error(
        'period === undefined || end === undefined || selectedPeriod === undefined',
      );
    }

    return end.lines.map(({name}, index) => {
      const lineCoords = selectedPeriod.value[index]?.coordinates ?? [];
      const {x, y} = lineCoords[lineCoords.length - 1] ?? {x: 0, y: 0};

      return {
        name,
        y,
        x,
      };
    });
  });

  const x = useSharedValue(-10);
  const y = useSharedValue(-10);

  const pan = Gesture.Pan()
    .onChange(event => {
      x.value = interpolate(
        event.x,
        [
          chartPaddingHorizontal + chartPaddingHorizontal / 2,
          size.value.width - chartPaddingHorizontal / 2,
        ],
        [
          chartPaddingHorizontal + chartPaddingHorizontal / 2,
          size.value.width - chartPaddingHorizontal / 2,
        ],
        Extrapolation.CLAMP,
      );

      y.value = interpolate(
        event.y,
        [size.value.height - chartPaddingVertical, chartPaddingVertical / 2],
        [size.value.height - chartPaddingVertical, chartPaddingVertical / 2],
        Extrapolation.CLAMP,
      );
    })
    .onEnd(() => {
      x.value = -10;
      y.value = -10;
    });

  const text = useDerivedValue(() => {
    return interpolate(
      x.value,
      [
        chartPaddingHorizontal + chartPaddingHorizontal / 2,
        size.value.width - chartPaddingHorizontal / 2,
      ],
      [minX.value, maxX.value],
      Extrapolation.CLAMP,
    ).toFixed(2);
  }, [x, minX, maxX, state]);

  if (!font) return null;

  return (
    <GestureHandlerRootView
      style={[
        {
          gap: spaces.Space12,
          padding: spaces.Space16,
          borderRadius: spaces.Space12,
          borderColor: colors.BorderSoft,
          borderWidth: spaces.Space1,
          backgroundColor: colors.BgPrimary,
        },
        containerStyles,
      ]}>
      {renderHeader?.({
        selectedPeriodName,
        state,
        transition,
        selectedValues,
      })}
      <GestureDetector gesture={pan}>
        <Canvas
          ref={ref}
          onSize={size}
          style={[
            {
              flexGrow: 1,
              minHeight: frameHeight / defaultChartHeightDivider,
            },
            chartContainerStyles,
          ]}>
          <XLine x={x} size={size} />
          <Group>
            <Lines
              periodsWithPaths={periodsWithPaths}
              size={size}
              state={state}
              transition={transition}
              hideDataPoints={hideDataPoints}
            />
            <Coordinates
              font={font}
              colors={colors}
              size={size}
              maxY={maxY}
              minY={minY}
              maxX={maxX}
              minX={minX}
              coordinatesLength={coordinatesLength}
              formatterX={formatterX}
              formatterY={formatterY}
            />
          </Group>
          <Text
            font={font}
            text={text}
            x={x}
            y={y}
            color={colors.TextPrimary}
          />
        </Canvas>
      </GestureDetector>
      {renderSectionItem && (
        <Section
          state={state}
          transition={transition}
          dataset={dataset}
          renderSectionItem={renderSectionItem}
          sectionContainerStyles={sectionContainerStyles}
        />
      )}
    </GestureHandlerRootView>
  );
};

export default LineChart;
