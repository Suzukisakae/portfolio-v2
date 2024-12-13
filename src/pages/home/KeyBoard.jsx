import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Keyboard from '../../../public/Scene'
import { Suspense, useRef } from 'react'

function RotatingKeyboard() {
  const ref = useRef()

  // Thêm logic xoay vòng thời gian thực
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.0 // Xoay quanh trục Y
    }
  })

  return (
    <mesh ref={ref}>
      <Keyboard scale={15} rotation={[0, 0, 0]} />
    </mesh>
  )
}

function KeyBoard() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Suspense fallback={null}>
        <RotatingKeyboard />
      </Suspense>
    </Canvas>
  )
}

export default KeyBoard
