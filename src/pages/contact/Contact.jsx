import styled, { keyframes } from 'styled-components'
import { Helmet } from 'react-helmet'

import ContactItem from './ContactItem'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Liên hệ với Lê Thành Vinh</title>
      </Helmet>
      <ContactWrapper>
        <ContactItem />
      </ContactWrapper>
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

const ContactWrapper = styled.main`
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default Contact
