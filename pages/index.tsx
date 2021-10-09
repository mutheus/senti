import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Senti</title>
        <meta name="description" content="Senti app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <h1>Hello, World!</h1>
      </div>
    </>
  )
}

export default Home
