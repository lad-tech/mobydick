import {
  Group,
  LinearGradient,
  PathProps,
  Skia,
  SkiaDefaultProps,
  vec,
} from '@shopify/react-native-skia';
import {interpolateColor, useDerivedValue} from 'react-native-reanimated';

import {IChartTransition, ISharedChartState} from '../types';
import {IPeriodsWithPaths} from '../utils';

import Line from './Line';
import {LinePoints} from './LinePoints';

interface IChartProps
  extends Omit<SkiaDefaultProps<PathProps, 'start' | 'end'>, 'path'> {
  periodsWithPaths: IPeriodsWithPaths;
  index: number;
  width: number;
  height: number;
  transition: IChartTransition;
  state: ISharedChartState;
  lineColors?: string[] | undefined;
  hideDataPoints: boolean;
}

export const LineOfPeriod = ({
  periodsWithPaths,
  index,
  width,
  height,
  transition,
  state,
  hideDataPoints,
}: IChartProps) => {
  const chartPath = useDerivedValue(() => {
    const {current, next} = state.value;

    const start =
      periodsWithPaths[current]?.lines[index]?.path ?? Skia.Path.Make();
    const end = periodsWithPaths[next]?.lines[index]?.path ?? Skia.Path.Make();

    if (end.isInterpolatable(start)) {
      return end.interpolate(start, transition.value)!;
    }

    return end;
  });

  const colors = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths[current]?.lines[index]?.colors ?? [];
    const end = periodsWithPaths[next]?.lines[index]?.colors ?? [];

    return end.map((endColor, i) =>
      interpolateColor(
        transition.value,
        [0, 1],
        [start[i] ?? endColor, endColor],
      ),
    );
  });

  return (
    <Group>
      <LinearGradient
        start={vec(0, 0)}
        end={vec(width, height)}
        colors={colors}
      />
      <Line chartPath={chartPath} />
      {hideDataPoints ? null : <LinePoints chartPath={chartPath} />}
    </Group>
  );
};

export default LineOfPeriod;
