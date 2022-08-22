import {StyleSheet} from 'react-native';

import useTheme from '../theme/useTheme';

import {IUseStylesTheme} from './types';

const useStyles = <
  Args extends unknown[],
  FnReturn extends StyleSheet.NamedStyles<unknown>,
>(
  createStyleFn: (theme: IUseStylesTheme, ...arg: Args) => FnReturn,
  ...args: Args
) => {
  const theme = useTheme();

  return [createStyleFn(theme, ...args), theme] as const;
};

export default useStyles;
