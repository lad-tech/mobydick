import {Platform} from 'react-native';

import {TFontWeight} from '../types';

export const fontResolver = (weight: TFontWeight) => {
  const map = {
    [TFontWeight.Bold]: Platform.select({
      android: 'Inter_700Bold',
      ios: 'Inter-Bold',
      default: 'Inter_700Bold',
    }),
    [TFontWeight.SemiBold]: Platform.select({
      android: 'Inter_600SemiBold',
      ios: 'Inter-SemiBold',
      default: 'Inter_600SemiBold',
    }),
    [TFontWeight.Medium]: Platform.select({
      android: 'Inter_500Medium',
      ios: 'Inter-Medium',
      default: 'Inter_500Medium',
    }),
    [TFontWeight.Regular]: Platform.select({
      android: 'Inter_400Regular',
      ios: 'Inter-Regular',
      default: 'Inter_400Regular',
    }),
  };

  return map[weight];
};
