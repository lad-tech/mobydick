import {
  CurrentTheme,
  getTheme,
  setCurrentTheme,
  useTheme,
} from '@npm/mobydick-styles';
import {renderHook} from '@testing-library/react-hooks';

describe('useTheme', () => {
  const theme = getTheme();

  it('light', () => {
    setCurrentTheme(CurrentTheme.light);

    const {result} = renderHook(() => useTheme());
    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.light,
      ...theme.colors[CurrentTheme.light],
    });
  });
  it('dark', () => {
    setCurrentTheme(CurrentTheme.dark);

    const {result} = renderHook(() => useTheme());

    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.dark,
      ...theme.colors[CurrentTheme.dark],
    });
  });
  it('change', () => {
    setCurrentTheme(CurrentTheme.light);

    const {result} = renderHook(() => useTheme());

    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.light,
      ...theme.colors[CurrentTheme.light],
    });

    setCurrentTheme(CurrentTheme.dark);

    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.dark,
      ...theme.colors[CurrentTheme.dark],
    });
  });
});
