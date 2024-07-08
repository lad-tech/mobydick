import {
  IBannerColors,
  IBgColors,
  IBorderColors,
  ICategoryColors,
  IChartColors,
  ICTAColors,
  IElementColors,
  IIconColors,
  ITextColors,
} from './types';

export const primitivesColors = {
  Blue100: '#2B78EE',
  Blue80: '#5B99F9',
  Blue04: 'rgba(91, 153, 249, 0.4)',
  Blue01: 'rgba(91, 153, 249, 0.1)',

  Violet100: '#916CFC',
  Violet80: '#AE92FC',
  Violet04: 'rgba(174, 146, 252, 0.4)',
  Violet01: 'rgba(174, 146, 252, 0.1)',

  Green100: '#29A35C',
  Green80: '#3ABD70',
  Green04: 'rgba(58, 189, 112, 0.4)',
  Green01: 'rgba(58, 189, 112, 0.1)',

  Mint100: '#4FAEAE',
  Mint80: '#30C5C5',
  Mint04: 'rgba(48, 197, 197, 0.4)',
  Mint01: 'rgba(48, 197, 197, 0.1)',

  Red100: '#F54C3D',
  Red80: '#F96154',
  Red04: 'rgba(249, 97, 84, 0.4)',
  Red01: 'rgba(249, 97, 84, 0.1)',

  Orange100: '#FE8027',
  Orange80: '#FA9247',
  Orange04: 'rgba(250, 146, 71, 0.4)',
  Orange01: 'rgba(250, 146, 71, 0.1)',

  Yellow100: '#FABC42',
  Yellow80: '#FAD242',
  Yellow04: 'rgba(250, 210, 66, 0.4)',
  Yellow01: 'rgba(250, 210, 66, 0.1)',

  White100: '#FFFFFF',
  White08: 'rgba(255, 255, 255, 0.8)',
  White06: 'rgba(255, 255, 255, 0.6)',
  White04: 'rgba(255, 255, 255, 0.4)',
  White02: 'rgba(255, 255, 255, 0.2)',
  White01: 'rgba(255, 255, 255, 0.1)',

  Black100: '#151C2C',
  Black08: 'rgba(21, 28, 44, 0.8)',
  Black06: 'rgba(21, 28, 44, 0.6)',
  Black04: 'rgba(21, 28, 44, 0.4)',
  Black02: 'rgba(21, 28, 44, 0.2)',
  Black01: 'rgba(21, 28, 44, 0.1)',

  Neutral100: '#20242D',
  Neutral80: '#353A45',
  Neutral60: '#5E6678',
  Neutral40: '#9BA1B0',
  Neutral20: '#D0D6E0',
  Neutral10: '#F2F4F7',
  Neutral0: '#FFFFFF',

  Accent100: '#2B78EE',
  Accent80: '#5B99F9',
};

export const defaultTextLightColor: ITextColors = {
  TextAccent: primitivesColors.Accent100,
  TextAccentContrast: primitivesColors.Accent80,
  TextPrimary: primitivesColors.Neutral100,
  TextSecondary: primitivesColors.Neutral80,
  TextTertiary: primitivesColors.Neutral60,
  TextMuted: primitivesColors.Neutral40,
  TextSuccess: primitivesColors.Green100,
  TextWarning: primitivesColors.Orange100,
  TextError: primitivesColors.Red100,
  TextWhite: primitivesColors.White100,
  TextWhiteExtra: primitivesColors.White08,
  TextBlack: primitivesColors.Black100,
  TextBlackExtra: primitivesColors.Black08,
  TextInverse: primitivesColors.Neutral0,

  /** @deprecated use TextInverse **/
  TextContrast: '#FFF',
};
export const defaultTextDarkColor: ITextColors = {
  TextAccent: primitivesColors.Accent100,
  TextAccentContrast: primitivesColors.Accent80,
  TextPrimary: primitivesColors.Neutral0,
  TextSecondary: primitivesColors.Neutral10,
  TextTertiary: primitivesColors.Neutral40,
  TextMuted: primitivesColors.Neutral60,
  TextSuccess: primitivesColors.Green80,
  TextWarning: primitivesColors.Orange80,
  TextError: primitivesColors.Red80,
  TextWhite: primitivesColors.White100,
  TextWhiteExtra: primitivesColors.White08,
  TextBlack: primitivesColors.Black100,
  TextBlackExtra: primitivesColors.Black08,
  TextInverse: primitivesColors.Neutral100,

  /** @deprecated use TextInverse **/
  TextContrast: '#20242D',
};

