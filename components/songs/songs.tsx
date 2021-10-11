import { AppContext } from 'pages/app-context'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

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

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  margin-top: 2.5em;
`

const ListItem = styled.li`
  list-style: none;
  max-width: 140px;
  margin: 0 auto;
  font-family: 'Mate', serif;
  color: #151A1C;
  text-align: start;
`

const SongLink = styled.a`
  color: inherit;
  text-decoration: none;
`

const SongCover = styled.img`
  width: 100%;
  max-width: 140px;
  aspect-ratio: 1/1;
`

const SongTitle = styled.h3`
  margin: 4px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const SongSubtitle = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function Songs ({ temp }: SongsProps) {
  const { genre, updateGenre } = useContext(AppContext)
  const url = `https://shazam.p.rapidapi.com/search?term=${genre}&rapidapi-key=3750f6807emshab3fe27b1c01123p17c1d5jsn51b8e98b58c5&locale=en-US&offset=0&limit=4`
  const { data, error } = useSWR(url, fetcher)

  useEffect(() => {
    if (temp > 32) {
      updateGenre('rock')
    } else if (temp < 32 && temp > 24) {
      updateGenre('pop')
    } else if (temp < 24 && temp > 16) {
      updateGenre('classical')
    } else {
      updateGenre('lofi')
    }
  }, [temp, updateGenre])

  if (error) return <p>Failed to load</p>

  if (!data) return <p>Loading...</p>

  const songs = data.tracks.hits.map((item: DataType) => {
    return {
      id: item.track.key,
      title: item.track.title,
      subtitle: item.track.subtitle,
      url: item.track.url,
      image: item.track.images.coverart,
    }
  })

  return (
    <ListWrapper>
      {songs.map((song: SongType) => (
        <ListItem key={song.id}>
          <SongLink href={song.url}>
            <SongCover src={song.image} alt={song.title} />

            <SongTitle>{song.title}</SongTitle>

            <SongSubtitle>{song.subtitle}</SongSubtitle>
          </SongLink>
        </ListItem>
      ))}
    </ListWrapper>
  )
}