import {useDerivedValue} from 'react-native-reanimated';

import {IPeriodsWithPaths} from '../utils';
import {IChartTransition, ISharedChartState} from '../types';

import {ChartDotsOfPeriod} from './ChartDotsOfPeriod';

interface IChartDots {
  periodsWithPaths: IPeriodsWithPaths;
  transition: IChartTransition;
  state: ISharedChartState;
}

export const ChartDots = ({
  periodsWithPaths,
  transition,
  state,
}: IChartDots) => {
  const linesDots = useDerivedValue(() => {
    const {next} = state.value;

    const end = periodsWithPaths[next]?.lines ?? [];

    return end.reduce(
      (acc, currentValue) => {
        acc.push(
          currentValue.path.toCmds().map(([_cmd, x, y]) => {
            return {
              x,
              y,
            };
          }),
        );

        return acc;
      },
      [] as {x: number | undefined; y: number | undefined}[][],
    );
  });

  return (
    <>
      {linesDots.value.map((value, lineIndex) => {
        return value.map((_, dotIndex) => (
          <ChartDotsOfPeriod
            key={`${lineIndex} ${dotIndex}`}
            state={state}
            transition={transition}
            periodsWithPaths={periodsWithPaths}
            dotIndex={dotIndex}
            lineIndex={lineIndex}
          />
        ));
      })}
    </>
  );
};
