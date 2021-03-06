import { useMemo, useRef } from 'react';
import { extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import * as meshline from 'threejs-meshline';

extend(meshline);

export const Fatline: React.FC<{
  curve: THREE.Vector3[], width: number, color: string, speed: number
}> = ({ curve, width, color, speed }) => {
  const material = useRef<{uniforms: {dashOffset: {value: number}}}>();
  useFrame(() => {
    if (material.current) material.current.uniforms.dashOffset.value -= speed;
  });
  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthWrite={false}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={0.95}
      />
    </mesh>
  );
};

export const Lines: React.FC<{count:number, colors:string[]}> = ({ count, colors }) => {
  const lines = useMemo(
    () => new Array(count).fill(0).map(() => {
      const pos = new THREE.Vector3(
        10 - Math.random() * 20, 20 - Math.random() * 10, 5 - Math.random() * 7,
      );
      const points = new Array(30)
        .fill(0)
        .map(() => (
          pos.add(
            new THREE.Vector3(
              4 - Math.random() * 8, -1 - Math.random() * 2, 5 - Math.random() * 10,
            ),
          ).clone()
        ));
      const curve = new THREE.CatmullRomCurve3(points).getPoints(1000);
      return {
        color: colors[Math.floor(colors.length * Math.random())],
        width: Math.max(0.05, 0.65 * Math.random()),
        speed: Math.max(0.0001, 0.0005 * Math.random()),
        curve,
      };
    }),
    [colors, count],
  );
  // eslint-disable-next-line react/no-array-index-key
  return <>{lines.map((props, idx) => <Fatline {...props} key={idx} />)}</>;
};

export const Rig: React.FC<{xScale:number, yScale:number}> = ({ xScale, yScale }) => {
  const { camera, mouse } = useThree();
  const w = (typeof window !== 'undefined') ? window.innerWidth / 2 : 0;
  const h = (typeof window !== 'undefined') ? window.innerHeight / 2 : 0;
  useFrame(() => {
    camera.position.x += ((w * mouse.x) / xScale - camera.position.x) * 0.5;
    camera.position.y += ((h * -mouse.y) / yScale - camera.position.y) * 0.5;
    camera.lookAt(0, 0, 0);
  });
  return <></>;
};

type Props = {
  position?: THREE.Vector3 | [x: number, y: number, z: number],
  width: number,
  height: number,
  scale?: number
}

export const PeopleImage: React.FC<Props> = ({ position, width, height, scale = 1 }) => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/people.png`);
  const ref = useRef<{position: THREE.Vector3}>();
  const { clock } = useThree();
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y += Math.sin(clock.elapsedTime * 5 * scale) * 0.05 * scale;
    }
  });
  return (
    <sprite ref={ref} position={position} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <spriteMaterial attach="material" map={texture} transparent depthWrite={false} />
    </sprite>
  );
};

export const P1assImage: React.FC<Props> = ({ width, height }) => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/p1ass-image.png`);
  return (
    <mesh receiveShadow>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <meshBasicMaterial attach="material" map={texture} transparent depthWrite={false} />
    </mesh>
  );
};

export const DecorationImage: React.FC<Props> = ({ width, height }) => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/decoration.png`);
  return (
    <mesh position={[0, 0, -2]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <meshBasicMaterial attach="material" map={texture} transparent depthWrite={false} />
    </mesh>
  );
};

export const P1assLTTextImage: React.FC<Props> = ({ position, width, height }) => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/p1ass-lt-text.png`);
  return (
    <sprite position={position} receiveShadow castShadow>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <spriteMaterial attach="material" map={texture} transparent depthWrite={false} />
    </sprite>
  );
};

export const Plane = () => (
  <mesh receiveShadow position={[0, 0, -15]}>
    <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
    <meshStandardMaterial attach="material" color="#09090f" transparent depthWrite={false} />
  </mesh>
);

export const Sphere = () => (
  <mesh position={[0, 20, -5]}>
    <sphereBufferGeometry attach="geometry" args={[3, 16, 16]} />
    <meshBasicMaterial attach="material" transparent color="#f5f3fb" />
  </mesh>
);

export const Lights: React.FC<{
  position: THREE.Vector3 | [x: number, y: number, z: number], intensity: number,
}> = ({ position, intensity }) => (
  <group>
    <pointLight position={[0, -10, 30]} intensity={1} />
    <spotLight intensity={intensity} position={position} angle={0.2} penumbra={1} castShadow />
  </group>
);
