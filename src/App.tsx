import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen -z-10 fixed">
        <Canvas>
          <color attach="background" args={["#314155"]} />
          <OrbitControls />
          <Box />
        </Canvas>
      </div>
      <h1 className="text-white text-center p-20 text-4xl">Hello world</h1>
    </>
  );
}
