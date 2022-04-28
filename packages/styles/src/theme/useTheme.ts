import {useColorScheme} from 'react-native';

import defaultTheme, {CurrentTheme} from './theme';

const useTheme = () => {
  // TODO: Реализовать запоминание и кастомные темы
  const colorScheme = useColorScheme();

  return {
    colorScheme,
    ...defaultTheme['colors'][
      colorScheme === 'dark' ? CurrentTheme.dark : CurrentTheme.light
    ],
  };
};

export default useTheme;
