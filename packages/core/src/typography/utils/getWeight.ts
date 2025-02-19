import {TextStyle} from 'react-native';

import {TFontWeight} from '../types';

export const getWeight = (weight: TFontWeight): TextStyle['fontWeight'] => {
  const map: Record<TFontWeight, TextStyle['fontWeight']> = {
    [TFontWeight.Bold]: '700',
    [TFontWeight.SemiBold]: '600',
    [TFontWeight.Medium]: '500',
    [TFontWeight.Regular]: '400',
  };
  return map[weight];
};
