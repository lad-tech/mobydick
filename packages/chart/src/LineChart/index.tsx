import {
  Canvas,
  Group,
  SkiaDomView,
  Text,
  useCanvasRef,
  useFont,
} from '@shopify/react-native-skia';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {StyleProp, View, ViewStyle} from 'react-native';
import {useTheme} from '@lad-tech/mobydick-core';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import Coordinates from '../components/Coordinates';
import {
  chartPaddingHorizontal,
  chartPaddingVertical,
  defaultChartHeightDivider,
} from '../utils/constants';
import {
  IChart,
  IChartState,
  ICoordinates,
  IDataset,
  IFormatter,
  IRenderSectionItem,
} from '../types';
import Section from '../components/Section';
import {generatePeriodsWithLinePaths} from '../utils/generatePeriodsWithLinePaths';
import {Lines} from '../components/Lines';
import XLine from '../components/XLine';
import ChartPopup from '../components/ChartPopup';

export interface ILineChartProps {
  title?: string;
  dataset: IDataset;
  renderSectionItem?: IRenderSectionItem;
  sectionContainerStyles?: StyleProp<ViewStyle>;
  formatterX?: IFormatter;
  formatterY?: IFormatter;
  hideDataPoints?: boolean;
  popup?: SkiaDomView;
  onTouchMove?(event: GestureUpdateEvent<PanGestureHandlerEventPayload>): void;
}

export const LineChart = ({
  dataset,
  title,
  renderSectionItem,
  sectionContainerStyles,
  formatterY,
  formatterX,
  hideDataPoints = false,
  onTouchMove,
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

  const periodsWithPaths = generatePeriodsWithLinePaths({
    dataset,
    width,
    height,
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

    return end.maxCoordinatesLength;
  });

  const x = useSharedValue(-3);
  const y = useSharedValue(0);

  const val = Object.values(dataset)
    .flat()
    .reduce((acc: ICoordinates[], item: IChart) => {
      item.coordinates.forEach(e => {
        acc.push(e);
      });
      return acc;
    }, []);

  const point = useDerivedValue(
    () =>
      val.find(e => {
        const chartCoords = interpolate(
          x.value,
          [chartPaddingHorizontal * 1.5, width - chartPaddingHorizontal * 0.5],
          [minX.value, maxX.value],
          Extrapolation.CLAMP,
        );
        return e.x < chartCoords + 10 && e.x > chartCoords - 10;
      }),
    [x],
  );

  const pan = Gesture.Pan()
    .onChange(event => {
      'worklet';
      x.value = withTiming(event.x, {duration: 50});
    })
    .onUpdate(event => {
      if (onTouchMove) {
        runOnJS(onTouchMove)(event);
      }
      if (point.value) {
        y.value = withTiming(
          interpolate(
            point.value.y,
            [minY.value, maxY.value],
            [height - chartPaddingVertical * 1.5, chartPaddingVertical],
            Extrapolation.CLAMP,
          ),
          {duration: 150},
        );
      }
    })
    .onEnd(() => {
      x.value = -3;
      y.value = 0;
    });

  const text = useDerivedValue(() => {
    console.log(minX.value, maxX.value);
    return interpolate(
      x.value,
      [chartPaddingHorizontal * 1.5, width - chartPaddingHorizontal / 2],
      [minX.value, maxX.value],
      Extrapolation.CLAMP,
    ).toFixed(2);
  }, [x, minX, maxX, state]);

  return (
    <View>
      <GestureHandlerRootView>
        <GestureDetector gesture={pan}>
          <View>
            <Canvas
              ref={ref}
              style={{
                height: frameHeight / defaultChartHeightDivider,
                backgroundColor: colors.BgPrimary,
                borderRadius: spaces.Space20,
              }}>
              <XLine x={x} size={size} />
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
                  height={height}
                  state={state}
                  transition={transition}
                  hideDataPoints={hideDataPoints}
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
            <ChartPopup x={x} y={y}>
              <Animated.Text>{text.value}</Animated.Text>
            </ChartPopup>
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
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
};

export default LineChart;
