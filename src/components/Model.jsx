import { useGLTF } from '@react-three/drei';
import React from 'react';

export default function Model() {
  const { nodes } = useGLTF('/medias/Logo.glb');

  return (
    <group>
      <mesh {...nodes.Logo}></mesh>
      <mesh {...nodes.Ring}></mesh>
    </group>
  );
}