export const defaultIconLightColor: IIconColors = {
  IconAccent: primitivesColors.Accent100,
  IconNeutral: primitivesColors.Neutral80,
  IconMuted: primitivesColors.Neutral40,
  IconSuccess: primitivesColors.Green100,
  IconWarning: primitivesColors.Orange100,
  IconError: primitivesColors.Red100,
  IconWhite: primitivesColors.White100,
  IconBlack: primitivesColors.Black100,
  IconInverse: primitivesColors.Neutral0,

  /** @deprecated use IconAccent **/
  IconBase: '#2B78EE',
  /** @deprecated use IconWarning **/
  IconAdditional: '#FAB742',
  /** @deprecated use IconError **/
  IconAttention: '#F54D3D',
};
export const defaultIconDarkColor: IIconColors = {
  IconAccent: primitivesColors.Accent80,
  IconNeutral: primitivesColors.Neutral10,
  IconMuted: primitivesColors.Neutral40,
  IconSuccess: primitivesColors.Green80,
  IconWarning: primitivesColors.Orange80,
  IconError: primitivesColors.Red80,
  IconWhite: primitivesColors.White100,
  IconBlack: primitivesColors.Black100,
  IconInverse: primitivesColors.Neutral100,

  /** @deprecated use IconAccent **/
  IconBase: '#4C94FF',
  /** @deprecated use IconWarning **/
  IconAdditional: '#FAB742',
  /** @deprecated use IconError **/
  IconAttention: '#F86B5D',
};

export const defaultElementLightColor: IElementColors = {
  ElementAccent: primitivesColors.Accent100,
  ElementNeutral: primitivesColors.Neutral80,
  ElementMuted: primitivesColors.Neutral20,
  ElementSuccess: primitivesColors.Green100,
  ElementWarning: primitivesColors.Orange100,
  ElementError: primitivesColors.Red100,
  ElementWhite: primitivesColors.White100,
  ElementBlack: primitivesColors.Black100,
  ElementInverse: primitivesColors.Neutral0,

  /** @deprecated use ElementAccent **/
  ElementBase: '#2B78EE',
  /** @deprecated use ElementWarning **/
  ElementAdditional: '#FAB742',
  /** @deprecated use ElementError **/
  ElementAttention: '#F54D3D',
};
export const defaultElementDarkColor: IElementColors = {
  ElementAccent: primitivesColors.Accent80,
  ElementNeutral: primitivesColors.Neutral10,
  ElementMuted: primitivesColors.Neutral60,
  ElementSuccess: primitivesColors.Green80,
  ElementWarning: primitivesColors.Orange80,
  ElementError: primitivesColors.Red80,
  ElementWhite: primitivesColors.White100,
  ElementBlack: primitivesColors.Black100,
  ElementInverse: primitivesColors.Neutral100,

  /** @deprecated use ElementAccent **/
  ElementBase: '#4C94FF',
  /** @deprecated use ElementWarning **/
  ElementAttention: '#F86B5D',
  /** @deprecated use ElementError **/
  ElementAdditional: '#FAB742',
};

