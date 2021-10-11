import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { Header } from 'components/header'
import AppContext from './app-context'

import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    background-color: #4446FE;
    font-family: 'Vollkorn', serif;
    color: #9494F8;
  }
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Component {...pageProps} />
      </Wrapper>
    </AppContext>
  )
}

export default MyApp
