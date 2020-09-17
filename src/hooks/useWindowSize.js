import { useEffect, useState } from "react";

export const getSize = () => {
  let width = null, height = null;
  if (typeof window !== 'undefined') {
    width = window.innerWidth
    height = window.innerHeight
  }
  return { width, height }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize);

  function handleResize() {
    console.log('resize')
    const size = getSize()
    setWindowSize(size);
  }

  // on orientation change, listen for window resize once
  function handleOrientationChange() {
    console.log('orientationchange')
    window.addEventListener('resize', handleResize, { once: true });
  }

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange)
    return () => window.removeEventListener('orientationchange', handleOrientationChange)
  }, []) // only run on mount

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}