import React from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import Particles from "./Particles";

function Scene() {
  return (
    <Canvas className="scene">
      <Sphere />
      <Particles />
      <pointLight position={[2, 3, 4]} color={0xffffff} intensity={0.1} />
      <perspectiveCamera position={[0, 0, 2]} />
    </Canvas>
  );
}

export default Scene;