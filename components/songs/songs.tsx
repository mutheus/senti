import { AppContext } from 'pages/app-context'
import { useContext, useEffect } from 'react'
import useSWR from 'swr'

type SongsProps = {
  temp: number
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function Songs ({ temp }: SongsProps) {
  const { genre, updateGenre } = useContext(AppContext)
  const url = `https://shazam.p.rapidapi.com/search?term=${genre}&rapidapi-key=3750f6807emshab3fe27b1c01123p17c1d5jsn51b8e98b58c5&locale=en-US&offset=0&limit=5`
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

  return (
    <h1>{data.tracks.hits[0].track.title}</h1>
  )
}
