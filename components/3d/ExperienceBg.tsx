import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TechCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group scale={1.8}>
            {/* Central Processing Core - Wireframe for subtle background */}
            <TorusKnot ref={meshRef} args={[1.8, 0.5, 128, 32]}>
                <MeshDistortMaterial
                color="#00D1FF"
                emissive="#001a24"
                roughness={0.1}
                metalness={0.9}
                distort={0.2}
                speed={2}
                wireframe
                transparent
                opacity={0.08} 
                />
            </TorusKnot>

            {/* Surrounding Data Particles */}
             <Points range={60}>
                <sphereGeometry args={[5, 32, 32]} />
                <PointMaterial
                    transparent
                    opacity={0.2}
                    size={0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    color="#00D1FF"
                />
            </Points>
        </group>
    </Float>
  );
};

const ExperienceBg: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10] }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#00D1FF" />
        <TechCore />
      </Canvas>
    </div>
  );
};

export default ExperienceBg;