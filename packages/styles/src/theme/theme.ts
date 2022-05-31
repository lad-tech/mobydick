import {defaultSpaces} from '../spaces';
import {
  defaultTextDarkColor,
  defaultTextLightColor,
  defaultIconDarkColor,
  defaultIconLightColor,
  defaultBgDarkColor,
  defaultBgLightColor,
  defaultBorderDarkColor,
  defaultBorderLightColor,
  defaultCTADarkColor,
  defaultCTALightColor,
  defaultElementDarkColor,
  defaultElementLightColor,
} from '../colors';

import {eventEmitterTheme, IEventEmitterTheme} from './eventEmitter';

export enum CurrentTheme {
  light = 'light',
  dark = 'dark',
}

type ICurrentTheme = CurrentTheme | string;

export interface IDefaultTheme {
  currentTheme: ICurrentTheme;
  colors: Record<
    ICurrentTheme,
    typeof defaultTextLightColor &
      typeof defaultElementLightColor &
      typeof defaultIconLightColor &
      typeof defaultBgLightColor &
      typeof defaultCTALightColor &
      typeof defaultBorderLightColor
  >;
  spaces: typeof defaultSpaces;
}

export type ICurrentThemeColors = IDefaultTheme['colors'][0];
export type ICurrentSpaces = IDefaultTheme['spaces'];

let defaultTheme: IDefaultTheme = {
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

export const setTheme = (theme: typeof defaultTheme) => {
  defaultTheme = theme;
};

export const setCurrentTheme = (theme: ICurrentTheme) => {
  defaultTheme.currentTheme = theme;
  eventEmitterTheme.emit(IEventEmitterTheme.setCurrentTheme, theme);
};

export const getCurrentTheme = () => {
  return defaultTheme.currentTheme;
};

export const getCurrentColors = () => {
  return defaultTheme.colors[defaultTheme.currentTheme];
};

export const getSpaces = () => {
  return defaultTheme.spaces;
};

export const getTheme = () => {
  return defaultTheme;
};
