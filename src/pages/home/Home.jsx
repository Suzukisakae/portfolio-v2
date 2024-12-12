import styled, { keyframes } from 'styled-components'
import { Helmet } from 'react-helmet'

import Introduction from './Introduction'

function Home() {
  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <HomeWrapper>
        <Introduction/>
      </HomeWrapper>
    </>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const HomeWrapper = styled.main`
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default Home
