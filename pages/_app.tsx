import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components/macro'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    font-family: 'Vollkorn', serif;
    font-family: 'Mate', serif;
    color: #212121;
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
