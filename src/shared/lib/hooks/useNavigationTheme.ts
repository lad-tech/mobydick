import { Theme } from '@react-navigation/native';

import { CurrentTheme, useTheme } from '@/shared/ui';

export const useNavigationTheme = () => {
  const {currentTheme, colors} = useTheme();

  const theme: Theme = {
    dark: currentTheme === CurrentTheme.dark,
    colors: {
      primary: colors.BgContrast,
      border: colors.BorderNormal,
      text: colors.TextPrimary,
      card: colors.BgPrimary,
      background: colors.BgPrimary,
      notification: colors.IconNeutral,
    },
  };

  return theme;
};
