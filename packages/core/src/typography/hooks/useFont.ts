import useTheme from '../../styles/hooks/useTheme';
import {
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  TypographyLegacyProp,
} from '../types';
import {fontResolver, getSize} from '../utils';

export const useFont = (font: TypographyLegacyProp = 'Regular-Primary-S') => {
  const {colors, customFontResolver} = useTheme();

  const [weight, color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: customFontResolver
      ? customFontResolver(weight as TFontWeight)
      : fontResolver(weight as TFontWeight),
    fontSize,
    lineHeight,
    minHeight: lineHeight,
  };

  return {fontStyle};
};
