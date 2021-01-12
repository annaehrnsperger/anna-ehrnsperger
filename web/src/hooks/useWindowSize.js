import { useState, useEffect } from 'react';
import { useClientSide } from './useClientSide';

export const useWindowSize = () => {
  const isClient = useClientSide();

  const [windowSize, setWindowSize] = useState({
    width: isClient && window.innerWidth,
    height: isClient && window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: isClient && window.innerWidth,
        height: isClient && window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return windowSize;
};
