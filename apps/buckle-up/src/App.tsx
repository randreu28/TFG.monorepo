import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shader from "./components/Shader";
import Loading from "./components/Loading";

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="h-screen w-screen -z-10 fixed">
          <Canvas>
            <Shader />
          </Canvas>
        </div>
      </Suspense>
    </>
  );
}
