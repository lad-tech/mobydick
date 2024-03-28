import {SkPath} from '@shopify/react-native-skia';
import {useDerivedValue} from 'react-native-reanimated';

import {IPeriodsWithPaths} from '../utils';
import {IChartTransition, ISharedChartState} from '../types';

import LineOfPeriod from './LineOfPeriod';

export interface ILine {
  name?: string | undefined;
  path: SkPath;
  colors?: string[] | undefined;
}

interface ILinesProps {
  periodsWithPaths: IPeriodsWithPaths;
  width: number;
  transition: IChartTransition;
  state: ISharedChartState;
}

export const Lines = ({
  periodsWithPaths,
  width,
  state,
  transition,
}: ILinesProps) => {
  const lines = useDerivedValue(() => {
    const {next} = state.value;

    const end = periodsWithPaths[next]?.lines ?? [];

    return end;
  });

  return (
    <>
      {lines.value.map(({colors}, index) => (
        <LineOfPeriod
          key={index}
          index={index}
          periodsWithPaths={periodsWithPaths}
          width={width}
          lineColors={colors}
          state={state}
          transition={transition}
        />
      ))}
    </>
  );
};
