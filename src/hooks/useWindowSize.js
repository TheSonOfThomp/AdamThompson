import { useEffect, useState } from "react";

export const useWindowSize = () => {

  function getSize() {
    if (window) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {

    function handleResize() {
      const size = getSize()
      if (size) setWindowSize(size);
    }

    if (window) window.addEventListener('resize', handleResize);
    
    return () => {
      if (window) window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}