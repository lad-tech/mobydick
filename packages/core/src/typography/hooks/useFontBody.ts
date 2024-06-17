import {TextStyle} from 'react-native';

import useTheme from '../../styles/hooks/useTheme';
import {
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  TypographyProp,
} from '../types';
import {getSize} from '../utils';
import {getWeight} from '../utils/getWeight';

export const useFontBody = (font: TypographyProp = 'Regular-Primary-S') => {
  const {colors, theme} = useTheme();

  const [wight, color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle: TextStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: theme.font,
    fontSize,
    lineHeight,
    minHeight: lineHeight,
    fontWeight: getWeight(wight as TFontWeight),
  };

  return {fontStyle};
};
