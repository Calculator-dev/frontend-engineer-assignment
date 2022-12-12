import { useState, useEffect } from 'react';

export const useDebounce = (search: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(search);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [search, delay]);

  return debounceValue;
};
