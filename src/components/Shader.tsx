import { Plane, shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

//@ts-ignore
import frag from "../shader/fragment.glsl";
//@ts-ignore
import vert from "../shader/vertex.glsl";

interface Props {
  stream: MediaStream;
}

interface myMaterial extends THREE.Material {
  uniforms: {
    iTime: { value: number };
    iResolution: { value: THREE.Vector3 };
    iChannel0: { value: THREE.DataTexture };
  };
}

interface myMesh extends THREE.Mesh {
  material: myMaterial;
}

export default function Shader({ stream }: Props) {
  //Creates an analyser for the media stream
  const audioCtx = new AudioContext();
  const mic = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  const FFTData = new Uint8Array(analyser.frequencyBinCount);
  analyser.fftSize = analyser.fftSize / Math.pow(2, 3); // default is 2048
  mic.connect(analyser);

  const ref = useRef<myMesh>(null!);

  //Updates uinforms
  useFrame((state) => {
    ref.current.material.uniforms.iTime.value = state.clock.elapsedTime;
    ref.current.material.uniforms.iResolution.value = new THREE.Vector3(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );

    analyser.getByteFrequencyData(FFTData);

    //Uncomment to log the average frequency of the mic
    //const avg = FFTData.reduce((prev, cur) => prev + cur / FFTData.length, 0);
    //console.log(avg);

    const enhanced = FFTData.map((x) => x * 50000000); //An attempt to "volume it up"

    ref.current.material.uniforms.iChannel0.value = new THREE.DataTexture(
      enhanced,
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
  });

  const ShaderMaterial = shaderMaterial(
    {
      iTime: 0,
      iResolution: new THREE.Vector3(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      ),
      iChannel0: 1,
    },
    vert,
    frag
  );

  extend({ ShaderMaterial });
  ShaderMaterial.key = THREE.MathUtils.generateUUID();

  return (
    <>
      <Plane
        ref={ref}
        args={[
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
        ]}
      >
        <shaderMaterial key={ShaderMaterial.key} />
      </Plane>
    </>
  );
}
