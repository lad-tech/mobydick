import {
  Extrapolation,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

import {IPeriodsWithPaths} from '../utils';
import {IChartTransition, ISharedChartState} from '../types';

import {ChartDot} from './ChartDot';

interface IChartDots {
  periodsWithPaths: IPeriodsWithPaths;
  lineIndex: number;
  dotIndex: number;
  transition: IChartTransition;
  state: ISharedChartState;
}

export const ChartDotsOfPeriod = ({
  periodsWithPaths,
  transition,
  state,
  dotIndex,
  lineIndex,
}: IChartDots) => {
  const coords = useDerivedValue(() => {
    const {next, current} = state.value;

    const [, startX, startY] =
      periodsWithPaths[current]?.lines[lineIndex]?.path.toCmds()[dotIndex] ??
      [];
    const [, endX, endY] =
      periodsWithPaths[next]?.lines[lineIndex]?.path.toCmds()[dotIndex] ?? [];

    return {
      x: interpolate(
        transition.value,
        [0, 1],
        [startX || 0, endX || 0],
        Extrapolation.CLAMP,
      ),
      y: interpolate(
        transition.value,
        [0, 1],
        [startY || 0, endY || 0],
        Extrapolation.CLAMP,
      ),
    };
  });

  return <ChartDot r={3} coords={coords} />;
};
