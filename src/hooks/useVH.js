export const useVH = () => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      document.body.style.setProperty('--vh', `${window.innerHeight / 100}px`)
    })
  }, [])
}