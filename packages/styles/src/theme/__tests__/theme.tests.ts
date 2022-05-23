import {
  getCurrentColors,
  getCurrentTheme,
  getTheme,
  setTheme,
} from '@npm/mobydick-styles';

export const newThemeTextColor = {
  TextPrimary: '#113583',
  TextSecondary: '#444B5A',
  TextTertiary: '#5E6678',
  TextMuted: '#9BA1B0',
  TextAccent: '#2B78EE',
  TextError: '#F54D3D',
  TextBlack: '#20242D',
  TextBlackTransparent: 'rgba(32, 36, 45, 0.75)',
  TextWhite: '#FFF',
  TextWhiteTransparent: 'rgba(255, 255, 255, 0.75)',
};
export const newThemeIconColor = {
  IconNeutral: '#5E6678',
  IconMuted: '#9BA1B0',
  IconBase: '#283446',
  IconAttention: '#F54D3D',
  IconFavorite: '#FAB742',
  IconAdditional: '#FA9247',
  IconWhite: '#FFF',
  IconBlack: '#1E232F',
};
export const newThemeElementColor = {
  ElementNeutral: '#5E6678',
  ElementMuted: '#9BA1B0',
  ElementBase: '#0049b9',
  ElementAttention: '#F54D3D',
  ElementFavorite: '#FAB742',
  ElementAdditional: '#FA9247',
  ElementWhite: '#FFF',
  ElementBlack: '#20242D',
  ElementTransparent: 'rgba(255, 255, 255, 0.15)',
};
export const newThemeBorderColor = {
  BorderExtra: 'rgba(32, 36, 45, 0.75)',
  BorderHard: 'rgba(32, 36, 45, 0.45)',
  BorderNormal: 'rgba(32, 36, 45, 0.3)',
  BorderSoft: 'rgba(32, 36, 45, 0.15)',
  BorderError: '#8c6662',
  BorderSuccess: '#2B78EE',
};
export const newThemeBgColor = {
  BgPrimary: '#FFF',
  BgPrimaryTransparent: 'rgba(255, 255, 255, 0.75)',
  BgSecondary: '#EEEFF1',
  BgTertiary: '#b8c0d2',
  BgQuaternary: '#B6BBC6',
  BgContrast: '#20242D',
  BgContrastTransparent: 'rgba(32, 36, 45, 0.75)',
  BgError: 'rgba(245, 77, 61, 0.15)',
  BgAccentSoft: 'rgba(43, 120, 238, 0.15)',
  BgAccentNormal: 'rgba(43, 120, 238, 0.3)',
  BgAccentHard: 'rgba(43, 120, 238, 0.45)',
  BgOverlay: 'rgba(32, 36, 45, 0.45)',
  BgBlack: '#20242D',
  BgWhite: '#FFF',
};
export const newThemeCTAColor = {
  CtaBtnPrimary: '#2B78EE',
  CtaBtnSecondary: 'rgba(43, 120, 238, 0.15)',
  CtaBtnMuted: '#143faf',
};

describe('theme', () => {
  it('setTheme', () => {
    const newTheme: ReturnType<typeof getTheme> = {
      currentTheme: 'qwe',
      colors: {
        qwe: {
          ...newThemeTextColor,
          ...newThemeIconColor,
          ...newThemeElementColor,
          ...newThemeBorderColor,
          ...newThemeBgColor,
          ...newThemeCTAColor,
        },
      },
    };

    setTheme(newTheme);

    expect(getTheme()).toStrictEqual(newTheme);
  });
  it('getCurrentTheme', () => {
    const newTheme: ReturnType<typeof getTheme> = {
      currentTheme: 'qwe',
      colors: {
        qwe: {
          ...newThemeTextColor,
          ...newThemeIconColor,
          ...newThemeElementColor,
          ...newThemeBorderColor,
          ...newThemeBgColor,
          ...newThemeCTAColor,
        },
      },
    };

    expect(getCurrentTheme()).toStrictEqual(newTheme.currentTheme);
  });
  it('getCurrentColors', () => {
    const newTheme: ReturnType<typeof getTheme> = {
      currentTheme: 'qwe',
      colors: {
        qwe: {
          ...newThemeTextColor,
          ...newThemeIconColor,
          ...newThemeElementColor,
          ...newThemeBorderColor,
          ...newThemeBgColor,
          ...newThemeCTAColor,
        },
      },
    };

    expect(getCurrentColors()).toStrictEqual(newTheme.colors.qwe);
  });
});
