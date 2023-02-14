import {act, renderHook} from '@testing-library/react-hooks';

import useToggle from '../useToggle';

describe('useToggle', () => {
  test('positive case', () => {
    const {
      result: {current},
    } = renderHook(() => useToggle(true));
    expect(current[0]).toEqual(true);
    act(() => current[1]());
  });
  test('case without initialState', () => {
    const {
      result: {current},
    } = renderHook(() => useToggle());
    expect(current[0]).toEqual(false);
    act(() => current[1]());
  });
});
