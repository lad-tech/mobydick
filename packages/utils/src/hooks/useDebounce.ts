import {useEffect, useMemo, useRef} from 'react';

import useLatest from './useLatest';

const useDebounce = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay = 1000,
) => {
  const latestCallback = useLatest(callback);
  let timeout = useRef<ReturnType<typeof setTimeout>>(null).current;

  const debouncedFn = useMemo(() => {
    return (...args: Parameters<T>) => {
      timeout && clearTimeout(timeout);

      timeout = setTimeout(() => {
        latestCallback.current(...args);
      }, delay);
    };
  }, []);

  useEffect(
    () => () => {
      timeout && clearTimeout(timeout);
    },
    [debouncedFn],
  );

  return debouncedFn;
};

export default useDebounce;
