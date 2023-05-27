import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/theme/default'

import Router from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
