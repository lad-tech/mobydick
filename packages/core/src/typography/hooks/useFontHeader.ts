import {TextStyle} from 'react-native';

import useTheme from '../../styles/hooks/useTheme';
import {HeaderProp, TEXT, TFontColor, TFontSize} from '../types';
import {getSize} from '../utils';

export const useFontHeader = (font: HeaderProp = 'Primary-H1') => {
  const {colors, theme} = useTheme();

  const [color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle: TextStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: theme.font,
    fontSize,
    lineHeight,
    minHeight: lineHeight,
    fontWeight: '600',
  };

  return {fontStyle};
};