export const defaultBorderLightColor: IBorderColors = {
  BorderAccent: primitivesColors.Blue100,
  BorderExtra: primitivesColors.Black08,
  BorderHard: primitivesColors.Black04,
  BorderNormal: primitivesColors.Black02,
  BorderSoft: primitivesColors.Black01,
  BorderSuccess: primitivesColors.Green100, // old blue
  BorderWarning: primitivesColors.Orange100,
  BorderError: primitivesColors.Red100,
};
export const defaultBorderDarkColor: IBorderColors = {
  BorderAccent: primitivesColors.Blue80,
  BorderExtra: primitivesColors.White08,
  BorderHard: primitivesColors.White04,
  BorderNormal: primitivesColors.White02,
  BorderSoft: primitivesColors.White01,
  BorderSuccess: primitivesColors.Green80, // old blue
  BorderWarning: primitivesColors.Orange80,
  BorderError: primitivesColors.Red80,
};

export const defaultBgLightColor: IBgColors = {
  BgAccent: primitivesColors.Accent100,
  BgPrimary: primitivesColors.Neutral0,
  BgPrimaryExtra: primitivesColors.White08,
  BgSecondary: primitivesColors.Neutral10,
  BgTertiary: primitivesColors.Neutral20,
  BgSuccess: primitivesColors.Green01,
  BgWarning: primitivesColors.Orange01,
  BgError: primitivesColors.Red01,
  BgWhite: primitivesColors.White100,
  BgBlack: primitivesColors.Black100,
  BgOverlay: primitivesColors.Black02,
  BgInverse: primitivesColors.Neutral100,

  /** @deprecated **/
  BgWhiteSoft: 'rgba(255, 255, 255, 0.15)',
  /** @deprecated **/
  BgAccentSoft: 'rgba(43, 120, 238, 0.15)',
  /** @deprecated **/
  BgAccentNormal: 'rgba(43, 120, 238, 0.3)',
  /** @deprecated **/
  BgAccentHard: 'rgba(43, 120, 238, 0.45)',
  /** @deprecated **/
  BgQuaternary: '#B6BBC6',
  /** @deprecated **/
  BgContrast: '#20242D',
  /** @deprecated **/
  BgContrastExtra: 'rgba(32, 36, 45, 0.75)',
};
export const defaultBgDarkColor: IBgColors = {
  BgAccent: primitivesColors.Accent80,
  BgPrimary: primitivesColors.Neutral100,
  BgPrimaryExtra: primitivesColors.Black08,
  BgSecondary: primitivesColors.Neutral80,
  BgTertiary: primitivesColors.Neutral60,
  BgSuccess: primitivesColors.Green01,
  BgWarning: primitivesColors.Orange01,
  BgError: primitivesColors.Red01,
  BgWhite: primitivesColors.White100,
  BgBlack: primitivesColors.Black100,
  BgOverlay: primitivesColors.White01,
  BgInverse: primitivesColors.Neutral0,

  /** @deprecated **/
  BgQuaternary: '#5E6678',
  /** @deprecated **/
  BgContrast: '#FFF',
  /** @deprecated **/
  BgContrastExtra: 'rgba(255, 255, 255, 0.75)',
  /** @deprecated **/
  BgWhiteSoft: 'rgba(255, 255, 255, 0.15)',
  /** @deprecated **/
  BgAccentSoft: 'rgba(43, 120, 238, 0.15)',
  /** @deprecated **/
  BgAccentNormal: 'rgba(43, 120, 238, 0.3)',
  /** @deprecated **/
  BgAccentHard: 'rgba(43, 120, 238, 0.45)',
};

export const defaultCTALightColor: ICTAColors = {
  CtaBtnPrimary: primitivesColors.Accent100,
  CtaBtnSecondary: primitivesColors.Neutral10,
  CtaBtnMuted: primitivesColors.Neutral10,
  CtaBtnDestructive: primitivesColors.Red100,
};
export const defaultCTADarkColor: ICTAColors = {
  CtaBtnPrimary: primitivesColors.Accent80,
  CtaBtnSecondary: primitivesColors.Neutral80,
  CtaBtnMuted: primitivesColors.Neutral80,
  CtaBtnDestructive: primitivesColors.Red80,
};

