import {StyleSheet} from 'react-native';

import {IThemeContext} from '../types';

import useTheme from './useTheme';

const useStyles = <
  Args extends unknown[],
  FnReturn extends StyleSheet.NamedStyles<unknown>,
>(
  createStyleFn: (theme: IThemeContext, ...arg: Args) => FnReturn,
  ...args: Args
) => {
  const theme = useTheme();

  return [createStyleFn(theme, ...args), theme] as const;
};

export default useStyles;
