import {
  Canvas,
  Group,
  LinearGradient,
  Skia,
  useCanvasRef,
  useFont,
  vec,
  interpolateColors,
} from '@shopify/react-native-skia';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import {useTheme, View} from '@lad-tech/mobydick-core';
import {StyleProp, ViewStyle} from 'react-native';

import {
  IDataset,
  IFormatter,
  IRenderHeader,
  IRenderSectionItem,
  ISelectedValues,
} from '../types';
import {defaultChartHeightDivider} from '../utils/constants';
import Coordinates from '../components/Coordinates';
import {generatePeriodsWithBarPaths} from '../utils/generatePeriodsWithBarPaths';
import Section from '../components/Section';
import Line from '../components/Line';

export interface IBarChartProps {
  dataset: IDataset;
  renderHeader?: IRenderHeader;
  renderSectionItem?: IRenderSectionItem;
  containerStyles?: StyleProp<ViewStyle>;
  sectionContainerStyles?: StyleProp<ViewStyle>;
  chartContainerStyles?: StyleProp<ViewStyle>;
  formatterX?: IFormatter;
  formatterY?: IFormatter;
}

export const BarChart = ({
  dataset,
  renderHeader,
  renderSectionItem,
  containerStyles,
  chartContainerStyles,
  sectionContainerStyles,
  formatterY,
  formatterX,
}: IBarChartProps) => {
  const font = useFont(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Regular.ttf'),
    12,
  );
  const {colors, spaces} = useTheme();
  const ref = useCanvasRef();

  const {height: frameHeight, width: frameWidth} = useSafeAreaFrame();

  const canvasSize = useSharedValue({
    height: frameHeight,
    width: frameWidth,
  });

  const size = useDerivedValue(() => {
    return {
      height: canvasSize.value.height,
      width: canvasSize.value.width,
    };
  });

  const periodsWithPaths = useDerivedValue(() =>
    generatePeriodsWithBarPaths({
      dataset,
      width: size.value.width,
      height: size.value.height,
    }),
  );

  // animation value to transition from one graph to the next
  const transition = useSharedValue(0);
  // indices of the current and next graphs
  const state = useSharedValue({
    next: 0,
    current: 0,
  });

  const chartPath = useDerivedValue(() => {
    const {current, next} = state.value;
    const start =
      periodsWithPaths.value[current]?.chartPath ?? Skia.Path.Make();
    const end = periodsWithPaths.value[next]?.chartPath ?? Skia.Path.Make();

    if (end.isInterpolatable(start)) {
      return end.interpolate(start, transition.value)!;
    }

    return end;
  });

  const colorsBar = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current]?.colors ?? [];
    const end = periodsWithPaths.value[next]?.colors ?? [];

    return end.map((endColor, i) =>
      interpolateColors(
        transition.value,
        [0, 1],
        [start[i] ?? endColor, endColor],
      ),
    );
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

    return end.coordinatesLength;
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
      throw Error(' end === undefined');
    }

    const {coordinates, name} = selectedPeriod.value[0] ?? {
      coordinates: [],
      name: '',
    };
    const {x, y} = coordinates[coordinates.length - 1] ?? {x: 0, y: 0};

    return [
      {
        name,
        y,
        x,
      },
    ];
  });

  if (!font) return null;

  return (
    <View
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
      <Canvas
        ref={ref}
        onSize={canvasSize}
        style={[
          {
            flexGrow: 1,
            minHeight: frameHeight / defaultChartHeightDivider,
          },
          chartContainerStyles,
        ]}>
        <Group>
          <Group>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(size.value.width, size.value.height)}
              colors={colorsBar}
            />
            <Line chartPath={chartPath} strokeWidth={20} />
          </Group>

          <Coordinates
            colors={colors}
            size={size}
            font={font}
            maxY={maxY}
            maxX={maxX}
            minX={minX}
            minY={minY}
            coordinatesLength={coordinatesLength}
            formatterX={formatterX}
            formatterY={formatterY}
          />
        </Group>
      </Canvas>
      {renderSectionItem && (
        <Section
          state={state}
          transition={transition}
          dataset={dataset}
          renderSectionItem={renderSectionItem}
          sectionContainerStyles={sectionContainerStyles}
        />
      )}
    </View>
  );
};
export default BarChart;
