import {
  Canvas,
  Group,
  LinearGradient,
  Skia,
  Text,
  useCanvasRef,
  useFont,
  vec,
} from '@shopify/react-native-skia';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {
  Extrapolation,
  interpolate,
  interpolateColor,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {useTheme} from '@lad-tech/mobydick-core';
import {StyleProp, ViewStyle} from 'react-native';

import {IDataset, IFormatter, IRenderSectionItem} from '../types';
import {
  chartPaddingVertical,
  defaultChartHeightDivider,
} from '../utils/constants';
import Coordinates from '../components/Coordinates';
import {generatePeriodsWithBarPaths} from '../utils/generatePeriodsWithBarPaths';
import Section from '../components/Section';
import Line from '../components/Line';

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
      interpolateColor(
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
        style={{
          minHeight: frameHeight / defaultChartHeightDivider,
          backgroundColor: colors.BgPrimary,
          borderRadius: spaces.Space20,
          borderColor: colors.BorderSoft,
          borderWidth: spaces.Space1,
        }}>
        <Group transform={transform}>
          {title && (
            <Text
              font={font}
              text={title}
              x={size.value.width / 2 - title.length * 3}
              y={chartPaddingVertical / 2}
              color={colors.TextPrimary}
            />
          )}
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
    </>
  );
};
export default BarChart;
