/* eslint-disable @next/next/no-img-element */
import { AppContext } from 'pages/app-context'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components/macro'
import useSWR from 'swr'

const Content = styled.div`
  background-image: url('/assets/shape.svg');
  font-family: 'Vollkorn', serif;
  background-repeat: no-repeat;
  color: #9494F8;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
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

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Recommended () {
  const { cityName } = useContext(AppContext)
  const router = useRouter()
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b840b3e20286ec45c862fa996351413d&lang=pt_br&units=metric`
  const { data } = useSWR(url, fetcher)

  useEffect(() => {
    if (cityName === '') {
      router.push('/')
    }
  }, [cityName, router])

  if (!data) return <div>Loading...</div>

  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`

  return (
    <>
      <Content>
        <CurrentWeather>
          <img
            src={weatherIcon}
            width={71}
            height={71}
            alt="Weather icon"
          />

          <Temp>{parseInt(data.main.temp).toFixed(0)}ºC</Temp>

          <City>{data.name}</City>
        </CurrentWeather>

        <div>
          <Title>What about some <i>classical</i> beauty?</Title>
        </div>
      </Content>
    </>
  )
}
