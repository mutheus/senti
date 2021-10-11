import { AppContext } from 'pages/app-context'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Songs } from 'components/songs'
import useSWR from 'swr'
import * as S from './styles'

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

  if (error) return <S.Empty><span>Failed to load</span></S.Empty>

  if (!data) return <S.Empty><span>Loading...</span></S.Empty>

  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
  const temp = Number(parseInt(data.main.temp).toFixed(0))

  return (
    <>
      <S.Content>
        <S.CurrentWeather>
          <img
            src={weatherIcon}
            alt="Weather icon"
          />

          <S.Temp>{temp}ºC</S.Temp>

          <S.City>{data.name}</S.City>
        </S.CurrentWeather>

        <div>
          <S.Title>What about some <i>{genre}</i> beauty?</S.Title>

          <Songs temp={temp} />
        </div>
      </S.Content>
    </>
  )
}
