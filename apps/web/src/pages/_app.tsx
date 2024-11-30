import "../style/global.scss"
import {
  DarkModeProvider,
  getTheme,
} from "../components/DarkModeContext/DarkModeContext"
import { useEffect, useState } from "react"
import React from "react"

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useInitDarkMode()

  return (
    <DarkModeProvider darkMode={darkMode} setDarkMode={setDarkMode}>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

export default MyApp

const useInitDarkMode = (): [
  boolean | undefined,
  React.Dispatch<React.SetStateAction<boolean | undefined>>,
] => {
  const [darkMode, _setDarkMode] = useState<boolean | undefined>()

  const updateDocumentData = (val?: boolean) => {
    const theme = getTheme(val)
    document.body.setAttribute("data-theme", theme)
  }

  const setDarkMode: typeof _setDarkMode = (actionOrState) => {
    const newVal =
      typeof actionOrState === "function"
        ? actionOrState(darkMode)
        : actionOrState
    updateDocumentData(newVal)
    _setDarkMode(actionOrState)
  }

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)")
    const newDarkMode = query.matches
    updateDocumentData(newDarkMode)
    _setDarkMode(newDarkMode) // initialize darkMode
  }, [])

  return [darkMode, setDarkMode]
}
