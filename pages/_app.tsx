import type { AppProps } from 'next/app'
import 'normalize.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
