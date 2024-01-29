import useTheme from '../../styles/hooks/useTheme';
import {
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  TypographyProp,
} from '../types';
import {getSize} from '../utils';

export const useFont = (font: TypographyProp = 'Regular-Primary-S') => {
  const {colors, theme} = useTheme();
  const getWeight = (weight: TFontWeight): string => theme.fonts[weight];

  const [weight, color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: getWeight(weight as TFontWeight),
    fontSize,
    lineHeight,
    minHeight: lineHeight,
  };

  return {fontStyle};
};
