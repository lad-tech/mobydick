import {CurrentTheme, defaultTheme, useTheme} from '@mobydick/styles';
import {renderHook} from '@testing-library/react-hooks';

describe('useTheme', () => {
  it('light', () => {
    const {result} = renderHook(() => useTheme());
    expect(result.current).toStrictEqual(
      defaultTheme.colors[CurrentTheme.light],
    );
  });
  it('dark', () => {
    jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
      default: () => 'dark',
    }));

    const {result} = renderHook(() => useTheme());

    expect(result.current).toStrictEqual(
      defaultTheme.colors[CurrentTheme.dark],
    );
  });
});
