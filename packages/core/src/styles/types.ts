import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {
  CurrentTheme,
  defaultBannerLightColor,
  defaultBgLightColor,
  defaultBorderLightColor,
  defaultCategoryLightColor,
  defaultChartLightColor,
  defaultCTALightColor,
  defaultElementLightColor,
  defaultFonts,
  defaultIconLightColor,
  defaultSpaces,
  defaultTextLightColor,
  defaultTheme,
} from './constants';
import {getShadows} from './shadows/getShadows';

export type IStylesTypes = Record<string, ViewStyle | TextStyle | ImageStyle>;
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
      typeof defaultBorderLightColor &
      typeof defaultChartLightColor &
      typeof defaultCategoryLightColor &
      typeof defaultBannerLightColor
  >;
  spaces: typeof defaultSpaces;
  fonts: typeof defaultFonts;
  shadows: ReturnType<typeof getShadows>;
}

export interface IThemeContext {
  theme: typeof defaultTheme;
  currentTheme: ICurrentTheme;
  colors: typeof defaultTextLightColor &
    typeof defaultElementLightColor &
    typeof defaultIconLightColor &
    typeof defaultBgLightColor &
    typeof defaultCTALightColor &
    typeof defaultBorderLightColor &
    typeof defaultChartLightColor &
    typeof defaultCategoryLightColor &
    typeof defaultBannerLightColor;
  spaces: typeof defaultSpaces;
  fonts: typeof defaultFonts;
  shadows: ReturnType<typeof getShadows>;

  setTheme: (theme: IDefaultTheme) => void;
  setCurrentTheme: (theme: ICurrentTheme) => void;
}

/**
 * @deprecated use IThemeContext
 */
export type IUseStylesTheme = IThemeContext;
