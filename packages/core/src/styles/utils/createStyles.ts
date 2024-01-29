import {IStylesTypes, IThemeContext} from '../types';

const createStyles = <Args extends unknown[], FnReturn extends IStylesTypes>(
  fn: (theme: IThemeContext, ...arg: Args) => FnReturn,
) => {
  return fn;
};

export default createStyles;
