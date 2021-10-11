import { useContext, useEffect } from 'react'
import localforage from 'localforage'
import { AppContext } from 'pages/app-context'
import * as S from './styles'

type SongType = {
  id: string
  title: string
  subtitle: string
  url: string
  image: string
}

export default function Playlists () {
  const { playlists, setPlaylists } = useContext(AppContext)

  useEffect(() => {
    async function getItem () {
      const data = await localforage.getItem<SongType[][]>('playlists')

      if (data) {
        setPlaylists(data)
      }
    }

    getItem()
  }, [setPlaylists])

  if (playlists.length === 0) return <S.Empty><span>You do not have a playlist yet</span></S.Empty>

  return (
    <S.Content>
      <S.Title>Saved playlists</S.Title>

      <S.ListWrapper>
        {playlists.map(item => (
          <S.ListItem key={item[0].id}>
              <S.SongCover src={item[0].image} alt="Playlist cover" />

              <S.SongTitle>
                {item.map(item => [item.title]).join(', ')}
              </S.SongTitle>
          </S.ListItem>
        ))}
      </S.ListWrapper>
    </S.Content>
  )
}
