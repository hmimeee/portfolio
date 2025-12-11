import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Octahedron, Torus, Dodecahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const RandomShape = ({ position, rotation, type, scale }: any) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });

  const materialConfig = {
      color: "#00D1FF",
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      distort: 0.2,
      speed: 1
  };

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {type === 0 && (
            <Icosahedron args={[1, 0]}>
                <MeshDistortMaterial {...materialConfig} />
            </Icosahedron>
        )}
        {type === 1 && (
            <Octahedron args={[1, 0]}>
                <MeshDistortMaterial {...materialConfig} />
            </Octahedron>
        )}
        {type === 2 && (
            <Torus args={[0.8, 0.25, 16, 32]}>
                 <MeshDistortMaterial {...materialConfig} />
            </Torus>
        )}
        {type === 3 && (
            <Dodecahedron args={[1, 0]}>
                 <MeshDistortMaterial {...materialConfig} />
            </Dodecahedron>
        )}
      </group>
    </Float>
  );
};

const Scene = () => {
    const items = useMemo(() => {
        return new Array(4).fill(0).map((_, i) => ({
            position: [(i - 1.5) * 4, (Math.random() - 0.5) * 2, 0] as [number, number, number],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            scale: 0.8 + Math.random() * 0.4,
            type: Math.floor(Math.random() * 4)
        }))
    }, []);

    return (
        <group>
            {items.map((item, i) => (
                <RandomShape key={i} {...item} />
            ))}
        </group>
    )
}

const Separator: React.FC = () => {
  return (
    <div className="h-40 w-full relative z-0 overflow-hidden bg-transparent pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#00D1FF" />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Separator;