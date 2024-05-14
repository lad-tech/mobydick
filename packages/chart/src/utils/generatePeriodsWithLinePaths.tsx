import {IChart, IGeneratePeriodsWithPaths} from '../types';
import {ILine} from '../components/Lines';

import {generateLinePath} from './generateLinePath';
import {getLinesMinMax} from './getLinesMinMax';
import {COLORS} from './constants';

export type IPeriodsWithPaths = {
  maxY: number;
  minY: number;
  maxX: number;
  minX: number;
  maxCoordinatesLength: number;
  lines: ILine[];
}[];

export const generatePeriodsWithLinePaths = ({
  dataset,
  width,
  height,
}: IGeneratePeriodsWithPaths): IPeriodsWithPaths => {
  'worklet';
  const periods = Object.keys(dataset);

  return periods.map(period => {
    const lines = dataset[period] as IChart[];

    const {maxY, maxX, minY, minX} = getLinesMinMax(lines);

    let maxCoordinatesLength = 0;

    const temp = lines.map(line => {
      const {coordinates, colors, name} = line;

      const {path: chartPath} = generateLinePath({
        width,
        height,
        coordinates,
        maxY,
        maxX,
        minY,
        minX,
      });

      maxCoordinatesLength = Math.max(maxCoordinatesLength, coordinates.length);

      return {
        path: chartPath,
        colors: colors ?? COLORS,
        name,
      };
    });

    return {
      maxX,
      maxY,
      minY,
      minX,
      maxCoordinatesLength,
      lines: temp,
    };
  });
};
