import "../style/global.scss"
import { DarkModeProvider } from "../components/DarkModeContext/DarkModeContext"
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
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const [darkMode, _setDarkMode] = useState(false)

  const updateDocumentData = (val: boolean) => {
    document.body.setAttribute("data-dark", String(val))
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
