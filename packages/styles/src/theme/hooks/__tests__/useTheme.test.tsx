import {renderHook} from '@testing-library/react-hooks';

import useTheme from '../useTheme';
import {defaultThemeContext, MissingThemeProviderError} from '../../context';

describe('useTheme', () => {
  it('throw error when change without Provider', () => {
    const {result} = renderHook(() => useTheme());

    expect(result.current).toStrictEqual(defaultThemeContext);
    expect(result.current.setCurrentTheme).toThrow(MissingThemeProviderError);
    expect(result.current.setTheme).toThrow(MissingThemeProviderError);
  });
});
