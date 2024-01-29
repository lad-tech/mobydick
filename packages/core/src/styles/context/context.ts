import {createContext} from 'react';

import {defaultTheme} from '../constants/theme';
import {IThemeContext} from '../types';

export const MissingThemeProviderError = new Error(
  '[@lad-tech/mobydick-core] useTheme hook was called outside of context, wrap your app with ThemeProvider component',
);

export const missingFunc = () => {
  throw MissingThemeProviderError;
};

export const defaultThemeContext: IThemeContext = {
  theme: defaultTheme,
  spaces: defaultTheme.spaces,
  colors: defaultTheme.colors[
    defaultTheme.currentTheme
  ] as (typeof defaultTheme.colors)[0],
  currentTheme: defaultTheme.currentTheme,
  setTheme: missingFunc,
  setCurrentTheme: missingFunc,
};

const ThemeContext = createContext<IThemeContext>(defaultThemeContext);

ThemeContext.displayName = '@lad-tech/mobydick-core/ThemeContext';

export default ThemeContext;
