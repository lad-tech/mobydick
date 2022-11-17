import {act, renderHook} from '@testing-library/react-hooks';

import useLatest from '../useLatest';

describe('useLatest', () => {
  test('positive case', () => {
    const fn = jest.fn();

    const {
      result: {current},
    } = renderHook(() => useLatest(fn));

    act(current.current);
  });
});
