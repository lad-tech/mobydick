import { Theme } from '@react-navigation/native';

import { CurrentTheme, useTheme } from '@/shared/ui';
import {fonts} from '@react-navigation/native/src/theming/fonts';

export const useNavigationTheme = () => {
  const {currentTheme, colors} = useTheme();

  const theme: Theme = {
    fonts: fonts,
    dark: currentTheme === CurrentTheme.dark,
    colors: {
      primary: colors.BgInverse,
      border: colors.BorderNormal,
      text: colors.TextPrimary,
      card: colors.BgPrimary,
      background: colors.BgPrimary,
      notification: colors.IconNeutral,
    }
  };

  return theme;
};
