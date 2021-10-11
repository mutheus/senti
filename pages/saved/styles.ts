import styled from 'styled-components/macro'

export const Content = styled.div`
  background: url('/assets/shape3.svg') no-repeat 30% 0%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding: 0 1em 6em;
`
export const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  margin-top: 2.5em;
`

export const ListItem = styled.li`
  list-style: none;
  max-width: 140px;
  margin: 0 auto;
  font-family: 'Mate', serif;
  color: #151A1C;
  text-align: start;
  cursor: pointer;
`

export const SongCover = styled.img`
  width: 100%;
  max-width: 140px;
  aspect-ratio: 1/1;
`

export const SongTitle = styled.h3`
  margin: 4px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: 36px;
  margin: 0;
  margin-top: 2em;
`

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