export const defaultAdditionalLightColor = {
  AdditionalFirst: primitivesColors.Red100,
  AdditionalFirstHard: primitivesColors.Red04,
  AdditionalFirstSoft: primitivesColors.Red01,

  AdditionalSecond: primitivesColors.Orange100,
  AdditionalSecondHard: primitivesColors.Orange04,
  AdditionalSecondSoft: primitivesColors.Orange01,

  AdditionalThird: primitivesColors.Yellow100,
  AdditionalThirdHard: primitivesColors.Yellow04,
  AdditionalThirdSoft: primitivesColors.Yellow01,

  AdditionalFourth: primitivesColors.Green100,
  AdditionalFourthHard: primitivesColors.Green04,
  AdditionalFourthSoft: primitivesColors.Green01,

  AdditionalFifth: primitivesColors.Mint100,
  AdditionalFifthHard: primitivesColors.Mint04,
  AdditionalFifthSoft: primitivesColors.Mint01,

  AdditionalSixth: primitivesColors.Blue100,
  AdditionalSixthHard: primitivesColors.Blue04,
  AdditionalSixthSoft: primitivesColors.Blue01,

  AdditionalSeventh: primitivesColors.Violet100,
  AdditionalSeventhHard: primitivesColors.Violet04,
  AdditionalSeventhSoft: primitivesColors.Violet01,
};
export const defaultAdditionalDarkColor = {
  AdditionalFirst: primitivesColors.Red80,
  AdditionalFirstHard: primitivesColors.Red04,
  AdditionalFirstSoft: primitivesColors.Red01,

  AdditionalSecond: primitivesColors.Orange80,
  AdditionalSecondHard: primitivesColors.Orange04,
  AdditionalSecondSoft: primitivesColors.Orange01,

  AdditionalThird: primitivesColors.Yellow80,
  AdditionalThirdHard: primitivesColors.Yellow04,
  AdditionalThirdSoft: primitivesColors.Yellow01,

  AdditionalFourth: primitivesColors.Green80,
  AdditionalFourthHard: primitivesColors.Green04,
  AdditionalFourthSoft: primitivesColors.Green01,

  AdditionalFifth: primitivesColors.Mint80,
  AdditionalFifthHard: primitivesColors.Mint04,
  AdditionalFifthSoft: primitivesColors.Mint01,

  AdditionalSixth: primitivesColors.Blue80,
  AdditionalSixthHard: primitivesColors.Blue04,
  AdditionalSixthSoft: primitivesColors.Blue01,

  AdditionalSeventh: primitivesColors.Violet80,
  AdditionalSeventhHard: primitivesColors.Violet04,
  AdditionalSeventhSoft: primitivesColors.Violet01,
};

