import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = (props) => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    mesh.current.rotation.y = 0.5 * elapsedTime;
  });

  return (
    <points {...props} ref={mesh}>
      {/* <torusGeometry args={[0.7, 0.2, 16, 100]} /> */}
      <torusGeometry args={[2.1, 0.6, 30, 200]} />
      <pointsMaterial size={0.006} />
    </points>
  );
};

export default Sphere;
