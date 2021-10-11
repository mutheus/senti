import { AppContext } from 'pages/app-context'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Songs } from 'components/songs'
import useSWR from 'swr'
import styled from 'styled-components'

const Content = styled.div`
  background: url('/assets/shape2.svg') no-repeat 50% 0%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding: 0 1em 6em;
`

const Title = styled.h1`
  font-size: 36px;
  max-width: 261px;
  margin: 0 auto;
`

const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
  align-items: center;

  img {
    width: 71px;
    aspect-ratio: 1/1;
  }
`

const Temp = styled.h2`
  font-size: 36px;
  font-family: 'Vollkorn', serif;
  margin: 0;
`

const City = styled.p`
  margin: 0;
  font-family: 'Mate', serif;
`

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Recommended () {
  const { cityName, genre } = useContext(AppContext)
  const router = useRouter()
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b840b3e20286ec45c862fa996351413d&lang=pt_br&units=metric`
  const { data, error } = useSWR(url, fetcher)

  useEffect(() => {
    if (cityName === '') {
      router.push('/')
    }
  }, [cityName, router])

  if (error) return <Empty><span>Failed to load</span></Empty>

  if (!data) return <Empty><span>Loading...</span></Empty>

  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
  const temp = Number(parseInt(data.main.temp).toFixed(0))

  return (
    <>
      <Content>
        <CurrentWeather>
          <img
            src={weatherIcon}
            alt="Weather icon"
          />

          <Temp>{temp}ºC</Temp>

          <City>{data.name}</City>
        </CurrentWeather>

        <div>
          <Title>What about some <i>{genre}</i> beauty?</Title>

          <Songs temp={temp} />
        </div>
      </Content>
    </>
  )
}
