import { useEffect, useCallback, useState } from "react"
import { useWindowSize, getSize } from "./useWindowSize"

// Listens to the window size, and updates the vh variable on resize
export const useVH = () => {
  const { height } = useWindowSize()

  const resetVH = useCallback(() => {
    const vh = height / 100
    document.body.style.setProperty('--vh', `${vh}px`)
  }, [height])

  useEffect(() => {
    resetVH()
  }, [height, resetVH])
}

// Sets the vh only on orientation change
export const useOrientationVH = () => {

  const [windowHeight, setWindowHeight] = useState(getSize);

  
  useEffect(() => {
    // on orientation change, listen for window resize once
    function handleOrientationChange() {
      window.addEventListener('resize', () => {
        const { height } = getSize()
        console.log(height)
        setWindowHeight(height)
      } , {once: true});
    }

    window.addEventListener('orientationchange', handleOrientationChange)
    return () => window.removeEventListener('orientationchange', handleOrientationChange)
  }, []) // only run on mount

  // update the css property when the height state changes
  useEffect(() => {
    const vh = windowHeight / 100
    document.body.style.setProperty('--vh', `${vh}px`)
  }, [windowHeight]) 
}