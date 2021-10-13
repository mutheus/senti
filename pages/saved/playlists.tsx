import { useContext } from 'react'
import { AppContext } from 'pages/app-context'
import styled from 'styled-components'
import { PlaylistItem } from 'components/playlist-item'

const Content = styled.div`
  background: url('/assets/shape3.svg') no-repeat 30% 0%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding: 0 1em 6em;
`
const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  margin-top: 2.5em;
`

const Title = styled.h1`
  font-size: 36px;
  margin: 0;
  margin-top: 2em;
`

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Playlists () {
  const { playlists } = useContext(AppContext)

  if (playlists.length === 0) return <Empty><span>You do not have a playlist yet</span></Empty>

  return (
    <Content>
      <Title>Saved playlists</Title>

      <ListWrapper>
        {playlists.map((item, index) => (
          <PlaylistItem key={item[0].id} item={item} index={index} />
        ))}
      </ListWrapper>
    </Content>
  )
}
