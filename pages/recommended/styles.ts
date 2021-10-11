import styled from 'styled-components/macro'

export const Content = styled.div`
  background: url('/assets/shape2.svg') no-repeat 50% 0%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding: 0 1em 6em;
`

export const Title = styled.h1`
  font-size: 36px;
  max-width: 261px;
  margin: 0 auto;
`

export const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
  align-items: center;

  img {
    width: 71px;
    aspect-ratio: 1/1;
  }
`

export const Temp = styled.h2`
  font-size: 36px;
  font-family: 'Vollkorn', serif;
  margin: 0;
`

export const City = styled.p`
  margin: 0;
  font-family: 'Mate', serif;
`

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
