import {Skia} from '@shopify/react-native-skia';

import {chartPaddingHorizontal, chartPaddingVertical} from './constants';

export const generateCoordinatesPath = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  'worklet';
  return Skia.Path.Make()
    .moveTo(chartPaddingHorizontal, 0)
    .lineTo(chartPaddingHorizontal, height - chartPaddingVertical / 2)
    .lineTo(width, height - chartPaddingVertical / 2);
};
