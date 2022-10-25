import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import PermGranter from "./components/PermGranter";
import Shader from "./Shader";

export default function App() {
  const [stream, setStream] = useState<null | MediaStream>(null);

  if (stream) {
    return (
      <div className="h-screen w-screen bg-gray-900 fixed">
        <Canvas>
          <OrbitControls />
          <Shader stream={stream} />
        </Canvas>
      </div>
    );
  } else {
    return <PermGranter setStream={setStream} />;
  }
}
