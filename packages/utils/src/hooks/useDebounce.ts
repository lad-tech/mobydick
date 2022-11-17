import {useEffect, useMemo} from 'react';

import useLatest from './useLatest';

const useDebounce = (callback: (...args: any[]) => any, delay = 1000) => {
  const latestCallback = useLatest(callback);
  let timeout: ReturnType<typeof setTimeout>;

  const debouncedFn = useMemo(() => {
    return (...args: any[]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        latestCallback.current(...args);
      }, delay);
    };
  }, []);

  useEffect(() => () => clearTimeout(timeout), [debouncedFn]);

  return debouncedFn;
};

export default useDebounce;
