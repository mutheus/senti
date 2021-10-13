import styled from 'styled-components/macro'

type SaveButtonProps = {
  disabled: boolean
}

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
`

export const SongLink = styled.a`
  color: inherit;
  text-decoration: none;
`

export const SongCover = styled.img`
  width: 100%;
  max-width: 140px;
  aspect-ratio: 1/1;
`

export const SongTitle = styled.h3`
  margin: 4px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const SongSubtitle = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const SaveButton = styled.button<SaveButtonProps>`
  height: 37px;
  padding: 0 1em;
  background-color: #151A1C;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-family: 'Mate', serif;
  margin: 2em auto;
  cursor: pointer;

  &:disabled {
    opacity: .7;
  }

  &:active {
    transform: translateY(2px);
  }
`
