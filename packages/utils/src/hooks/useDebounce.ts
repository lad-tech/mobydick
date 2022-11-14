import {useEffect, useRef} from 'react';

const useDebounce = <T extends (...arg: never[]) => void>(
  fn: T,
  time = 5000,
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);

  return {
    debouncedFn: (...params: Parameters<T>) => {
      timeout.current = setTimeout(() => {
        fn(...params);
      }, time);
    },
  };
};

export default useDebounce;
