import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      sphereGeometry: any;
      ambientLight: any;
      directionalLight: any;
    }
  }
}

const TechCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <group>
            {/* Central Processing Core */}
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
                <MeshDistortMaterial
                color="#00D1FF"
                emissive="#000000"
                roughness={0.1}
                metalness={1}
                distort={0.4}
                speed={2}
                wireframe
                />
            </TorusKnot>

            {/* Surrounding Data Particles */}
             <Points range={50}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <PointMaterial
                    transparent
                    opacity={0.6}
                    size={0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    color="#ffffff"
                />
            </Points>
        </group>
    </Float>
  );
};

const TechSeparator: React.FC = () => {
  return (
    <div className="h-[40vh] w-full flex items-center justify-center bg-transparent relative z-0">
      <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#00D1FF" />
        <TechCore />
      </Canvas>
    </div>
  );
};

export default TechSeparator;