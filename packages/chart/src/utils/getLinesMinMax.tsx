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
        if (maxX < x) {
          maxX = x;
        }
        if (x < minX) {
          minX = x;
        }
        if (maxY < y) {
          maxY = y;
        }
        if (y < minY) {
          minY = y;
        }
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
