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
  useTheme();
  const theme = {
    colors: getCurrentColors(),
    spaces: getSpaces(),
  };

  return [createStyleFn(theme, ...args), theme] as const;
};

export default useStyles;
