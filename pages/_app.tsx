import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components/macro'
import AppContext from './app-context'

import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    background-color: #4446FE;
    color: #151A1C;
  }
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppContext>
  )
}

export default MyApp
