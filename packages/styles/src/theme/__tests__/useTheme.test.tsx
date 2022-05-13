import {CurrentTheme, defaultTheme, useTheme} from '@npm/mobydick-styles';
import {renderHook} from '@testing-library/react-hooks';

describe('useTheme', () => {
  it('light', () => {
    const {result} = renderHook(() => useTheme());
    expect(result.current).toStrictEqual({
      colorScheme: CurrentTheme.light,
      ...defaultTheme.colors[CurrentTheme.light],
    });
  });
  it('dark', () => {
    jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
      default: () => 'dark',
    }));

    const {result} = renderHook(() => useTheme());

    expect(result.current).toStrictEqual({
      colorScheme: CurrentTheme.dark,
      ...defaultTheme.colors[CurrentTheme.dark],
    });
  });
});
