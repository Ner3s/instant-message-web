/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

function useDebounce(fn: (...args: any[]) => unknown, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  function debouncedFn(...args: any[]) {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}

export { useDebounce };
