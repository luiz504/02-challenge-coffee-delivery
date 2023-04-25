import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/cart'
import { OrdersContextProvider } from './context/orders'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrdersContextProvider>
            <Router />
          </OrdersContextProvider>
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
