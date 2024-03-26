import {
  Canvas,
  Group,
  Text,
  useCanvasRef,
  useFont,
} from '@shopify/react-native-skia';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import {useTheme, View} from '@lad-tech/mobydick-core';
import {StyleProp, ViewStyle} from 'react-native';

import {IDataset, IFormatter, IRenderSectionItem} from '../types';
import {
  chartPaddingHorizontal,
  chartPaddingVertical,
  defaultChartHeightDivider,
} from '../utils/constants';
import Coordinates from '../components/Coordinates';
import Line from '../components/Line';
import {generatePeriodsWithBarPaths} from '../utils/generatePeriodsWithBarPaths';
import Section from '../components/Section';

export interface IBarChartProps {
  title?: string;
  dataset: IDataset;
  renderSectionItem?: IRenderSectionItem;
  sectionContainerStyles?: StyleProp<ViewStyle>;
  formatterX?: IFormatter;
  formatterY?: IFormatter;
}

export const BarChart = ({
  dataset,
  title,
  renderSectionItem,
  sectionContainerStyles,
  formatterY,
  formatterX,
}: IBarChartProps) => {
  const font = useFont(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Regular.ttf'),
    14,
  );
  const {colors, spaces} = useTheme();
  const ref = useCanvasRef();

  const {height: frameHeight, width: frameWidth} = useSafeAreaFrame();
  const size = useSharedValue({
    width: frameWidth,
    height: frameHeight / defaultChartHeightDivider,
  });
  const {height: realHeight, width: realWidth} = size.value;

  const {height, width} = {
    height: realHeight - chartPaddingVertical,
    width: realWidth - chartPaddingHorizontal,
  };

  const periodsWithPaths = generatePeriodsWithBarPaths({
    dataset,
    width,
    height,
  });

  // animation value to transition from one graph to the next
  const transition = useSharedValue(0);
  // indices of the current and next graphs
  const state = useSharedValue({
    next: 0,
    current: 0,
  });

  const chartPath = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths[current];
    const end = periodsWithPaths[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }
    return end.chartPath.interpolate(start.chartPath, transition.value)!;
  });

  const maxY = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths[current];
    const end = periodsWithPaths[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.maxY;
  });
  const maxX = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths[current];
    const end = periodsWithPaths[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.maxX;
  });
  const minX = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths[current];
    const end = periodsWithPaths[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.minX;
  });
  const minY = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths[current];
    const end = periodsWithPaths[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.minY;
  });
  const coordinatesLength = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths[current];
    const end = periodsWithPaths[next];

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.coordinatesLength;
  });

  return (
    <View>
      <Canvas
        ref={ref}
        style={{
          height: frameHeight / defaultChartHeightDivider,
          backgroundColor: colors.BgPrimary,
          borderRadius: spaces.Space20,
        }}>
        <Group>
          {title && (
            <Text
              font={font}
              text={title}
              x={width / 2 - title.length * 3}
              y={chartPaddingVertical / 2}
              color={colors.TextPrimary}
            />
          )}
          <Line
            path={chartPath}
            width={width}
            colors={colors}
            strokeWidth={20}
          />
          <Coordinates
            font={font}
            colors={colors}
            width={width}
            height={height}
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
