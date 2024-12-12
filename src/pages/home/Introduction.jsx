import styled from 'styled-components'
import profileImage from '../../assets/logo.png'
import KeyBoard from './KeyBoard'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'

function Introduction() {
  return (
    <>
      <IntroductionWrapper className="container">
        <div className="modal">
          {/* <ThreeDScene /> */}
          <KeyBoard />
        </div>

        <div className="title">
          <p>Hello, I am an indie app developer based in Japan!</p>
        </div>

        <div className="intro">
          <div className="intro-heading">
            <h2>Lê Thành Vinh</h2>
            <p>Digital Craftsman ( Artist / Developer / Designer )</p>
          </div>
          <div className="intro-img">
            <div className="img-wrapper">
              <img src={profileImage} alt="Profile image" />
            </div>
          </div>
        </div>
        <div className="genneral">
          <h2>General Information</h2>
          <p>
            I am a self-taught artist, developer, and designer. I have been
            working in the digital industry for over 10 years. I am passionate
            about creating beautiful and functional things.
          </p>
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <div className="bio-section">
            <p>
              <span className="bio-year">1984</span>
              Born in Osaka (大阪), Japan.
            </p>
          </div>
          <div className="bio-section">
            <p>
              <span className="bio-year">2010</span>
              Completed the Program in the Graduate School of Information
              Science at Nara Institute of Science and Technology
              (奈良先端科学技術大学院大学情報科学研究科修士課程)
            </p>
          </div>
          <div className="bio-section">
            <p>
              <span className="bio-year">2010</span>
              Worked at Yahoo! Japan (ヤフー株式会社入社)
            </p>
          </div>
          <div className="bio-section">
            <p>
              <span className="bio-year">2012 to present</span>
              Working as a freelancer
            </p>
          </div>
        </div>

        <div className="love">
          <h2>What I love</h2>
          <p>
            Coding, music, art and coffee. I love to create things that are.
            Sometimes, I love playing chess. I also enjoy hiking, traveling, and
            exploring new technologies. My hobbies include photography and
            reading science fiction novels.
          </p>
        </div>

        <div className="contact">
          <h2>Contact</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/craftzdog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span>@craftzdog</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/inkdrop_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleIcon />
                <span>@inkdrop_app (English)</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/craftzdog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
                <span>@craftzdog (日本語)</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/craftzdog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                <span>@craftzdog</span>
              </a>
            </li>
          </ul>
        </div>
      </IntroductionWrapper>
    </>
  )
}

const IntroductionWrapper = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;

  .modal {
    position: relative;
    width: 100%;
    height: 400px; /* Đặt chiều cao tùy ý */
    margin: 0 auto; /* Căn giữa theo chiều ngang */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1); /* Màu nền mờ (nếu cần) */
    border-radius: 10px; /* Làm tròn góc (nếu cần) */
    overflow: hidden; /* Đảm bảo canvas không vượt ra ngoài div */

    @media (max-width: 768px) {
      width: 90%;
      height: 300px;
    }
  }

  .title {
    width: 100%;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    p {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .intro {
    display: flex;
    align-items: center;
    gap: 20px;

    .intro-heading {
      flex-grow: 1;
      text-align: start;

      h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 8px;
      }

      p {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }

    .intro-img {
      flex-shrink: 0;
      margin-top: 16px;
      text-align: center;

      .img-wrapper {
        border-color: rgba(255, 255, 255, 0.8);
        border-width: 2px;
        border-style: solid;
        width: 100px;
        height: 100px;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .genneral {
    text-align: start;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .bio {
    text-align: start;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .bio-section {
      margin-bottom: 16px;
    }
    .bio-year {
      font-weight: 700;
      margin-right: 8px;
    }
  }

  .love {
    text-align: start;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .contact {
    width: 100%;
    text-align: start;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .social-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;

      li {
        a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 15px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--primary-color);
          font-size: 1.6rem;
          font-weight: 400;
          background-color: transparent;
          transition: background-color 0.3s, color 0.3s;

          &:hover {
            background-color: rgba(0, 0, 0, 0.1); /* Đổi màu nền khi hover */
            color: var(--bold-color);
          }

          svg {
            font-size: 1.6rem; /* Kích thước của icon */
          }

          span {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

`

export default Introduction
