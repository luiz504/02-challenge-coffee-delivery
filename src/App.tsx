import { ThemeProvider } from 'styled-components'

import viteLogo from '../public/logo.svg'

import { TestPath } from './components/TestPath'

import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <div>
          <TestPath />

          <img
            draggable={false}
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />

          <h1>Coffe Delivery</h1>
        </div>
      </div>
    </ThemeProvider>
  )
}
