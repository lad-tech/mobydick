import {Canvas, Group, useCanvasRef, useFont} from '@shopify/react-native-skia';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {StyleProp, ViewStyle} from 'react-native';
import {useTheme, View} from '@lad-tech/mobydick-core';

import Coordinates from '../components/Coordinates';
import {defaultChartHeightDivider} from '../utils/constants';
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

  if (!font) return null;

  return (
    <View
      style={[
        {
          gap: spaces.Space12,
          padding: spaces.Space16,
          borderRadius: spaces.Space20,
          borderColor: colors.BorderSoft,
          borderWidth: spaces.Space1,
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
        onSize={size}
        style={[
          {
            flexGrow: 1,
            minHeight: frameHeight / defaultChartHeightDivider,
            backgroundColor: colors.BgPrimary,
          },
          chartContainerStyles,
        ]}>
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

export default LineChart;
