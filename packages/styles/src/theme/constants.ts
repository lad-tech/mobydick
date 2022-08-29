import {defaultSpaces} from '../spaces';
import {
  defaultBgDarkColor,
  defaultBgLightColor,
  defaultBorderDarkColor,
  defaultBorderLightColor,
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
    },
    [CurrentTheme.dark]: {
      ...defaultTextDarkColor,
      ...defaultElementDarkColor,
      ...defaultIconDarkColor,
      ...defaultBgDarkColor,
      ...defaultCTADarkColor,
      ...defaultBorderDarkColor,
    },
  },
  spaces: {
    ...defaultSpaces,
  },
};
