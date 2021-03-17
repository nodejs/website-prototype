import { useState, useLayoutEffect } from 'react';

export const useMediaQuery = (query: string): boolean | undefined => {
  const [matches, setMatches] = useState<boolean>();

  useLayoutEffect(() => {
    if (typeof window.matchMedia === 'function') {
      const mq = window.matchMedia(query);
      setMatches(mq.matches);
      const handler = (): void => setMatches(mq.matches);
      mq.addListener(handler);
      return (): void => mq.removeListener(handler);
    }
  }, [query]);

  return matches;
};
