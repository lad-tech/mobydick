import {IStylesTypes, IThemeContext} from '../types';

import useTheme from './useTheme';

const useStyles = <Args extends unknown[], FnReturn extends IStylesTypes>(
  createStyleFn: (theme: IThemeContext, ...arg: Args) => FnReturn,
  ...args: Args
) => {
  const theme = useTheme();

  return [createStyleFn(theme, ...args), theme] as const;
};

export default useStyles;
