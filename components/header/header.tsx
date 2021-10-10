import Link from 'next/link'
import styled from 'styled-components/macro'
import Logo from 'public/logo.svg'
import Arrow from 'public/assets/arrow.svg'
import { AppContext } from 'pages/app-context'
import { useContext } from 'react'

const HeaderWrapper = styled.header`
  padding: 2em;
  color: #fff;
  display: flex;
  align-items: center;
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
`

const UserAvatar = styled.img`
  width: 36px;
  border-radius: 50%;
  aspect-ratio: 1/1;
`

export function Header () {
  const { isLogIn } = useContext(AppContext)

  return (
    <HeaderWrapper>
      <Link href="/" passHref>
        <LogoWrapper>
          <Logo />

          <h1>Senti</h1>
        </LogoWrapper>
      </Link>

      <Link href="/" passHref>
        <Login>
          {isLogIn
            ? (
                <UserAvatar src="/assets/user.jpg" alt="User avatar" />
              )
            : (
                <>
                  <Arrow />

                  Log in
                </>
              )}
        </Login>
      </Link>
    </HeaderWrapper>
  )
}
