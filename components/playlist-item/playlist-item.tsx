import localforage from 'localforage'
import { AppContext } from 'pages/app-context'
import { useContext } from 'react'
import styled from 'styled-components'

type SongType = {
  id: string
  title: string
  subtitle: string
  url: string
  image: string
}

type PlaylistItemProps = {
  item: SongType[]
  index: number
}

const ListItem = styled.li`
  list-style: none;
  max-width: 140px;
  font-family: 'Mate', serif;
  color: #151A1C;
  text-align: start;
  cursor: pointer;
  display: grid;
`

const SongCover = styled.img`
  width: 100%;
  max-width: 140px;
  aspect-ratio: 1/1;
`

const SongTitle = styled.h3`
  margin: 4px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
`

const DeleteButton = styled.button`
  padding: 0;
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
`

export function PlaylistItem ({ item, index }: PlaylistItemProps) {
  const { playlists, setPlaylists } = useContext(AppContext)

  const handleRemoveClick = (id: string) => {
    const newPlaylistsArr = playlists.filter(item => item[0].id !== id)

    setPlaylists(newPlaylistsArr)

    localforage.setItem('playlists', newPlaylistsArr)
  }

  return (
    <ListItem>
      <SongCover src={item[0].image} alt="Playlist cover" />

      <SongTitle>{item.map((item) => [item.title]).join(', ')}</SongTitle>

      <DeleteButton onClick={() => handleRemoveClick(item[0].id)}>
        Remove
      </DeleteButton>
    </ListItem>
  )
}
