import { Header } from 'components/header'
import { AppContext } from 'pages/app-context'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components/macro'
import useSWR from 'swr'

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
const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Recommended () {
  const { cityName } = useContext(AppContext)
  const router = useRouter()
  const { data } = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b840b3e20286ec45c862fa996351413d&lang=pt_br&units=metric`, fetcher)

  useEffect(() => {
    if (cityName === '') {
      router.push('/')
    }
  }, [cityName, router])

  if (!data) return <div>Loading...</div>

  console.log(data.main.temp)

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
