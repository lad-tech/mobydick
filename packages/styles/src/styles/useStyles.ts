import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles/src/styles/types';

import {getCurrentColors, getSpaces} from '../theme';
import useTheme from '../theme/useTheme';

const useStyles = <
  Args extends unknown[],
  FnReturn extends StyleSheet.NamedStyles<unknown>,
>(
  createStyleFn: (theme: IUseStylesTheme, ...arg: Args) => FnReturn,
  ...args: Args
) => {
  const currentTheme = useTheme();
  const theme = {
    colors: getCurrentColors(),
    spaces: getSpaces(),
  };

  const [styles, setStyles] = useState(createStyleFn(theme, ...args));

  useEffect(() => {
    setStyles(createStyleFn(theme, ...args));
  }, [currentTheme.currentTheme, createStyleFn, ...args]);

  return [styles, theme] as const;
};

export default useStyles;
