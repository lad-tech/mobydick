import defaultTheme, {CurrentTheme} from './theme';

const useTheme = () => {
  // TODO: Реализовать запоминание и кастомные темы

  return {
    ...defaultTheme['colors'][CurrentTheme.light],
  };
};

export default useTheme;
