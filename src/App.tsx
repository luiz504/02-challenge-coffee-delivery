import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/cart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
