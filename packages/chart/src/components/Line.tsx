import {
  LinearGradient,
  Path,
  PathProps,
  SkiaDefaultProps,
  vec,
} from '@shopify/react-native-skia';
import {
  interpolateColor,
  SharedValue,
  useDerivedValue,
} from 'react-native-reanimated';

import {IChartTransition, ISharedChartState} from '../types';
import {IPeriodsWithPaths} from '../utils';

interface IChartProps
  extends Omit<SkiaDefaultProps<PathProps, 'start' | 'end'>, 'path'> {
  periodsWithPaths: SharedValue<IPeriodsWithPaths>;
  index: number;
  width: number;
  transition: IChartTransition;
  state: ISharedChartState;
  lineColors?: string[] | undefined;
}

export const COLORS = [
  '#E0F5E9',
  '#9BE1DA',
  '#56CDCB',
  '#3B8B8E',
  '#EF1E1C',
  '#F43B1D',
  '#F9571D',
  '#FF8A57',
];

export const Line = ({
  periodsWithPaths,
  index,
  width,
  transition,
  state,
  ...rest
}: IChartProps) => {
  const chartPath = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = periodsWithPaths.value[current]?.lines[index]?.path;
    const end = periodsWithPaths.value[next]?.lines[index]?.path;

    if (start === undefined || end === undefined) {
      throw Error('start === undefined || end === undefined SHEEE');
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
    <Path
      path={chartPath}
      style="stroke"
      strokeJoin="round"
      strokeWidth={2}
      {...rest}>
      <LinearGradient start={vec(0, 0)} end={vec(width, 0)} colors={colors} />
    </Path>
  );
};

export default Line;
