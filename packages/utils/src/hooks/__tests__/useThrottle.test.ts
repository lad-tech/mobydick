import {act, renderHook} from '@testing-library/react-hooks';

import useThrottle from '../useThrottle';

describe('useThrottle', () => {
  jest.useFakeTimers();
  test('positive case with default delay', () => {
    const fn = jest.fn();

    const {
      result: {current},
    } = renderHook(() => useThrottle(fn));

    for (let i = 0; i < 1 + Math.ceil(1000 / 60) * 4; i++) {
      act(current.throttledFn);
    }

    jest.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(1);
  });
  test('positive case with custom delay', () => {
    const fn = jest.fn();

    const {
      result: {current},
    } = renderHook(() => useThrottle(fn, 1));

    for (let i = 0; i < 1 + Math.ceil(1000 / 60) * 4; i++) {
      act(current.throttledFn);
    }

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
