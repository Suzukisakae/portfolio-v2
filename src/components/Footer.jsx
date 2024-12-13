import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Lê Thành Vinh.
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  text-align: center;
  opacity: 0.4;
  font-size: 1.6rem; /* Equivalent to 'sm' in Chakra UI */
  padding: 20px 0;
`

export default Footer
