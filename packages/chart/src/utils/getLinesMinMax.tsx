import {IChart} from '../types';

export const getLinesMinMax = (
  lines: IChart[],
): {
  maxX: number;
  maxY: number;
  minX: number;
  minY: number;
} => {
  'worklet';
  return lines.reduce(
    ({maxX, maxY, minX, minY}, {coordinates}) => {
      coordinates.forEach(({x, y}) => {
        maxX = Math.max(x, maxX);
        minX = Math.min(x, minX);
        maxY = Math.max(y, maxY);
        minY = Math.min(y, minY);
      });

      return {maxX, maxY, minX, minY};
    },
    {
      maxX: 0,
      maxY: 0,
      minX: Infinity,
      minY: Infinity,
    },
  );
};
