import {FC, PropsWithChildren, useState} from 'react';

import {defaultTheme} from '../constants/theme';
import {IThemeContext} from '../types';

import ThemeContext from './context';

const ThemeProvider: FC<
  PropsWithChildren<Pick<Partial<IThemeContext>, 'theme' | 'currentTheme'>>
> = ({theme, currentTheme, children}) => {
  const [themeState, setThemeState] = useState(theme ?? defaultTheme);
  const [currentThemeState, setCurrentThemeState] = useState(
    currentTheme ?? defaultTheme.currentTheme,
  );

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        currentTheme: currentThemeState,
        colors: themeState.colors[
          currentThemeState
        ] as (typeof defaultTheme.colors)[0], // I think no one don't be setting currentTheme to not keys of colors,
        spaces: themeState.spaces,

        setTheme: setThemeState,
        setCurrentTheme: setCurrentThemeState,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
