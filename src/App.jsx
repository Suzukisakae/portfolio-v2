import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Project from './pages/project/Project'
import About from './pages/about/About'

import styled from 'styled-components'
import Sticky from 'react-sticky-el'

function App() {
  return (
    <>
      <StickyWrapper>
        <Sticky>
          <Navbar />
        </Sticky>
      </StickyWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

const StickyWrapper = styled.div`
  position: relative;
  z-index: 1000; /* Đảm bảo Sticky không bị đè lên */
`

export default App
