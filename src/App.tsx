import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shader from "./Shader";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen -z-10 fixed">
        <Suspense
          fallback={<span className="m-auto text-5xl">Loading...</span>}
        >
          <Canvas>
            <Shader />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}
