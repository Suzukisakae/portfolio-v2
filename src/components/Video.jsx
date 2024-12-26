import styled from 'styled-components'

function Video() {
  return (
    <VideoBG autoPlay loop muted playsInline>
      <source src="/src/assets/videoBG.mp4" type="video/mp4" />
    </VideoBG>
  )
}

const VideoBG = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: -1;
`

export default Video
