import {StyleProp, TextStyle} from 'react-native';
import * as React from 'react';

import {ITextProps} from '../basic/components/Text/types';
import {ITextColors} from '../styles/colors/types';

export interface IStyledTextProps extends ITextProps {
  children?: React.ReactNode;
  font?: TypographyProp | undefined;
  style?: StyleProp<TextStyle>;
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

export type TFont =
  | 'Inter-Regular'
  | 'Inter-Medium'
  | 'Inter-SemiBold'
  | 'Inter-Bold';

export enum TFontWeight {
  Regular = 'Regular',
  Medium = 'Medium',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
}

export const TEXT = 'Text';

export type TFontColorConverter<K> = K extends `${typeof TEXT}${infer R}`
  ? R
  : never;

export type TFontColor = TFontColorConverter<keyof ITextColors>;

export type TSizes = Record<TFontSize, {fontSize: number; lineHeight: number}>;

export type TWeights = Record<TFontWeight, TFont>;

export type TypographyProp = `${TFontWeight}-${TFontColor}-${TFontSize}`;

export type TFontStyle = Pick<
  TextStyle,
  'color' | 'fontSize' | 'fontFamily' | 'lineHeight'
>;
