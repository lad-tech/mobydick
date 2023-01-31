import {createContext} from 'react';

import {IThemeContext} from './types';
import {defaultTheme} from './constants';

export const MissingThemeProviderError = new Error(
  '[@npm/mobydick-core] useTheme hook was called outside of context, wrap your app with ThemeProvider component',
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

ThemeContext.displayName = '@npm/mobydick-core/ThemeContext';

export default ThemeContext;
