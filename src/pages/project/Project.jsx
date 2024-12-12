import styled, { keyframes } from 'styled-components'
import { Helmet } from 'react-helmet'

import ProjectItem from './ProjectItem'

function Project() {
  return (
    <>
      <Helmet>
        <title>Dự án</title>
      </Helmet>
      <ProjectWrapper>
        <ProjectItem />
      </ProjectWrapper>
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

const ProjectWrapper = styled.main`
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default Project
