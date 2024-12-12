import styled from 'styled-components'
import ProjectData from '../../data/projectdata'

function ProjectItem() {
  return (
    <ProjectItemWrapper className="container">
      <div className="title">
        <h2>Project</h2>
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
              <img src={item.HinhAnh} alt={item.TenProject} />
            </div>
            <div className="project-item__info">
              <h3>{item.TenProject}</h3>
              <p>{item.MoTa}</p>
              <p>Công nghệ: {item.CongNghe}</p>
            </div>
          </a>
        ))}
      </div>
    </ProjectItemWrapper>
  )
}

const ProjectItemWrapper = styled.section`
  width: 100%;

  .title {
    text-align: start;
    margin-bottom: 20px;
  }

  .list-project {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .project-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-decoration: none; /* Xóa gạch chân */
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
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
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease; /* Thêm hiệu ứng zoom */
    }
  }

  .project-item__info {
    padding: 10px;
    h3 {
      margin-bottom: 5px;
      color: #333;
    }
    p {
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    .list-project {
      grid-template-columns: 1fr;
    }
  }
`

export default ProjectItem
