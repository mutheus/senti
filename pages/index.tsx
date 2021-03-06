import Head from 'next/head'
import styled from 'styled-components/macro'
import { AppContext } from './app-context'
import { useContext } from 'react'

const Hero = styled.div`
  background-image: url('/assets/shape.svg');
  background-repeat: no-repeat;
  background-position: 20% 0%;

  @media (min-width: 600px) {
    background-position: 30% 30%;
  }

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    gap: .5em;
  }
`

const Title = styled.h2`
  font-size: 36px;
  max-width: 174px;
  margin: 0 auto;
`

const Paragraph = styled.p`
  max-width: 250px;
  font-weight: 700;
  margin: 0;
`

const Input = styled.input`
  border: none;
  background-color: #9494F8;
  background-image: url('/assets/search.svg');
  background-position: 7% 50%;
  background-repeat: no-repeat;
  height: 37px;
  max-width: 205px;
  border-radius: 4px;
  padding: 0 1em;
  padding-left: 3em;
  display: flex;
  align-items: center;
  margin-top: .5em;
  font-size: 15px;
  outline: none;
`

export default function Home () {
  const { inputValue, handleInputValue, handleEnterKey } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>Senti</title>
        <meta name="description" content="Senti app" />
      </Head>
      <Hero>
        <div>
          <Title>Playing the mood.</Title>

          <Paragraph>Get recommended songs based on your city’s weather</Paragraph>

          <Input value={inputValue} onChange={handleInputValue} onKeyUp={handleEnterKey} placeholder="Type your city" />
        </div>
      </Hero>
    </>
  )
}
