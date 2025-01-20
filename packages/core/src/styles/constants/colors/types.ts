import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {IShadowKeys} from '../../shadows';

export type ITextColors = {
  TextAccent: string;
  TextAccentContrast: string;
  TextPrimary: string;
  TextSecondary: string;
  TextTertiary: string;
  TextMuted: string;
  TextSuccess: string;
  TextWarning: string;
  TextError: string;
  TextWhite: string;
  TextWhiteExtra: string;
  TextBlack: string;
  TextBlackExtra: string;
  TextInverse: string;

  /** @deprecated use TextInverse **/
  TextContrast: string;
};

export type IIconColors = {
  IconAccent: string;
  IconNeutral: string;
  IconMuted: string;
  IconSuccess: string;
  IconWarning: string;
  IconError: string;
  IconWhite: string;
  IconBlack: string;
  IconInverse: string;

  /** @deprecated use IconAccent **/
  IconBase: string;
  /** @deprecated use IconWarning **/
  IconAdditional: string;
  /** @deprecated use IconError **/
  IconAttention: string;
};

export type IElementColors = {
  ElementAccent: string;
  ElementNeutral: string;
  ElementMuted: string;
  ElementSuccess: string;
  ElementWarning: string;
  ElementError: string;
  ElementWhite: string;
  ElementBlack: string;
  ElementInverse: string;

  /** @deprecated use ElementAccent **/
  ElementBase: string;
  /** @deprecated use ElementWarning **/
  ElementAdditional: string;
  /** @deprecated use ElementError **/
  ElementAttention: string;
};

export type IBorderColors = {
  BorderAccent: string;
  BorderExtra: string;
  BorderHard: string;
  BorderNormal: string;
  BorderSoft: string;
  BorderSuccess: string;
  BorderWarning: string;
  BorderError: string;
};

export type IBgColors = {
  BgAccent: string;
  BgPrimary: string;
  BgPrimaryExtra: string;
  BgSecondary: string;
  BgTertiary: string;
  BgSuccess: string;
  BgWarning: string;
  BgError: string;
  BgWhite: string;
  BgBlack: string;
  BgOverlay: string;
  BgInverse: string;

  /** @deprecated **/
  BgWhiteSoft: string;
  /** @deprecated use AdditionalSixthSoft **/
  BgAccentSoft: string;
  /** @deprecated **/
  BgAccentNormal: string;
  /** @deprecated **/
  BgAccentHard: string;
  /** @deprecated **/
  BgQuaternary: string;
  /** @deprecated use BgInverse **/
  BgContrast: string;
  /** @deprecated **/
  BgContrastExtra: string;
};

export type ICTAColors = {
  CtaBtnPrimary: string;
  CtaBtnSecondary: string;
  CtaBtnMuted: string;
  CtaBtnDestructive: string;
};

export type IAdditionalColors = {
  AdditionalFirst: string;
  AdditionalFirstHard: string;
  AdditionalFirstSoft: string;

  AdditionalSecond: string;
  AdditionalSecondHard: string;
  AdditionalSecondSoft: string;

  AdditionalThird: string;
  AdditionalThirdHard: string;
  AdditionalThirdSoft: string;

  AdditionalFourth: string;
  AdditionalFourthHard: string;
  AdditionalFourthSoft: string;

  AdditionalFifth: string;
  AdditionalFifthHard: string;
  AdditionalFifthSoft: string;

  AdditionalSixth: string;
  AdditionalSixthHard: string;
  AdditionalSixthSoft: string;

  AdditionalSeventh: string;
  AdditionalSeventhHard: string;
  AdditionalSeventhSoft: string;
};

/** @deprecated **/
export type IChartColors = {
  ChartFirst: string;
  ChartFirstHard: string;
  ChartFirstSoft: string;
  ChartSecond: string;
  ChartSecondHard: string;
  ChartSecondSoft: string;
  ChartThird: string;
  ChartThirdHard: string;
  ChartThirdSoft: string;
  ChartFourth: string;
  ChartFourthHard: string;
  ChartFourthSoft: string;
  ChartFifth: string;
  ChartFifthHard: string;
  ChartFifthSoft: string;
  ChartSixth: string;
  ChartSixthHard: string;
  ChartSixthSoft: string;
  ChartSeventh: string;
  ChartSeventhHard: string;
  ChartSeventhSoft: string;
};
/** @deprecated **/
export type ICategoryColors = {
  CategoryFirst: string;
  CategoryFirstHard: string;
  CategoryFirstSoft: string;
  CategorySecond: string;
  CategorySecondHard: string;
  CategorySecondSoft: string;
  CategoryThird: string;
  CategoryThirdHard: string;
  CategoryThirdSoft: string;
  CategoryFourth: string;
  CategoryFourthHard: string;
  CategoryFourthSoft: string;
  CategoryFifth: string;
  CategoryFifthHard: string;
  CategoryFifthSoft: string;
  CategorySixth: string;
  CategorySixthHard: string;
  CategorySixthSoft: string;
  CategorySeventh: string;
  CategorySeventhHard: string;
  CategorySeventhSoft: string;
};
/** @deprecated **/
export type IBannerColors = {
  BannerFirst: string;
  BannerFirstHard: string;
  BannerFirstSoft: string;
  BannerSecond: string;
  BannerSecondHard: string;
  BannerSecondSoft: string;
  BannerThird: string;
  BannerThirdHard: string;
  BannerThirdSoft: string;
  BannerFourth: string;
  BannerFourthHard: string;
  BannerFourthSoft: string;
  BannerFifth: string;
  BannerFifthHard: string;
  BannerFifthSoft: string;
  BannerSixth: string;
  BannerSixthHard: string;
  BannerSixthSoft: string;
  BannerSeventh: string;
  BannerSeventhHard: string;
  BannerSeventhSoft: string;
};

export type IShadow = Record<IShadowKeys, ViewStyle | TextStyle | ImageStyle>;
