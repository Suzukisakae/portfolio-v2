import styled from 'styled-components'
import Logo from '../assets/logo-vv.png'

function Navbar() {
  return (
    <Nav>
      <a className="nav-brand" href="/">
        <img src={Logo} alt="Personal Logo" />
        <span>Lê Thành Vinh</span>
      </a>
      <div className="nav-links">
        <a href="/" className="link">
          Trang chủ
        </a>
        <a href="/project" className="link">
          Dự án
        </a>
        <a href="/about" className="link">
          Giới thiệu
        </a>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 10px 20px;
  backdrop-filter: blur(10px);
  ${'' /* background-color: rgba(255, 255, 255, 0.8); */}
  ${'' /* background-color: #e7f5ff; */}
  background-color: rgba(231, 245, 255, 0.8);

  .nav-brand {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 50px;
      margin-right: 10px;
    }

    span {
      font-size: 20px;
      font-weight: 700;
      color: var(--primary-color);
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;

    .link {
      font-size: 16px;
      color: var(--primary-color);
      font-weight: 500;
      text-decoration: none;
      position: relative;
      padding: 5px 0;

      &:hover {
        color: var(--bold-color); /* Màu chữ khi hover */
      }

      &:hover::before {
        transform: scaleX(1);
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -7px;
        width: 100%;
        height: 2px;
        background-color: var(--bold-color); /* Màu viền */
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;

    .menu {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 10px;
      width: 100%;  

      a {
        width: 100%;
        text-align: left;
        padding: 10px 0;
      }
    }
  }
`

export default Navbar
