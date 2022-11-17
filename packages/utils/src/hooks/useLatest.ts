import {MutableRefObject, useLayoutEffect, useRef} from 'react';

function useLatest<T>(value: T): MutableRefObject<T> {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
  return valueRef;
}
export default useLatest;
