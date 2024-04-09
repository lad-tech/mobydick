import {Skia} from '@shopify/react-native-skia';
import {Extrapolation, interpolate} from 'react-native-reanimated';

import {ICoordinates} from '../types';

import {chartPaddingHorizontal, chartPaddingVertical} from './constants';

export const generateBarsPath = ({
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
  const minY = 0;
  let {maxX, maxY, minX} = {
    maxX: 0,
    maxY: 0,
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
  });

  coordinates.forEach(({x, y}) => {
    const xCoordinate = interpolate(
      x,
      [minX, maxX],
      [
        chartPaddingHorizontal + chartPaddingHorizontal / 2,
        width - chartPaddingHorizontal / 2,
      ],
      Extrapolation.CLAMP,
    );

    path.moveTo(
      xCoordinate,
      interpolate(
        0,
        [minY, maxY],
        [
          height - chartPaddingVertical / 2,
          chartPaddingVertical + chartPaddingVertical / 2,
        ],
        Extrapolation.CLAMP,
      ),
    );

    path.lineTo(
      xCoordinate,
      interpolate(
        y,
        [minY, maxY],
        [height - chartPaddingVertical, chartPaddingVertical / 2],
        Extrapolation.CLAMP,
      ),
    );
  });

  return {
    path,
    maxX,
    maxY,
    minX,
    minY,
  };
};
