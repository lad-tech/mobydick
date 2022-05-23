import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ICurrentThemeColors} from '@npm/mobydick-styles';

import useTheme from '../theme/useTheme';

const useStyles = <
  Args extends unknown[],
  Fn extends (
    theme: ICurrentThemeColors,
    ...arg: Args
  ) => ReturnType<typeof StyleSheet.create>,
>(
  createStyleFn: Fn,
  ...args: Args
) => {
  const {currentTheme, colors} = useTheme();
  const currentColors = colors[currentTheme];
  const [styles, setStyles] = useState(createStyleFn(currentColors, ...args));

  useEffect(() => {
    setStyles(createStyleFn(currentColors, ...args));
  }, [currentTheme, createStyleFn, ...args]);

  return [styles, currentColors] as const;
};

export default useStyles;
