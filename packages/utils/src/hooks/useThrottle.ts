import {useEffect, useRef} from 'react';

const useThrottle = <T extends (...arg: never[]) => void>(
  fn: T,
  time = 1000,
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);

  return {
    throttledFn: (...params: Parameters<T>) => {
      if (timeout.current) {
        return;
      }

      timeout.current = setTimeout(() => {
        timeout.current = null;
      }, time);

      fn(...params);
    },
  };
};

export default useThrottle;
