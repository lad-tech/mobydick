import {useMemo} from 'react';

import {useLatest} from './index';

const useDebounce = (callback: (...args: any[]) => any, delay = 1000) => {
  const latestCallback = useLatest(callback);
  let timeout: ReturnType<typeof setTimeout>;

  return useMemo(() => {
    return (...args: any[]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        latestCallback.current(...args);
      }, delay);
    };
  }, []);
};

export default useDebounce;
