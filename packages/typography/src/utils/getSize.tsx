import rem from '@npm/mobydick-styles/src/spaces/rem';

import {TFontSize, TSizes} from '../types';

const sizes: TSizes = {
  H1: {fontSize: rem(36), lineHeight: rem(40)},
  H2: {fontSize: rem(32), lineHeight: rem(36)},
  H3: {fontSize: rem(28), lineHeight: rem(32)},
  H4: {fontSize: rem(24), lineHeight: rem(26)},
  H5: {fontSize: rem(22), lineHeight: rem(24)},

  XL: {fontSize: rem(20), lineHeight: rem(24)},
  L: {fontSize: rem(18), lineHeight: rem(22)},
  M: {fontSize: rem(16), lineHeight: rem(20)},
  S: {fontSize: rem(15), lineHeight: rem(19)},
  XS: {fontSize: rem(14), lineHeight: rem(18)},
  XXS: {fontSize: rem(12), lineHeight: rem(16)},
  XXXS: {fontSize: rem(10), lineHeight: rem(14)},
};
// eslint-disable-next-line import/prefer-default-export
export const getSize = (
  size: TFontSize,
): {fontSize: number; lineHeight: number} => sizes[size];
