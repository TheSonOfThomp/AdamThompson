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
