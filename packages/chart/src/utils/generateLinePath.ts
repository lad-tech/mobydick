import {Skia} from '@shopify/react-native-skia';
import {Extrapolation, interpolate} from 'react-native-reanimated';

import {ICoordinates} from '../types';

import {chartPaddingHorizontal, chartPaddingVertical} from './constants';

export const generateLinePath = ({
  height,
  width,
  coordinates,
  maxY,
  maxX,
  minY,
  minX,
}: {
  coordinates: ICoordinates[];
  height: number;
  width: number;
  maxY: number;
  maxX: number;
  minY: number;
  minX: number;
}) => {
  'worklet';
  const path = Skia.Path.Make();

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
      [minY, maxY],
      [height - chartPaddingVertical, chartPaddingVertical / 2],
      Extrapolation.CLAMP,
    );

    if (index === 0) {
      path.moveTo(xCoordinate, yCoordinate);
    }

    path.lineTo(xCoordinate, yCoordinate);
  });

  return {
    path,
  };
};
