import { ReactNode, createContext, useState } from 'react'

interface CurrentUserContextType {
  lightMode: boolean
  modeChanger: () => void
}

interface Props {
  children: ReactNode
}

const ThemeContext = createContext<CurrentUserContextType>({} as CurrentUserContextType)

function Provider(props: Props) {
  
  const [lightMode, setLightMode] = useState(true)

  const valueToShare = {
    lightMode,
    modeChanger: () => {
      setLightMode((prevMode) => !prevMode)
    },
  }
  return <ThemeContext.Provider value={valueToShare}>{props.children}</ThemeContext.Provider>
}
export { Provider }
export default ThemeContext
