import {defaultSpaces} from '../spaces';
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
} from '../colors';

import {IDefaultTheme} from './types';

export enum CurrentTheme {
  light = 'light',
  dark = 'dark',
}

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
};
