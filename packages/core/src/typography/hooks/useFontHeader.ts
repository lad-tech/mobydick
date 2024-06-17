import {TextStyle} from 'react-native';

import useTheme from '../../styles/hooks/useTheme';
import {TEXT, TFontColor, TFontSize, TFontWeight, TitleProp} from '../types';
import {getSize} from '../utils';
import {getWeight} from '../utils/getWeight';

export const useFontHeader = (font: TitleProp = 'Primary-H1') => {
  const {colors, theme} = useTheme();

  const [color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle: TextStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: theme.font,
    fontSize,
    lineHeight,
    minHeight: lineHeight,
    fontWeight: getWeight(TFontWeight.SemiBold),
  };

  return {fontStyle};
};
