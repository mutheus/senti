import Link from 'next/link'
import styled from 'styled-components/macro'
import Logo from 'public/logo.svg'
import Arrow from 'public/assets/arrow.svg'
import { AppContext } from 'pages/app-context'
import { useContext, useEffect, useRef, useState } from 'react'

const HeaderWrapper = styled.header`
  padding: 2em;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
`

const LogoWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;

  h1 {
    font-family: "Vollkorn", serif;
    font-size: 18px;
    margin: 0;
  }
`

const Login = styled.a`
  text-decoration: none;
  font-family: "Mate", serif;
  color: inherit;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const UserAvatar = styled.img`
  width: 36px;
  border-radius: 50%;
  aspect-ratio: 1/1;
`

const Menu = styled.ul`
  width: 100%;
  max-width: 140px;
  background-color: #9494F8;
  border-radius: 4px;
  position: absolute;
  right: 2em;
  top: 80%;
  padding: 2em;
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

export function Header () {
  const { isLogIn } = useContext(AppContext)
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)
  const avatarRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && !avatarRef.current?.contains(e.target as Node)) {
        setOpenMenu(false)
      }
    })
  }, [])

  return (
    <>
      <HeaderWrapper>
        <Link href="/" passHref>
          <LogoWrapper>
            <Logo />

            <h1>Senti</h1>
          </LogoWrapper>
        </Link>

        <Login>
          {isLogIn
            ? (
                <UserAvatar ref={avatarRef} onClick={() => setOpenMenu(!openMenu)} src="/assets/user.jpg" alt="User avatar" />
              )
            : (
                <>
                  <Arrow />

                  Log in
                </>
              )}
        </Login>

        {openMenu && (
            <Menu ref={menuRef}>
              <li>
                <Arrow />

                Profile
              </li>
              <li>
                <Arrow />

                <Link href="/saved/playlists" passHref>Saved playlists</Link>
              </li>
              <li>
                <Arrow />

                Settigns
              </li>
              <li>
                <Arrow />

                Log out
              </li>
            </Menu>
        )}
      </HeaderWrapper>
    </>
  )
}
