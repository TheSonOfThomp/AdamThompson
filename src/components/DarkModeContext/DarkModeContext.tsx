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
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: false,
  setDarkMode: () => {},
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
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const ctx = useContext(DarkModeContext)
  return ctx
}
