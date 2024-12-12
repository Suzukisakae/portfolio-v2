import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Keyboard from '../../../public/Scene'
import { ContactShadows } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { Suspense } from 'react'

function KeyBoard() {
  console.log(Keyboard)
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Suspense fallback={null}>
        <Keyboard scale={20} rotation={[Math.PI / 2, 0, 0]} />
      </Suspense>
    </Canvas>
  )
}

export default KeyBoard
