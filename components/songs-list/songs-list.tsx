import { AppContext } from 'pages/app-context'
import { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { format } from 'date-fns'
import { nanoid } from 'nanoid'
import * as S from './styles'

type SongsProps = {
  temp: number
}

type SongType = {
  id: string
  title: string
  subtitle: string
  url: string
  image: string
}

type TrackType = {
  key: string
  title: string
  subtitle: string
  url: string
  images: {
    coverart: string
  }
}

type DataType = {
  track: TrackType
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function SongsList ({ temp }: SongsProps) {
  const { cityName, isSaved, setIsSaved, genre, updateGenre, saveInLocalStorage } = useContext(AppContext)
  const url = `https://shazam.p.rapidapi.com/search?term=${genre}&rapidapi-key=a589ac6bdcmshc90497431f815eep1d2c5ejsnfbad297d720d&locale=en-US&offset=0&limit=4`
  const { data, error } = useSWR(url, fetcher)

  useEffect(() => {
    if (temp >= 32) {
      updateGenre('rock')
    } else if (temp < 32 && temp >= 24) {
      updateGenre('pop')
    } else if (temp < 24 && temp >= 16) {
      updateGenre('classical')
    } else {
      updateGenre('lofi')
    }
  }, [temp, updateGenre])

  useEffect(() => {
    setIsSaved(false)
  }, [setIsSaved])

  if (error) return <p>Failed to load</p>

  if (!data) return <p>Loading...</p>

  const songs = data.tracks.hits.map((item: DataType) => {
    return {
      id: nanoid(),
      date: format(new Date(), 'MMM dd, yyyy • HH:mm'),
      temperature: temp,
      city: cityName,
      genre,
      title: item.track.title,
      subtitle: item.track.subtitle,
      url: item.track.url,
      image: item.track.images.coverart,
    }
  })

  return (
    <>
      <S.ListWrapper>
        {songs.map((song: SongType) => (
          <S.ListItem key={song.id}>
            <S.SongLink href={song.url} target="_blank">
              <S.SongCover src={song.image} alt={song.title} />

              <S.SongTitle>{song.title}</S.SongTitle>

              <S.SongSubtitle>{song.subtitle}</S.SongSubtitle>
            </S.SongLink>
          </S.ListItem>
        ))}
      </S.ListWrapper>

      <S.SaveButton
        disabled={isSaved}
        onClick={() => saveInLocalStorage(songs)}
      >
        Save Playlist
      </S.SaveButton>
    </>
  )
}
