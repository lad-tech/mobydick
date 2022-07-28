import {TFontWeight, TWeights} from '../components/Typography/types';

const weightsToFonts: TWeights = {
  Regular: 'Inter-Regular',
  Medium: 'Inter-Medium',
  SemiBold: 'Inter-SemiBold',
  Bold: 'Inter-Bold',
};
export const getWeight = (weight: TFontWeight): string =>
  weightsToFonts[weight];
