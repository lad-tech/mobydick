import {TWeights} from '../../typography';
import {IDefaultTheme} from '../types';

import {defaultSpaces} from './defaultSpaces';
import {
  defaultBannerDarkColor,
  defaultBannerLightColor,
  defaultBgDarkColor,
  defaultBgLightColor,
  defaultBorderDarkColor,
  defaultBorderLightColor,
  defaultCategoryDarkColor,
  defaultCategoryLightColor,
  defaultChartDarkColor,
  defaultChartLightColor,
  defaultCTADarkColor,
  defaultCTALightColor,
  defaultElementDarkColor,
  defaultElementLightColor,
  defaultIconDarkColor,
  defaultIconLightColor,
  defaultTextDarkColor,
  defaultTextLightColor,
} from './colors';

export enum CurrentTheme {
  light = 'light',
  dark = 'dark',
}
export const defaultFonts: TWeights = {
  Regular: 'Inter-Regular',
  Medium: 'Inter-Medium',
  SemiBold: 'Inter-SemiBold',
  Bold: 'Inter-Bold',
  Italic: 'Inter-Italic',
  BoldItalic: 'Inter-BoldItalic',
};
export const defaultTheme: IDefaultTheme = {
  currentTheme: CurrentTheme.light,
  colors: {
    [CurrentTheme.light]: {
      ...defaultTextLightColor,
      ...defaultElementLightColor,
      ...defaultIconLightColor,
      ...defaultBgLightColor,
      ...defaultCTALightColor,
      ...defaultBorderLightColor,
      ...defaultChartLightColor,
      ...defaultCategoryLightColor,
      ...defaultBannerLightColor,
    },
    [CurrentTheme.dark]: {
      ...defaultTextDarkColor,
      ...defaultElementDarkColor,
      ...defaultIconDarkColor,
      ...defaultBgDarkColor,
      ...defaultCTADarkColor,
      ...defaultBorderDarkColor,
      ...defaultChartDarkColor,
      ...defaultCategoryDarkColor,
      ...defaultBannerDarkColor,
    },
  },
  spaces: {
    ...defaultSpaces,
  },
  fonts: defaultFonts,
};
