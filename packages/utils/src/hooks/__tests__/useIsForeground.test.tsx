import {act, renderHook} from '@testing-library/react-hooks';
import {AppState} from 'react-native';

import useIsForeground from '../useIsForeground';

describe('useIsForeground', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('positive case', () => {
    const {
      result: {current},
    } = renderHook(() => useIsForeground());
    expect(current).toBe(true);
  });
  test('negative case', () => {
    const appStateSpy = jest.spyOn(AppState, 'addEventListener');

    const {result} = renderHook(() => useIsForeground());

    const [firstCall] = appStateSpy.mock.calls;
    const [, cb] = firstCall!;

    act(() => cb('inactive'));

    expect(result.current).toBe(false);
  });
});
