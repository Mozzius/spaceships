import React from 'react';
import { BackSide } from 'three';

export default () => {
  return (
    <mesh userData={{ noIntersect: true }}>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={0x000000}
        attach="material"
        side={BackSide}
        metalness={0.4}
      />
    </mesh>
  );
};
