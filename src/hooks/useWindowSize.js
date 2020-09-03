import { useEffect, useState } from "react";

function getSize() {
  let width = null, height = null;
  if (typeof window !== 'undefined') {
    width = window.innerWidth,
    height = window.innerHeight
  }
  return { width, height }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {

    function handleResize() {
      const size = getSize()
      setWindowSize(size);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}