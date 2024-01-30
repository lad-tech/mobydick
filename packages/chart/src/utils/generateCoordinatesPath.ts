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
    .moveTo(chartPaddingHorizontal, chartPaddingVertical)
    .lineTo(chartPaddingHorizontal, height)
    .lineTo(width, height);
};