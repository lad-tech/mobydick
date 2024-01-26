import {Extrapolation, interpolate} from 'react-native-reanimated';

import {chartPaddingHorizontal, chartPaddingVertical} from './constants';

interface IGetCoordinateValuesParams {
  maxY: number;
  minY: number;
  maxX: number;
  minX: number;
  height: number;
  width: number;
  coordinatesLength: number;
}

export const getCoordinateValues = ({
  maxY,
  minY,
  maxX,
  minX,
  height,
  width,
  coordinatesLength,
}: IGetCoordinateValuesParams) => {
  'worklet';

  const netCount = coordinatesLength - 1;
  const stepY = (maxY - minY) / netCount;
  const stepX = (maxX - minX) / netCount;

  const coordinateValuesY = new Array(netCount + 1)
    .fill(0)
    .map((_val, index) => {
      const value = minY + stepY * index;
      const coordinate = interpolate(
        value,
        [minY, maxY],
        [
          height - chartPaddingVertical / 2,
          chartPaddingVertical + chartPaddingVertical / 2,
        ],
        Extrapolation.CLAMP,
      );
      return {
        value,
        coordinate,
      };
    });

  const coordinateValuesX = new Array(netCount + 1)
    .fill(0)
    .map((_val, index) => {
      const value = minX + stepX * index;
      const coordinate = interpolate(
        value,
        [minX, maxX],
        [
          chartPaddingHorizontal + chartPaddingHorizontal / 2,
          width - chartPaddingHorizontal / 2,
        ],
        Extrapolation.CLAMP,
      );
      return {
        value,
        coordinate,
      };
    });

  return {
    coordinateValuesY,
    coordinateValuesX,
  };
};
