import {renderHook} from '@testing-library/react-hooks';
import {Animated} from 'react-native';

import useToggle from '../useToggle';

describe('useToggle hook', function () {
  it('should works right', async function () {
    const spy = jest.spyOn(Animated, 'timing');
    let toggle = false;
    const {result, rerender} = renderHook(() => useToggle(toggle));
    expect(result.current).toBeInstanceOf(Animated.Value);
    toggle = true;
    rerender();
    expect(spy).toHaveBeenCalled();
  });
  it('should be false by default', function () {
    const {result} = renderHook(useToggle);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // RN не имеет интерфейса для Animated.Value
    expect(result.current._value).toEqual(0);
  });
});
