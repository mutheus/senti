import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components/macro'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    font-family: 'Mate', serif;
    background-color: #4446FE;
    color: #151A1C;
  }
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
