import styled from 'styled-components/macro'

export const HeaderWrapper = styled.header`
  padding: 2em;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
`

export const LogoWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;

  h1 {
    font-size: 18px;
    margin: 0;
  }
`

export const Login = styled.a`
  text-decoration: none;
  font-family: "Mate", serif;
  color: inherit;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

export const UserAvatar = styled.img`
  width: 36px;
  border-radius: 50%;
  aspect-ratio: 1/1;
`

export const Menu = styled.ul`
  width: 100%;
  max-width: 140px;
  background-color: #9494F8;
  border-radius: 4px;
  position: absolute;
  right: 2em;
  top: 80%;
  padding: 2em 1em;
  font-family: 'Mate', serif;
  margin: 0;
  color: #151A1C;
  display: flex;
  flex-direction: column;
  gap: 1em;

  a {
    color: #151A1C;
    text-decoration: none;
  }

  li {
    list-style-type: none;
    cursor: pointer;
  }

  svg {
    stroke: #151A1C;
    margin-right: 8px
  }
`
