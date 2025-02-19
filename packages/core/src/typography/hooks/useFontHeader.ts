import {TextStyle} from 'react-native';

import useTheme from '../../styles/hooks/useTheme';
import {TEXT, TFontColor, TFontSize, TFontWeight, TitleProp} from '../types';
import {fontResolver, getSize} from '../utils';
import {getWeight} from '../utils/getWeight';

export const useFontHeader = (font: TitleProp = 'Primary-H1') => {
  const {colors, customFontResolver} = useTheme();

  const [color, size] = font.split('-');
  const {fontSize, lineHeight} = getSize(size as TFontSize);

  const fontStyle: TextStyle = {
    color: colors[`${TEXT}${color as TFontColor}`],
    fontFamily: customFontResolver
      ? customFontResolver(TFontWeight.SemiBold)
      : fontResolver(TFontWeight.SemiBold),
    fontSize,
    lineHeight,
    minHeight: lineHeight,
    fontWeight: getWeight(TFontWeight.SemiBold),
  };

  return {fontStyle};
};
