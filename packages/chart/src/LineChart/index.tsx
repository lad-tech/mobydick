import {
  Canvas,
  Group,
  Text,
  useCanvasRef,
  useFont,
} from '@shopify/react-native-skia';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {StyleProp, View, ViewStyle} from 'react-native';
import {useTheme} from '@lad-tech/mobydick-core';

import Coordinates from '../components/Coordinates';
import {
  chartPaddingHorizontal,
  chartPaddingVertical,
  defaultChartHeightDivider,
} from '../utils/constants';
import {IChartState, IDataset, IFormatter, IRenderSectionItem} from '../types';
import Section from '../components/Section';
import {generatePeriodsWithLinePaths} from '../utils/generatePeriodsWithLinePaths';
import {Lines} from '../components/Lines';

export interface ILineChartProps {
  title?: string;
  dataset: IDataset;
  renderSectionItem?: IRenderSectionItem;
  sectionContainerStyles?: StyleProp<ViewStyle>;
  formatterX?: IFormatter;
  formatterY?: IFormatter;
}

export const LineChart = ({
  dataset,
  title,
  renderSectionItem,
  sectionContainerStyles,
  formatterY,
  formatterX,
}: ILineChartProps) => {
  const {colors, spaces} = useTheme();
  const font = useFont(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Regular.ttf'),
    14,
  );
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

  const periodsWithPaths = useSharedValue(
    generatePeriodsWithLinePaths({
      dataset,
      width,
      height,
    }),
  );

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
              text={title}
              x={width / 2 - title.length * 3}
              y={chartPaddingVertical / 2}
              color={colors.TextPrimary}
              font={font}
            />
          )}
          <Lines
            periodsWithPaths={periodsWithPaths}
            width={width}
            state={state}
            transition={transition}
          />
          <Coordinates
            font={font}
            colors={colors}
            width={width}
            height={height}
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
