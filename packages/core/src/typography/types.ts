import {TextStyle} from 'react-native';

import {ITextProps} from '../basic/components/Text/types';
import {ITextColors} from '../styles/constants/colors/types';

export interface IStyledTextProps extends ITextProps {
  font?: TypographyProp | undefined;
}

export enum TFontSize {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
  XS = 'XS',
  XXS = 'XXS',
  XXXS = 'XXXS',
}

export enum TFontWeight {
  Regular = 'Regular',
  Medium = 'Medium',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
  Italic = 'Italic',
  BoldItalic = 'BoldItalic',
}

export const TEXT = 'Text';

export type TFontColorConverter<K> = K extends `${typeof TEXT}${infer R}`
  ? R
  : never;

export type TFontColor = TFontColorConverter<keyof ITextColors>;

export type TSizes = Record<TFontSize, {fontSize: number; lineHeight: number}>;

export type TWeights = Record<TFontWeight, string>;

export type TypographyProp = `${TFontWeight}-${TFontColor}-${TFontSize}`;

export type TFontStyle = Pick<
  TextStyle,
  'color' | 'fontSize' | 'fontFamily' | 'lineHeight'
>;
