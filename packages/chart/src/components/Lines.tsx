import {SkPath} from '@shopify/react-native-skia';
import {type SharedValue, useDerivedValue} from 'react-native-reanimated';

import {IPeriodsWithPaths} from '../utils';
import {IChartTransition, ISharedChartState} from '../types';

import Line from './Line';

export interface ILine {
  name?: string | undefined;
  path: SkPath;
  colors?: string[] | undefined;
}

interface ILinesProps {
  periodsWithPaths: SharedValue<IPeriodsWithPaths>;
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
    const {next, current} = state.value;

    const start = periodsWithPaths.value[current]?.lines ?? [];
    const end = periodsWithPaths.value[next]?.lines ?? [];

    if (start.length !== end.length) {
      throw Error('Available only same numbers of lines in periods');
    }
    return end;
  });

  return (
    <>
      {lines.value.map(({colors}, index) => (
        <Line
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
