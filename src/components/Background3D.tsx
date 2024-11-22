import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Icosahedron } from '@react-three/drei';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Icosahedron args={[4, 1]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#00ffff"
          wireframe
          opacity={1}
          transparent
          emissive="#1f2937"
          emissiveIntensity={0.3}
        />
      </Icosahedron>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}