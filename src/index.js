// Bring in the libraries you want inside your bundle
import * as THREE from 'three';
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';

// Build a namespace object
const My3D = {
  THREE,
  ...Fiber,
  ...Drei,
};

// Expose it globally (so Framer can use it via <script> tag)
if (typeof window !== 'undefined') {
  window.My3D = My3D;
}

// Also export it for bundlers / direct imports
export { THREE };
export * from '@react-three/fiber';
export * from '@react-three/drei';
export default My3D;
