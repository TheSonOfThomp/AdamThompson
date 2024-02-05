import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
} from "react"

interface DarkModeContextProps {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
  theme: "dark" | "light"
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: false,
  setDarkMode: () => {},
  theme: "light",
})

interface DarkModeProviderProps {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}
export const DarkModeProvider = ({
  darkMode,
  setDarkMode,
  children,
}: PropsWithChildren<DarkModeProviderProps>) => {
  const theme = darkMode ? "dark" : "light"
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const ctx = useContext(DarkModeContext)
  return ctx
}
