import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { arcs, globeConfig } from "@/data/globe";

const Globe = React.lazy(() =>
  import("./ui/globe").then((module) => ({ default: module.Globe }))
);

export function GlobeComp() {
  return (
    <Canvas camera={{ position: [0, 0, 400], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[200, 200, 200]} />
      <Suspense fallback={null}>
        <Globe data={arcs} globeConfig={globeConfig} />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
