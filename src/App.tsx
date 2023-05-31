import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

import { CyclesContextProvider } from './store/contexts/cycles'
import Router from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
