import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import Arrow from 'public/assets/arrow.svg'
import { AppContext } from 'pages/app-context'
import * as S from './styles'

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
      <S.HeaderWrapper>
        <Link href="/" passHref>
          <S.LogoWrapper>
            <Logo />

            <h1>Senti</h1>
          </S.LogoWrapper>
        </Link>

        <S.Login>
          {isLogIn
            ? (
                <S.UserAvatar
                  ref={avatarRef}
                  onClick={() => setOpenMenu(!openMenu)}
                  src="/assets/user.jpg"
                  alt="User avatar"
                />
              )
            : (
                <>
                  <Arrow />

                  Log in
                </>
              )}
        </S.Login>

        {openMenu && (
            <S.Menu ref={menuRef}>
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
            </S.Menu>
        )}
      </S.HeaderWrapper>
    </>
  )
}
