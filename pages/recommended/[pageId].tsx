import { Header } from 'components/header'
import { AppContext } from 'pages/app-context'
import { useContext } from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
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

const Title = styled.h1`
  font-size: 36px;
  max-width: 261px;
  margin: 0 auto;
`

export default function Recommended () {
  const { cityName } = useContext(AppContext)

  console.log(cityName)

  return (
    <Wrapper>
      <Header />

      <Hero>
        <div>
          <Title>What about some <i>classical</i> beauty?</Title>
        </div>
      </Hero>
    </Wrapper>
  )
}
