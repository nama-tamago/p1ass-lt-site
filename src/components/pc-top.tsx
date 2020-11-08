import { Suspense, useMemo, useRef } from 'react';
import Div100vh from 'react-div-100vh';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import { Footer, Header } from 'src/components';
import * as THREE from 'three';
import * as meshline from 'threejs-meshline';

extend(meshline);

function Fatline({ curve, width, color, speed }) {
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
}

function Lines({ count, colors }) {
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
}

const Rig = () => {
  const { camera, mouse } = useThree();
  const w = (typeof window !== 'undefined') ? window.innerWidth / 2 : 0;
  const h = (typeof window !== 'undefined') ? window.innerHeight / 2 : 0;
  useFrame(() => {
    camera.position.x += ((w * mouse.x) / 100 - camera.position.x) * 0.5;
    camera.position.y += ((h * -mouse.y) / 100 - camera.position.y) * 0.5;
    camera.lookAt(0, 0, 0);
  });
  return <></>;
};

const P1assImage = () => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/p1ass-image.png`);
  return (
    <mesh receiveShadow>
      <planeBufferGeometry attach="geometry" args={[44, 18]} />
      <meshBasicMaterial attach="material" map={texture} transparent depthWrite={false} />
    </mesh>
  );
};

const PeopleImage = ({ position, width, height, scale }) => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/people.png`);
  const ref = useRef<{position: {y: number}}>();
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

const DecorationImage = () => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/decoration.png`);
  return (
    <mesh position={[0, 0, -2]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[44, 18]} />
      <meshBasicMaterial attach="material" map={texture} transparent depthWrite={false} />
    </mesh>
  );
};

const P1assLTTextImage = () => {
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath}/p1ass-lt-text.png`);
  return (
    <sprite position={[0, 8, -3]} receiveShadow castShadow>
      <planeBufferGeometry attach="geometry" args={[30, 10]} />
      <spriteMaterial attach="material" map={texture} transparent depthWrite={false} />
    </sprite>
  );
};

const Plane = () => (
  <mesh receiveShadow position={[0, 0, -15]}>
    <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
    <meshStandardMaterial attach="material" color="#09090f" transparent depthWrite={false} />
  </mesh>
);

const Sphere = () => (
  <mesh position={[0, 20, -5]}>
    <sphereBufferGeometry attach="geometry" args={[3, 16, 16]} />
    <meshBasicMaterial attach="material" transparent color="#f5f3fb" />
  </mesh>
);

const Lights = () => (
  <group>
    <pointLight position={[0, -10, 30]} intensity={1} />
    <spotLight intensity={40} position={[0, 125, 70]} angle={0.2} penumbra={1} castShadow />
  </group>
);

export const PCTop: React.FC = () => (
  <Div100vh className="flex flex-col">
    <main className="flex-grow w-full">
      <Canvas
        camera={{ position: [0, 0, 10] }}
        colorManagement={false}
        shadowMap
      >
        <Lights />
        <Plane />
        <Sphere />
        <Lines count={200} colors={['#FEC283', '#ef476f', '#ffd166', '#caffbf', '#9bf6ff', '#ffc6ff']} />
        <Suspense fallback={null}>
          <P1assImage />
          <DecorationImage />
          <P1assLTTextImage />
          <PeopleImage position={[0, -2.5, 1]} width={44} height={18} scale={1.5} />
          <PeopleImage position={[-1, -2.5, 2]} width={44} height={18} scale={2.3} />
          <PeopleImage position={[1, -3, 3]} width={44} height={18} scale={1.6} />
          <PeopleImage position={[-1, -2.5, 4.5]} width={44} height={18} scale={2.7} />
          <PeopleImage position={[1, -2.5, 7]} width={44} height={18} scale={1.4} />
          <PeopleImage position={[0, -2.5, 9]} width={33} height={13.5} scale={1.9} />
        </Suspense>
        <Rig />
      </Canvas>
    </main>
    <Header />
    <Footer />
  </Div100vh>
);
