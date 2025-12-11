import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      mesh: any;
    }
  }
}

const TechStructure = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[3, 0, 0]} scale={2.5}>
        <Icosahedron args={[1, 2]}>
          <MeshDistortMaterial
            color="#00D1FF"
            emissive="#050505"
            wireframe
            transparent
            opacity={0.05}
            distort={0.4}
            speed={2}
          />
        </Icosahedron>
      </mesh>
    </Float>
  );
};

const ProjectsBg: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10] }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#00D1FF" />
        <TechStructure />
      </Canvas>
    </div>
  );
};

export default ProjectsBg;