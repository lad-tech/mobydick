import {PathProps, Skia, SkiaDefaultProps} from '@shopify/react-native-skia';
import {
  interpolateColor,
  SharedValue,
  useDerivedValue,
} from 'react-native-reanimated';

import {IChartTransition, ISharedChartState} from '../types';
import {IPeriodsWithPaths} from '../utils';

import Line from './Line';

interface IChartProps
  extends Omit<SkiaDefaultProps<PathProps, 'start' | 'end'>, 'path'> {
  periodsWithPaths: SharedValue<IPeriodsWithPaths>;
  index: number;
  width: number;
  transition: IChartTransition;
  state: ISharedChartState;
  lineColors?: string[] | undefined;
}

export const LineOfPeriod = ({
  periodsWithPaths,
  index,
  width,
  transition,
  state,
}: IChartProps) => {
  const chartPath = useDerivedValue(() => {
    const {current, next} = state.value;

    const start =
      periodsWithPaths.value[current]?.lines[index]?.path ?? Skia.Path.Make();
    const end =
      periodsWithPaths.value[next]?.lines[index]?.path ?? Skia.Path.Make();

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined');
    }

    return end.interpolate(start, transition.value)!;
  });

  const colors = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current]?.lines[index]?.colors ?? [];
    const end = periodsWithPaths.value[next]?.lines[index]?.colors ?? [];

    return end.map((endColor, i) =>
      interpolateColor(
        transition.value,
        [0, 1],
        [start[i] ?? endColor, endColor],
      ),
    );
  });

  return (
    <Line colors={colors.value} width={width} chartPath={chartPath.value} />
  );
};

export default LineOfPeriod;
