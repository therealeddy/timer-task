import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/theme/default'
import { Analytics } from '@vercel/analytics/react'

import Router from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
