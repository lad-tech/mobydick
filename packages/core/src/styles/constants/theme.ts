import {TWeights} from '../../typography';
import {IDefaultTheme} from '../types';
import {getShadows} from '../shadows/getShadows';

import {defaultSpaces} from './defaultSpaces';
import {
  defaultAdditionalDarkColor,
  defaultAdditionalLightColor,
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
/** @deprecated  use defaultFont **/
export const defaultFonts: TWeights = {
  Regular: 'Inter-Regular',
  Medium: 'Inter-Medium',
  SemiBold: 'Inter-SemiBold',
  Bold: 'Inter-Bold',
};

export const defaultFont = 'Inter';

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
      ...defaultAdditionalLightColor,
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
      ...defaultAdditionalDarkColor,
    },
  },
  spaces: {
    ...defaultSpaces,
  },
  fonts: defaultFonts,
  font: defaultFont,
  shadows: getShadows({
    spaces: defaultSpaces,
    currentTheme: CurrentTheme.light,
  }),
};
