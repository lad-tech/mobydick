import {Dimensions, PixelRatio, Platform} from 'react-native';
const Pixel = PixelRatio;

const guidelineBaseWidth = 380;
export const scale = (size: number): number => {
  const {width, height} = Dimensions.get('window');

  if (width < height) {
    return (width / guidelineBaseWidth) * size;
  } else return (height / guidelineBaseWidth) * size;
};

const rem = (size: number, factor = 0.5): number => {
  const newSize = size + (scale(size) - size) * factor;

  if (Platform.OS === 'ios') {
    return Pixel.roundToNearestPixel(newSize);
  }
  return Pixel.roundToNearestPixel(newSize) - 2;
};

export default rem;
