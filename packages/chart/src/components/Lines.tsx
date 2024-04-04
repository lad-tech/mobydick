import {SkPath} from '@shopify/react-native-skia';
import {SharedValue, useDerivedValue} from 'react-native-reanimated';

import {IPeriodsWithPaths} from '../utils';
import {IChartTransition, ISharedChartState} from '../types';

import LineOfPeriod from './LineOfPeriod';

export interface ILine {
  name?: string | undefined;
  path: SkPath;
  colors?: string[] | undefined;
}

interface ILinesProps {
  periodsWithPaths: SharedValue<IPeriodsWithPaths>;
  size: SharedValue<{height: number; width: number}>;
  transition: IChartTransition;
  state: ISharedChartState;
  hideDataPoints: boolean;
}

export const Lines = ({
  periodsWithPaths,
  size,
  state,
  transition,
  hideDataPoints,
}: ILinesProps) => {
  const lines = useDerivedValue(() => {
    const {next} = state.value;

    const end = periodsWithPaths.value[next]?.lines ?? [];

    return end;
  });

  return (
    <>
      {lines.value.map(({colors}, index) => (
        <LineOfPeriod
          key={index}
          index={index}
          size={size}
          periodsWithPaths={periodsWithPaths}
          lineColors={colors}
          state={state}
          transition={transition}
          hideDataPoints={hideDataPoints}
        />
      ))}
    </>
  );
};
