import type { AppProps } from 'next/app'
import styled from 'styled-components/macro'
import 'normalize.css'

const Main = styled.main`
  h1 {
    font-family: system-ui, sans-serif;
    font-size: 12px;
  }
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
