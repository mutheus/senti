import styled from 'styled-components/macro'

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default function Custom404 () {
  return <Error><h3>404 - Page Not Found</h3></Error>
}
