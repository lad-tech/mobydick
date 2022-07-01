import {TextProps} from '@npm/mobydick-core';
import {ITextColors} from '@npm/mobydick-styles';
import {ReactChild} from 'react';
import {TextStyle} from 'react-native';

type ITextChild = ReactChild | string | number | false | undefined | null;

type ITextStyle = TextStyle | undefined | false | null;

export type IStyledTextChildren = ITextChild | ITextChild[];

export interface IStyledTextProps extends TextProps {
  children?: IStyledTextChildren;
  font?: TypographyProp;
  style?: ITextStyle | ITextStyle[];
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
