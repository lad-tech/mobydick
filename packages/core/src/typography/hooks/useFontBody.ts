import {TextStyle} from 'react-native';

import useTheme from '../../styles/hooks/useTheme';
import {BodyProp, TEXT, TFontColor, TFontSize, TFontWeight} from '../types';
import {getSize} from '../utils';

const getWeight = (weight: TFontWeight): TextStyle['fontWeight'] => {
  const map: Record<TFontWeight, TextStyle['fontWeight']> = {
    [TFontWeight.Bold]: '700',
    [TFontWeight.SemiBold]: '600',
    [TFontWeight.Medium]: '500',
    [TFontWeight.Regular]: '400',
  };
  return map[weight];
};

export const useFontBody = (font: BodyProp = 'Regular-Primary-S') => {
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
