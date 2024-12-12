import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import styled from 'styled-components'

function ThreeDScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    )
    mountRef.current.appendChild(renderer.domElement)

    // Add lights
    const topLight = new THREE.DirectionalLight(0xffffff, 1)
    topLight.position.set(5, 5, 5)
    scene.add(topLight)

    const ambientLight = new THREE.AmbientLight(0x333333)
    scene.add(ambientLight)

    // Load GLB model
    const loader = new GLTFLoader()
    loader.load(
      '/src/assets/gmmk.glb',
      (gltf) => {
        const object = gltf.scene
        object.position.set(0, -1, 0) // Adjust position
        object.scale.set(1.5, 1.5, 1.5) // Adjust scale
        scene.add(object)
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error)
      }
    )

    // OrbitControls configuration
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 2
    controls.maxDistance = 10
    controls.maxPolarAngle = Math.PI / 2
    controls.target.set(0, 1, 0)

    // Set initial camera position
    camera.position.set(0, 2, 5)
    camera.lookAt(0, 0, 0)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      )
    }
    window.addEventListener('resize', handleResize)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div id="container3D" ref={mountRef}></div>
}

export default ThreeDScene
