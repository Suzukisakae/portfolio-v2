import styled, { keyframes } from 'styled-components'
import { Helmet } from 'react-helmet'
import CertificateItem from './CertificateItem'

function Certificate() {
  return (
    <>
      <Helmet>
        <title>Chứng chỉ của Lê Thành Vinh</title>
      </Helmet>
      <CertificatetWrapper>
        <CertificateItem />
      </CertificatetWrapper>
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

const CertificatetWrapper = styled.main`
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default Certificate
