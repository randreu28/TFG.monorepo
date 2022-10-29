import { Plane, shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { buttonGroup, useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

//@ts-ignore
import fragment from "../shaders/fragment.glsl";
//@ts-ignore
import vertex from "../shaders/vertex.glsl";

interface myMaterial extends THREE.Material {
  uniforms: {
    iTime: { value: number };
    iResolution: { value: THREE.Vector3 };
    iChannel0: { value: THREE.Texture };
    iChannel1: { value: THREE.Texture };
    iChannel2: { value: THREE.Texture };
  };
}
//For uniform's type saftey
interface myMesh extends THREE.Mesh {
  material: myMaterial;
}

export default function Model() {
  const ref = useRef<myMesh>(null!);

  let textureControlOptions = {
    none: 0,
    bitmap1: 1,
    bitmap2: 2,
    bitmap3: 3,
    bitmap4: 4,
    bitmap5: 5,
    bitmap6: 6,
    bitmap7: 7,
    bitmap8: 8,
    bitmap9: 9,
    bitmap10: 10,
  };

  const [activeTextures, setActiveTextures] = useControls("Textures", () => ({
    iChannel0: {
      value: 0,
      options: textureControlOptions,
    },
    iChannel1: {
      value: 2,
      options: textureControlOptions,
    },
    iChannel2: {
      value: 0,
      options: textureControlOptions,
    },
    1: buttonGroup({
      label: "Presets",
      opts: {
        Hell: () => {
          setActiveTextures({ iChannel0: 0, iChannel1: 6, iChannel2: 0 });
        },
        Christmas: () => {
          setActiveTextures({ iChannel0: 6, iChannel1: 1, iChannel2: 0 });
        },
        Ghost: () => {
          setActiveTextures({ iChannel0: 0, iChannel1: 2, iChannel2: 0 });
        },
      },
    }),

    2: buttonGroup({
      label: "Presets 2",
      opts: {
        Purpule: () => {
          setActiveTextures({ iChannel0: 7, iChannel1: 10, iChannel2: 5 });
        },
        Metal: () => {
          setActiveTextures({ iChannel0: 0, iChannel1: 4, iChannel2: 9 });
        },
        Nightmare: () => {
          setActiveTextures({ iChannel0: 0, iChannel1: 0, iChannel2: 4 });
        },
      },
    }),
  }));

  const { speed } = useControls("Scene", {
    speed: { value: 0.1, min: 0, max: 2, step: 0.01 },
  });

  let textures: THREE.Texture[] = [];

  for (let i = 1; i <= 10; i++) {
    textures[i] = useLoader(THREE.TextureLoader, `bitmap${i}.jpg`);
  }

  const ShaderMaterial = shaderMaterial(
    {
      iTime: 0,
      iResolution: new THREE.Vector3(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      ),
      iChannel0: textures[activeTextures.iChannel0],
      iChannel1: textures[activeTextures.iChannel1],
      iChannel2: textures[activeTextures.iChannel2],
    },
    vertex,
    fragment
  );

  extend({ ShaderMaterial });
  ShaderMaterial.key = THREE.MathUtils.generateUUID();

  useFrame((state) => {
    ref.current.material.uniforms.iTime.value = state.clock.elapsedTime * speed;
    ref.current.material.uniforms.iResolution.value = new THREE.Vector3(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
  });

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
