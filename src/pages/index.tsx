import Image from 'next/image';
import { useMemo, useRef } from 'react';
import Div100vh from 'react-div-100vh';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
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
        depthTest={false}
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
        10 - Math.random() * 20, 20 - Math.random() * 10, 5 - Math.random() * 10,
      );
      const points = new Array(30)
        .fill(0)
        .map(() => (
          pos.add(
            new THREE.Vector3(
              4 - Math.random() * 8, -Math.random() * 4, 5 - Math.random() * 10,
            ),
          ).clone()
        ));
      const curve = new THREE.CatmullRomCurve3(points).getPoints(1000);
      return {
        color: colors[Math.ceil(colors.length * Math.random())],
        width: Math.max(0.1, 0.65 * Math.random()),
        speed: Math.max(0.0001, 0.0005 * Math.random()),
        curve,
      };
    }),
    [colors, count],
  );
  return <>{lines.map((props) => <Fatline {...props} />)}</>;
}

function Rig() {
  const { camera, mouse } = useThree();
  const w = (typeof window !== 'undefined') ? window.innerWidth / 2 : 0;
  const h = (typeof window !== 'undefined') ? window.innerHeight / 2 : 0;
  useFrame(() => {
    camera.position.x += ((w * mouse.x) / 100 - camera.position.x) * 0.5;
    camera.position.y += ((h * -mouse.y) / 100 - camera.position.y) * 0.5;
    camera.lookAt(0, 0, 0);
  });
  return <></>;
}

const Index: React.FC = () => (
  <Div100vh className="flex flex-col">
    <Header />
    <main className="flex-grow w-full">
      <Image
        src="/p1ass-lt-key-visual.png"
        layout="fill"
      />
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Lines count={200} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
        <Rig />
      </Canvas>
    </main>
    <Footer />
  </Div100vh>
);

export default Index;