/** @deprecated **/
export const defaultChartLightColor: IChartColors = {
  ChartFirst: '#FF6952',
  ChartFirstHard: 'rgba(255, 105, 82, 0.45)',
  ChartFirstSoft: 'rgba(255, 105, 82, 0.15)',
  ChartSecond: '#FA9247',
  ChartSecondHard: 'rgba(250, 146, 71, 0.45)',
  ChartSecondSoft: 'rgba(250, 146, 71, 0.15)',
  ChartThird: '#FAB742',
  ChartThirdHard: 'rgba(250, 183, 66, 0.45)',
  ChartThirdSoft: 'rgba(250, 183, 66, 0.15)',
  ChartFourth: '#4ABA79',
  ChartFourthHard: 'rgba(74, 186, 121, 0.45)',
  ChartFourthSoft: 'rgba(74, 186, 121, 0.15)',
  ChartFifth: '#2DB3B3',
  ChartFifthHard: 'rgba(45, 179, 179, 0.45)',
  ChartFifthSoft: 'rgba(45, 179, 179, 0.15)',
  ChartSixth: '#2B78EE',
  ChartSixthHard: 'rgba(43, 120, 238, 0.45)',
  ChartSixthSoft: 'rgba(43, 120, 238, 0.15)',
  ChartSeventh: '#6E6EF7',
  ChartSeventhHard: 'rgba(110, 110, 247, 0.45)',
  ChartSeventhSoft: 'rgba(110, 110, 247, 0.15)',
};
/** @deprecated **/
export const defaultChartDarkColor: IChartColors = {
  ChartFirst: '#FF6952',
  ChartFirstHard: 'rgba(255, 105, 82, 0.45)',
  ChartFirstSoft: 'rgba(255, 105, 82, 0.15)',
  ChartSecond: '#FA9247',
  ChartSecondHard: 'rgba(250, 146, 71, 0.45)',
  ChartSecondSoft: 'rgba(250, 146, 71, 0.15)',
  ChartThird: '#FAB742',
  ChartThirdHard: 'rgba(250, 183, 66, 0.45)',
  ChartThirdSoft: 'rgba(250, 183, 66, 0.15)',
  ChartFourth: '#4ABA79',
  ChartFourthHard: 'rgba(74, 186, 121, 0.45)',
  ChartFourthSoft: 'rgba(74, 186, 121, 0.15)',
  ChartFifth: '#2DB3B3',
  ChartFifthHard: 'rgba(45, 179, 179, 0.45)',
  ChartFifthSoft: 'rgba(45, 179, 179, 0.15)',
  ChartSixth: '#2B78EE',
  ChartSixthHard: 'rgba(43, 120, 238, 0.45)',
  ChartSixthSoft: 'rgba(43, 120, 238, 0.15)',
  ChartSeventh: '#6E6EF7',
  ChartSeventhHard: 'rgba(110, 110, 247, 0.45)',
  ChartSeventhSoft: 'rgba(110, 110, 247, 0.15)',
};

/** @deprecated **/
export const defaultCategoryLightColor: ICategoryColors = {
  CategoryFirst: '#FF6952',
  CategoryFirstHard: 'rgba(255, 105, 82, 0.45)',
  CategoryFirstSoft: 'rgba(255, 105, 82, 0.15)',
  CategorySecond: '#FA9247',
  CategorySecondHard: 'rgba(250, 146, 71, 0.45)',
  CategorySecondSoft: 'rgba(250, 146, 71, 0.15)',
  CategoryThird: '#FAB742',
  CategoryThirdHard: 'rgba(250, 183, 66, 0.45)',
  CategoryThirdSoft: 'rgba(250, 183, 66, 0.15)',
  CategoryFourth: '#4ABA79',
  CategoryFourthHard: 'rgba(74, 186, 121, 0.45)',
  CategoryFourthSoft: 'rgba(74, 186, 121, 0.15)',
  CategoryFifth: '#2DB3B3',
  CategoryFifthHard: 'rgba(45, 179, 179, 0.45)',
  CategoryFifthSoft: 'rgba(45, 179, 179, 0.15)',
  CategorySixth: '#2B78EE',
  CategorySixthHard: 'rgba(43, 120, 238, 0.45)',
  CategorySixthSoft: 'rgba(43, 120, 238, 0.15)',
  CategorySeventh: '#6E6EF7',
  CategorySeventhHard: 'rgba(110, 110, 247, 0.45)',
  CategorySeventhSoft: 'rgba(110, 110, 247, 0.15)',
};
/** @deprecated **/
export const defaultCategoryDarkColor: ICategoryColors = {
  CategoryFirst: '#FF6952',
  CategoryFirstHard: 'rgba(255, 105, 82, 0.45)',
  CategoryFirstSoft: 'rgba(255, 105, 82, 0.15)',
  CategorySecond: '#FA9247',
  CategorySecondHard: 'rgba(250, 146, 71, 0.45)',
  CategorySecondSoft: 'rgba(250, 146, 71, 0.15)',
  CategoryThird: '#FAB742',
  CategoryThirdHard: 'rgba(250, 183, 66, 0.45)',
  CategoryThirdSoft: 'rgba(250, 183, 66, 0.15)',
  CategoryFourth: '#4ABA79',
  CategoryFourthHard: 'rgba(74, 186, 121, 0.45)',
  CategoryFourthSoft: 'rgba(74, 186, 121, 0.15)',
  CategoryFifth: '#2DB3B3',
  CategoryFifthHard: 'rgba(45, 179, 179, 0.45)',
  CategoryFifthSoft: 'rgba(45, 179, 179, 0.15)',
  CategorySixth: '#2B78EE',
  CategorySixthHard: 'rgba(43, 120, 238, 0.45)',
  CategorySixthSoft: 'rgba(43, 120, 238, 0.15)',
  CategorySeventh: '#6E6EF7',
  CategorySeventhHard: 'rgba(110, 110, 247, 0.45)',
  CategorySeventhSoft: 'rgba(110, 110, 247, 0.15)',
};

