import { isUndefined } from "lodash"
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
} from "react"

type Theme = "dark" | "light" | "null"

export const getTheme = (mode?: boolean): Theme =>
  isUndefined(mode) ? "null" : mode ? "dark" : "light"

interface DarkModeContextProps {
  darkMode: boolean | undefined
  setDarkMode: Dispatch<SetStateAction<boolean | undefined>>
  theme: Theme
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: undefined,
  setDarkMode: () => {},
  theme: "light",
})

interface DarkModeProviderProps {
  darkMode: boolean | undefined
  setDarkMode: Dispatch<SetStateAction<boolean | undefined>>
}
export const DarkModeProvider = ({
  darkMode,
  setDarkMode,
  children,
}: PropsWithChildren<DarkModeProviderProps>) => {
  const theme = getTheme(darkMode)

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
