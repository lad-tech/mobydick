import {ImageStyle, Platform, TextStyle, ViewStyle} from 'react-native';

import {IThemeContext} from '../types';
import {IShadow} from '../constants';

export type IShadowKeys = 'small' | 'medium' | 'large';

export const shadowsIosLight = ({
  spaces,
}: Pick<IThemeContext, 'spaces'>): Record<
  IShadowKeys,
  ViewStyle | TextStyle | ImageStyle
> => ({
  small: {
    shadowOffset: {
      width: 0,
      height: spaces.Space2,
    },
    shadowRadius: spaces.Space4,
    shadowOpacity: 0.16,
  },
  medium: {
    shadowOffset: {
      width: 0,
      height: spaces.Space6,
    },
    shadowRadius: spaces.Space8,
    shadowOpacity: 0.16,
  },
  large: {
    shadowOffset: {
      width: 0,
      height: spaces.Space12,
    },
    shadowRadius: spaces.Space16,
    shadowOpacity: 0.16,
  },
});
export const shadowsIosDark = ({
  spaces,
}: Pick<IThemeContext, 'spaces'>): Record<
  IShadowKeys,
  ViewStyle | TextStyle | ImageStyle
> => ({
  small: {
    shadowOffset: {
      width: 0,
      height: spaces.Space2,
    },
    shadowRadius: spaces.Space4,
    shadowOpacity: 0.48,
  },
  medium: {
    shadowOffset: {
      width: 0,
      height: spaces.Space6,
    },
    shadowRadius: spaces.Space8,
    shadowOpacity: 0.48,
  },
  large: {
    shadowOffset: {
      width: 0,
      height: spaces.Space12,
    },
    shadowRadius: spaces.Space16,
    shadowOpacity: 0.48,
  },
});

export const shadowsAndroidLight = ({
  spaces,
}: Pick<IThemeContext, 'spaces'>): Record<
  IShadowKeys,
  ViewStyle | TextStyle | ImageStyle
> => ({
  small: {
    elevation: spaces.Space1,
  },
  medium: {
    elevation: spaces.Space8,
  },
  large: {
    elevation: spaces.Space16,
  },
});
export const shadowsAndroidDark = ({
  spaces,
}: Pick<IThemeContext, 'spaces'>): Record<
  IShadowKeys,
  ViewStyle | TextStyle | ImageStyle
> => ({
  small: {
    elevation: spaces.Space4,
  },
  medium: {
    elevation: spaces.Space12,
  },
  large: {
    elevation: spaces.Space24,
  },
});

export const getShadows = ({
  spaces,
  currentTheme,
}: Pick<IThemeContext, 'spaces' | 'currentTheme'>): IShadow => {
  const isDark = currentTheme === 'dark';

  if (Platform.OS === 'ios') {
    return isDark ? shadowsIosDark({spaces}) : shadowsIosLight({spaces});
  }
  if (Platform.OS === 'android') {
    return isDark
      ? shadowsAndroidDark({spaces})
      : shadowsAndroidLight({spaces});
  }

  return shadowsAndroidLight({spaces});
};
