import * as react_ from 'react'
export { useStyles, StylesProvider as provider } from '@lewisl9029/use-styles'
import * as a_ from 'public/a_'

const themeContext = react_.createContext()

export const themeProvider = ({ theme, children }) =>
  a_.cE(themeContext.Provider, { value: theme, children })

const darkContext = react_.createContext()

const darkProvider = ({ goneDark, goDark, children }) =>
  a_.cE(darkContext.Provider, {
    value: {
      goneDark,
      goDark,
    },
    children,
  })

export const useGoDark = () => react_.useContext(darkContext)?.goDark
export const useGoneDark = () => react_.useContext(darkContext)?.goneDark

export const standard = ({ children }) => {
  const [goneDark, setGoneDark] = react_.useState(false)

  return a_.cE(
    themeProvider,
    {
      theme: react_.useMemo(
        () => ({
          colors: goneDark
            ? {
                background: 'black',
                foreground: 'white',
              }
            : {
                background: 'white',
                foreground: '#1f1b21',
              },
        }),
        [goneDark],
      ),
    },
    [
      a_.cE(darkProvider, {
        goneDark,
        goDark: react_.useCallback(() => setGoneDark(true), [setGoneDark]),
        children,
      }),
    ],
  )
}

export const useTheme = () => react_.useContext(themeContext)
