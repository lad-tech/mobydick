import {TFontSize, TSizes} from '../types';

const sizes: TSizes = {
  H1: {fontSize: 36, lineHeight: 40},
  H2: {fontSize: 32, lineHeight: 36},
  H3: {fontSize: 28, lineHeight: 32},
  H4: {fontSize: 24, lineHeight: 26},
  H5: {fontSize: 22, lineHeight: 24},

  XL: {fontSize: 20, lineHeight: 24},
  L: {fontSize: 18, lineHeight: 22},
  M: {fontSize: 16, lineHeight: 20},
  S: {fontSize: 15, lineHeight: 19},
  XS: {fontSize: 14, lineHeight: 18},
  XXS: {fontSize: 12, lineHeight: 16},
  XXXS: {fontSize: 10, lineHeight: 14},
};
export const getSize = (
  size: TFontSize,
): {fontSize: number; lineHeight: number} => sizes[size];
