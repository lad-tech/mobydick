import {
  defaultBgLightColor,
  defaultBorderLightColor,
  defaultCTALightColor,
  defaultElementLightColor,
  defaultIconLightColor,
  defaultTextLightColor,
} from '../colors';
import {defaultSpaces} from '../spaces';

import {CurrentTheme, defaultTheme} from './constants';

export type ICurrentTheme = CurrentTheme | string;

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

export interface IThemeContext {
  theme: typeof defaultTheme;
  currentTheme: ICurrentTheme;
  colors: typeof defaultTextLightColor &
    typeof defaultElementLightColor &
    typeof defaultIconLightColor &
    typeof defaultBgLightColor &
    typeof defaultCTALightColor &
    typeof defaultBorderLightColor;
  spaces: typeof defaultSpaces;

  setTheme: (theme: IDefaultTheme) => void;
  setCurrentTheme: (theme: ICurrentTheme) => void;
}

/**
 * @deprecated use IThemeContext
 */
export type IUseStylesTheme = IThemeContext;
