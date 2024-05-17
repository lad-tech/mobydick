import {TFontSize, TSizes} from '../types';
import px from '../../styles/utils/px';

const sizes: TSizes = {
  H1: {fontSize: px(36), lineHeight: px(40)},
  H2: {fontSize: px(32), lineHeight: px(36)},
  H3: {fontSize: px(28), lineHeight: px(32)},
  H4: {fontSize: px(24), lineHeight: px(26)},
  H5: {fontSize: px(22), lineHeight: px(24)},

  XL: {fontSize: px(20), lineHeight: px(24)},
  L: {fontSize: px(18), lineHeight: px(22)},
  M: {fontSize: px(16), lineHeight: px(20)},
  S: {fontSize: px(15), lineHeight: px(19)},
  XS: {fontSize: px(14), lineHeight: px(18)},
  XXS: {fontSize: px(12), lineHeight: px(16)},
  XXXS: {fontSize: px(10), lineHeight: px(14)},
};
// eslint-disable-next-line import/prefer-default-export
export const getSize = (
  size: TFontSize,
): {fontSize: number; lineHeight: number} => sizes[size];
