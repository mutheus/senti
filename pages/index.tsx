import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components/macro'
import Logo from 'public/logo.svg'
import Arrow from 'public/assets/arrow.svg'
import { AppContext } from './app-context'
import { useContext } from 'react'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`

const Header = styled.header`
  padding: 2em;
  color: #fff;
  display: flex;
  align-items: center;
`

const LogoWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;

  h1 {
    font-family: 'Vollkorn', serif;
    font-size: 18px;
    margin: 0;
  }
`

const Login = styled.a`
  text-decoration: none;
  font-family: 'Mate', serif;
  color: inherit;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
`

const Hero = styled.div`
  background-image: url('/assets/shape.svg');
  font-family: 'Vollkorn', serif;
  background-repeat: no-repeat;
  color: #9494F8;
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
  height: 47px;
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
    <Wrapper>
      <Head>
        <title>Senti</title>
        <meta name="description" content="Senti app" />
      </Head>

      <Header>
        <Link href="/" passHref>
          <LogoWrapper>
            <Logo />

            <h1>Senti</h1>
          </LogoWrapper>
        </Link>

        <Link href="/" passHref>
          <Login>
            <Arrow />

            Log in
          </Login>
        </Link>
      </Header>
      <Hero>
        <div>
          <Title>Playing the mood.</Title>

          <Paragraph>Get recomended songs based on your city’s weather</Paragraph>

          <Input value={inputValue} onChange={handleInputValue} onKeyUp={handleEnterKey} placeholder="Type your city" />
        </div>
      </Hero>
    </Wrapper>
  )
}
