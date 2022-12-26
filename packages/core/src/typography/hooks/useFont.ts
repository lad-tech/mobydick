import useTheme from '../../styles/theme/hooks/useTheme';
import {
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  TypographyProp,
} from '../types';
import {getSize, getWeight} from '../utils';

export const useFont = (font: TypographyProp = 'Regular-Primary-S') => {
  const {colors} = useTheme();

  const [weight, color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: getWeight(weight as TFontWeight),
    fontSize,
    lineHeight,
  };

  return {fontStyle};
};
