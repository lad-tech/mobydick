import {Skia} from '@shopify/react-native-skia';
import {Extrapolation, interpolate} from 'react-native-reanimated';

import {
  chartPaddingHorizontal,
  chartPaddingVertical,
} from './constants';
import {ICoordinates} from '../types';

export const generateLinePath = ({
  height,
  width,
  coordinates,
}: {
  coordinates: ICoordinates[];
  height: number;
  width: number;
}) => {
  'worklet';
  const path = Skia.Path.Make();
  let {maxX, maxY, minY, minX} = {
    maxX: 0,
    maxY: 0,
    minY: Infinity,
    minX: Infinity,
  };

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

  coordinates.forEach(({x, y}, index) => {
    const xCoordinate = interpolate(
      x,
      [minX, maxX],
      [
        chartPaddingHorizontal + chartPaddingHorizontal / 2,
        width - chartPaddingHorizontal / 2,
      ],
      Extrapolation.CLAMP,
    );

    const yCoordinate = interpolate(
      y,
      [maxY, minY],
      [chartPaddingVertical, height],
      Extrapolation.CLAMP,
    );

    if (index === 0) {
      path.moveTo(xCoordinate, yCoordinate);
    }

    path.lineTo(xCoordinate, yCoordinate);
  });

  return {
    path,
    maxX,
    maxY,
    minX,
    minY,
  };
};
