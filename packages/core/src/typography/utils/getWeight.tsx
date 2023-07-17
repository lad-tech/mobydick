import {TFontWeight, TWeights} from '../types';

const weightsToFonts: TWeights = {
  Regular: 'Inter-Regular',
  Medium: 'Inter-Medium',
  SemiBold: 'Inter-SemiBold',
  Bold: 'Inter-Bold',
  Italic: 'Inter-Italic',
  BoldItalic: 'Inter-BoldItalic',
};
export const getWeight = (weight: TFontWeight): string =>
  weightsToFonts[weight];
