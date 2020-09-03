import { useEffect, useCallback } from "react"
import { useWindowSize } from "./useWindowSize"

export const useVH = () => {
  const { height } = useWindowSize()

  const resetVH = useCallback(() => {
    const vh = height / 100
    document.body.style.setProperty('--vh', `${vh}px`)
  }, [height])

  useEffect(() => {
    resetVH()
    window.addEventListener('resize', resetVH)
    return window.removeEventListener('resize', resetVH)
  }, [height, resetVH])
}
