import {TextStyle} from 'react-native';

import useTheme from '../../styles/hooks/useTheme';
import {
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  TypographyProp,
} from '../types';
import {fontResolver, getSize} from '../utils';
import {getWeight} from '../utils/getWeight';

export const useFontBody = (font: TypographyProp = 'Regular-Primary-S') => {
  const {colors, customFontResolver} = useTheme();

  const [weight, color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle: TextStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: customFontResolver
      ? customFontResolver(weight as TFontWeight)
      : fontResolver(weight as TFontWeight),
    fontSize,
    lineHeight,
    minHeight: lineHeight,
    fontWeight: getWeight(weight as TFontWeight),
  };

  return {fontStyle};
};
