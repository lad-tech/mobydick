import {
  defaultTextDarkColor,
  defaultTextLightColor,
  defaultIconDarkColor,
  defaultIconLightColor,
  defaultBgDarkColor,
  defaultBgLightColor,
  defaultBorderDarkColor,
  defaultBorderLightColor,
  defaultCATDarkColor,
  defaultCATLightColor,
  defaultElementDarkColor,
  defaultElementLightColor,
} from '../colors';

export enum CurrentTheme {
  light = 'light',
  dark = 'dark',
}
const defaultTheme = {
  currentTheme: CurrentTheme.light,
  colors: {
    [CurrentTheme.light]: {
      ...defaultTextLightColor,
      ...defaultElementLightColor,
      ...defaultIconLightColor,
      ...defaultBgLightColor,
      ...defaultCATLightColor,
      ...defaultBorderLightColor,
    },
    [CurrentTheme.dark]: {
      ...defaultTextDarkColor,
      ...defaultElementDarkColor,
      ...defaultIconDarkColor,
      ...defaultBgDarkColor,
      ...defaultCATDarkColor,
      ...defaultBorderDarkColor,
    },
  },
};

export default defaultTheme;
