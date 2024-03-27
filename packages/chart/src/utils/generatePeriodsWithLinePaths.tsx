import {IChart, IGeneratePeriodsWithPaths} from '../types';
import {COLORS} from '../components';
import {ILine} from '../components/Lines';

import {generateLinePath} from './generateLinePath';

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

    let maxXLine = 0;
    let maxYLine = 0;
    let minXLine = Infinity;
    let minYLine = Infinity;
    let maxCoordinatesLength = 0;

    const temp = lines.map(line => {
      const {coordinates, colors, name} = line;

      const {
        path: chartPath,
        maxX,
        maxY,
        minX,
        minY,
      } = generateLinePath({
        width,
        height,
        coordinates,
      });

      maxXLine = Math.max(maxXLine, maxX);
      maxYLine = Math.max(maxYLine, maxY);
      minXLine = Math.min(minXLine, minX);
      minYLine = Math.min(minYLine, minY);

      const coordinatesLength = coordinates.length;

      if (coordinates.length > maxCoordinatesLength) {
        maxCoordinatesLength = coordinatesLength;
      }

      return {
        path: chartPath,
        colors: colors ?? COLORS,
        name,
      };
    });

    return {
      maxX: maxXLine,
      maxY: maxYLine,
      minY: minYLine,
      minX: minXLine,
      maxCoordinatesLength: maxCoordinatesLength,
      lines: temp,
    };
  });
};
