import {act, renderHook} from '@testing-library/react-hooks';

import useDebounce from '../useDebounce';

describe('useDebounce', () => {
  jest.useFakeTimers();
  test('positive case with default delay', () => {
    const fn = jest.fn();

    const {
      result: {current},
    } = renderHook(() => useDebounce(fn));

    for (let i = 0; i < 1 + Math.ceil(1000 / 60) * 4; i++) {
      act(current);
    }
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  test('positive case with custom delay', () => {
    const fn = jest.fn();

    const {
      result: {current},
    } = renderHook(() => useDebounce(fn, 1));

    for (let i = 0; i < 1 + Math.ceil(1000 / 60) * 4; i++) {
      act(current);
    }
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
