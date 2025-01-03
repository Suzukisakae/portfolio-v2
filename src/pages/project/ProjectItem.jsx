import styled from 'styled-components'
import ProjectData from '../../data/projectdata'

function ProjectItem() {
  return (
    <ProjectItemWrapper className="container">
      <div className="title">
        <h2>Một số dự án của mình</h2>
      </div>
      <div className="list-project">
        {ProjectData.map((item) => (
          <a
            key={item.MaProject}
            href={item.DuongDan} // Liên kết đến đường dẫn ngoài
            target="_blank" // Mở trong tab mới
            rel="noopener noreferrer" // Tăng cường bảo mật khi mở tab mới
            className="project-item"
          >
            <div className="project-item__image">
              <img src={item.HinhAnh} alt={item.TenProject} loading="lazy" />
            </div>
            <div className="project-item__info">
              <h3>{item.TenProject}</h3>
              <p>{item.MoTa}</p>
              <div className="divider">
                <p>
                  <strong>Công nghệ:</strong> {item.CongNghe}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </ProjectItemWrapper>
  )
}

const ProjectItemWrapper = styled.section`
  width: 100%;
  z-index: 1;

  .title {
    text-align: start;
    margin-bottom: 20px;
  }

  .list-project {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }

  .project-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-decoration: none; /* Xóa gạch chân */
    background-color: #fff;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid #1864ab;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Hiệu ứng hover */

    &:hover {
      transform: translateY(-5px); /* Đẩy lên trên */
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* Hiệu ứng bóng */
    }

    &:hover .project-item__image img {
      transform: scale(1.1); /* Zoom ảnh */
    }
  }

  .project-item__image {
    overflow: hidden; /* Đảm bảo ảnh không bị tràn */
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.3s ease; /* Thêm hiệu ứng zoom */
    }
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
  }

  .project-item__info {
    padding: 10px;
    h3 {
      margin-bottom: 5px;
    }
    p {
      margin: 0;
    }

    .divider {
      margin-top: 10px;
      border-top: 1px solid #e0e0e0;
      padding-top: 10px;
    }
  }

  @media (max-width: 768px) {
    .list-project {
      grid-template-columns: 1fr;
    }
  }
`

export default ProjectItem
