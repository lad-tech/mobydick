import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {IShadowKeys} from '../../shadows';

export type ITextColors = {
  TextPrimary: string;
  TextSecondary: string;
  TextTertiary: string;
  TextMuted: string;
  TextAccent: string;
  TextAccentContrast: string;
  TextContrast: string;
  TextError: string;
  TextBlack: string;
  TextBlackExtra: string;
  TextWhite: string;
  TextWhiteExtra: string;
  TextSuccess: string;
  TextWarning: string;
};

export type IIconColors = {
  IconNeutral: string;
  IconMuted: string;
  IconBase: string;
  IconAttention: string;
  IconAdditional: string;
  IconWhite: string;
  IconBlack: string;
  IconSuccess: string;
};

export type IElementColors = {
  ElementNeutral: string;
  ElementMuted: string;
  ElementBase: string;
  ElementAttention: string;
  ElementAdditional: string;
  ElementWhite: string;
  ElementBlack: string;
  ElementSuccess: string;
};

export type IBorderColors = {
  BorderExtra: string;
  BorderHard: string;
  BorderNormal: string;
  BorderSoft: string;
  BorderError: string;
  BorderSuccess: string;
};

export type IBgColors = {
  BgPrimary: string;
  BgPrimaryExtra: string;
  BgSecondary: string;
  BgTertiary: string;
  BgQuaternary: string;
  BgContrast: string;
  BgContrastExtra: string;
  BgError: string;
  BgAccent: string;
  BgAccentSoft: string;
  BgAccentNormal: string;
  BgAccentHard: string;
  BgOverlay: string;
  BgBlack: string;
  BgWhite: string;
  BgWhiteSoft: string;
  BgSuccess: string;
  BgWarning: string;
};

export type ICTAColors = {
  CtaBtnPrimary: string;
  CtaBtnSecondary: string;
  CtaBtnMuted: string;
  CtaBtnDestructive: string;
};

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
