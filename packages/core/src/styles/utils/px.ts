import {PixelRatio} from 'react-native';

const px = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size);
};

export default px;
