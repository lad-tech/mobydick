import {
  CurrentTheme,
  getTheme,
  setCurrentTheme,
  useTheme,
} from '@npm/mobydick-styles';
import {renderHook} from '@testing-library/react-hooks';

describe('useTheme', () => {
  const {colors, spaces} = getTheme();

  it('light', () => {
    setCurrentTheme(CurrentTheme.light);

    const {result} = renderHook(() => useTheme());
    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.light,
      colors,
      spaces,
    });
  });
  it('dark', () => {
    setCurrentTheme(CurrentTheme.dark);

    const {result} = renderHook(() => useTheme());

    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.dark,
      colors,
      spaces,
    });
  });
  it('change', () => {
    setCurrentTheme(CurrentTheme.light);

    const {result} = renderHook(() => useTheme());

    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.light,
      colors,
      spaces,
    });

    setCurrentTheme(CurrentTheme.dark);

    expect(result.current).toStrictEqual({
      currentTheme: CurrentTheme.dark,
      colors,
      spaces,
    });
  });
});
