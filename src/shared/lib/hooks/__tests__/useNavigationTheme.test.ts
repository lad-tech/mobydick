import {renderHook} from '@testing-library/react-native';

import {useNavigationTheme} from '../useNavigationTheme';

describe('useNavigationTheme', () => {
  test('default', () => {
    const {result} = renderHook(() => useNavigationTheme());

    expect(result).toStrictEqual({
      current: {
        colors: {
          background: '#FFF',
          border: 'rgba(32, 36, 45, 0.3)',
          card: '#FFF',
          notification: '#5E6678',
          primary: '#20242D',
          text: '#20242D',
        },
        dark: false,
      },
    });
  });
});
