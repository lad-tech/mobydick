import {Dimensions, PixelRatio} from 'react-native';

const guidelineBaseWidth = 375;
export const scale = (size: number): number => {
  const {width, height} = Dimensions.get('window');

  if (width < height) {
    return (width / guidelineBaseWidth) * size;
  } else {
    return (height / guidelineBaseWidth) * size;
  }
};

/**
 * @deprecated Bad working with large screens use `px` instead
 */
const rem = (size: number, factor = 0.5): number => {
  const newSize = size + (scale(size) - size) * factor;

  return PixelRatio.roundToNearestPixel(newSize);
};

export default rem;
