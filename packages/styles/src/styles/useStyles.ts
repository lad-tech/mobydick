import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import useTheme from '../theme/useTheme';

const useStyles = <
  Args extends unknown[],
  Fn extends (
    theme: ReturnType<typeof useTheme>,
    ...arg: Args
  ) => ReturnType<typeof StyleSheet.create>,
>(
  createStyleFn: Fn,
  ...args: Args
) => {
  const theme = useTheme();
  const [styles, setStyles] = useState(createStyleFn(theme, ...args));

  useEffect(() => {
    setStyles(createStyleFn(theme, ...args));
  }, [theme.colorScheme, createStyleFn, ...args]);

  return [styles, theme] as const;
};

export default useStyles;
