import * as react_ from 'react'
export { useStyles, StylesProvider as provider } from '@lewisl9029/use-styles'
import * as a_ from 'public/a_'

const themeContext = react_.createContext()

export const themeProvider = ({ theme, children }) =>
  a_.cE(themeContext.Provider, { value: theme, children })

export const standard = ({ children }) =>
  a_.cE(themeProvider, {
    theme: react_.useMemo(
      () => ({
        colors: {
          background: 'white',
          foreground: '#1f1b21',
        },
      }),
      [],
    ),
    children,
  })

export const useTheme = () => react_.useContext(themeContext)
