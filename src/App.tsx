import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vignette, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
import Buffer from "./Buffer";
import DynamicText from "./DynamicText";

export default function App() {
  const { vignette, backgroundColor, camPosition } = useControls("Scene", {
    vignette: { value: 0.5, min: 0, max: 1 },
    backgroundColor: "#191a2e",
    camPosition: [4, 3, 4],
  });

  return (
    <>
      <div className="h-screen w-screen -z-10 fixed">
        <Canvas>
          <PerspectiveCamera makeDefault position={camPosition} />
          <color attach="background" args={[backgroundColor]} />
          <EffectComposer>
            <Vignette
              eskil={true}
              opacity={vignette}
              offset={0.1}
              darkness={1.5}
            />
          </EffectComposer>
          <OrbitControls />
          <Buffer />
        </Canvas>
      </div>
      <div className="text-white p-20">
        <DynamicText />
      </div>
    </>
  );
}
