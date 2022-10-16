import { Canvas } from "@react-three/fiber";
import Shader from "./Shader";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen -z-10 fixed">
        <Canvas>
          <Shader />
        </Canvas>
      </div>
    </>
  );
}
