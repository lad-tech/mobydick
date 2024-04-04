import {
  Canvas,
  Group,
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

import Coordinates from '../components/Coordinates';
import {
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
  chartContainerStyles?: StyleProp<ViewStyle>;
  formatterX?: IFormatter;
  formatterY?: IFormatter;
  hideDataPoints?: boolean;
}

export const LineChart = ({
  dataset,
  title,
  renderSectionItem,
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
  const transform = useDerivedValue(() => {
    const padding = 16;
    const width = size.value.width;
    const newWidth = size.value.width - padding * 2;

    const height = size.value.height;
    const newHeight = size.value.height - padding * 2;

    const scaleX = interpolate(
      newWidth,
      [0, width],
      [0, 1],
      Extrapolation.CLAMP,
    );

    const scaleY = interpolate(
      newHeight,
      [0, height],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return [
      {translateX: width / 2},
      {scaleX},
      {translateX: -width / 2},
      {translateY: height / 2},
      {scaleY},
      {translateY: -height / 2},
    ];
  });

  if (!font) return null;

  return (
    <>
      <Canvas
        ref={ref}
        onSize={canvasSize}
        style={[
          {
            minHeight: frameHeight / defaultChartHeightDivider,
            backgroundColor: colors.BgPrimary,
            borderRadius: spaces.Space20,
            borderColor: colors.BorderSoft,
            borderWidth: spaces.Space1,
          },
          chartContainerStyles,
        ]}>
        <Group transform={transform}>
          {title && (
            <Text
              text={title}
              x={size.value.width / 2 - title.length * 3}
              y={chartPaddingVertical / 2}
              color={colors.TextPrimary}
              font={font}
            />
          )}
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
    </>
  );
};

export default LineChart;
