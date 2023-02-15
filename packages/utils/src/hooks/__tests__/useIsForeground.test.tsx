import {renderHook} from '@testing-library/react-hooks';

import useIsForeground from '../useIsForeground';

describe('useIsForeground', () => {
  test('positive case', () => {
    const {
      result: {current},
    } = renderHook(() => useIsForeground());
    expect(current).toBe(true);
  });
});