/** @deprecated **/
export const defaultBannerLightColor: IBannerColors = {
  BannerFirst: '#FF6952',
  BannerFirstHard: 'rgba(255, 105, 82, 0.45)',
  BannerFirstSoft: 'rgba(255, 105, 82, 0.15)',
  BannerSecond: '#FA9247',
  BannerSecondHard: 'rgba(250, 146, 71, 0.45)',
  BannerSecondSoft: 'rgba(250, 146, 71, 0.15)',
  BannerThird: '#FAB742',
  BannerThirdHard: 'rgba(250, 183, 66, 0.45)',
  BannerThirdSoft: 'rgba(250, 183, 66, 0.15)',
  BannerFourth: '#4ABA79',
  BannerFourthHard: 'rgba(74, 186, 121, 0.45)',
  BannerFourthSoft: 'rgba(74, 186, 121, 0.15)',
  BannerFifth: '#2DB3B3',
  BannerFifthHard: 'rgba(45, 179, 179, 0.45)',
  BannerFifthSoft: 'rgba(45, 179, 179, 0.15)',
  BannerSixth: '#2B78EE',
  BannerSixthHard: 'rgba(43, 120, 238, 0.45)',
  BannerSixthSoft: 'rgba(43, 120, 238, 0.15)',
  BannerSeventh: '#6E6EF7',
  BannerSeventhHard: 'rgba(110, 110, 247, 0.45)',
  BannerSeventhSoft: 'rgba(110, 110, 247, 0.15)',
};
/** @deprecated **/
export const defaultBannerDarkColor: IBannerColors = {
  BannerFirst: '#FF6952',
  BannerFirstHard: 'rgba(255, 105, 82, 0.45)',
  BannerFirstSoft: 'rgba(255, 105, 82, 0.15)',
  BannerSecond: '#FA9247',
  BannerSecondHard: 'rgba(250, 146, 71, 0.45)',
  BannerSecondSoft: 'rgba(250, 146, 71, 0.15)',
  BannerThird: '#FAB742',
  BannerThirdHard: 'rgba(250, 183, 66, 0.45)',
  BannerThirdSoft: 'rgba(250, 183, 66, 0.15)',
  BannerFourth: '#4ABA79',
  BannerFourthHard: 'rgba(74, 186, 121, 0.45)',
  BannerFourthSoft: 'rgba(74, 186, 121, 0.15)',
  BannerFifth: '#2DB3B3',
  BannerFifthHard: 'rgba(45, 179, 179, 0.45)',
  BannerFifthSoft: 'rgba(45, 179, 179, 0.15)',
  BannerSixth: '#2B78EE',
  BannerSixthHard: 'rgba(43, 120, 238, 0.45)',
  BannerSixthSoft: 'rgba(43, 120, 238, 0.15)',
  BannerSeventh: '#6E6EF7',
  BannerSeventhHard: 'rgba(110, 110, 247, 0.45)',
  BannerSeventhSoft: 'rgba(110, 110, 247, 0.15)',
};
