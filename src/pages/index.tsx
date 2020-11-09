/* eslint-disable indent */
/* eslint-disable comma-dangle */
import { Suspense } from 'react';
import Div100vh from 'react-div-100vh';
import { Canvas } from 'react-three-fiber';
import {
    DecorationImage, Footer, Header, Lights, Lines, P1assImage, P1assLTTextImage, PeopleImage,
    Plane, Rig, Sphere
} from 'src/components';

const COLORS = ['#FEC283', '#ef476f', '#ffd166', '#caffbf', '#9bf6ff', '#ffc6ff'];

const SPTop = () => (
  <Canvas
    camera={{ position: [0, 0, 10] }}
    colorManagement={false}
    shadowMap
  >
    <Lights position={[0, 120, 50]} intensity={60} />
    <Plane />
    <Sphere />
    <Lines count={200} colors={COLORS} />
    <Suspense fallback={null}>
      <P1assImage width={22} height={9} />
      <DecorationImage width={22} height={9} />
      <P1assLTTextImage position={[0, 6, -3]} width={14} height={4} />
      <PeopleImage position={[0, -2, 1]} width={33} height={12} scale={1.5} />
      <PeopleImage position={[-1, -1.5, 1.5]} width={33} height={12} scale={2.3} />
      <PeopleImage position={[1, -2, 3]} width={33} height={12} scale={1.6} />
      <PeopleImage position={[-1, -2, 5]} width={33} height={12} scale={2.7} />
      <PeopleImage position={[1, -1.3, 6]} width={33} height={12} scale={1.4} />
      <PeopleImage position={[0, -2, 7]} width={33} height={12} scale={1.9} />
    </Suspense>
    <Rig xScale={20} yScale={80} />
  </Canvas>
);

const LGTop = () => (
  <Canvas
    camera={{ position: [0, 0, 10] }}
    colorManagement={false}
    shadowMap
  >
    <Lights position={[0, 100, 50]} intensity={60} />
    <Plane />
    <Sphere />
    <Lines count={200} colors={COLORS} />
    <Suspense fallback={null}>
      <P1assImage width={30} height={12} />
      <DecorationImage width={22} height={9} />
      <P1assLTTextImage position={[0, 6, -3]} width={16} height={5} />
      <PeopleImage position={[0, -1.5, 1]} width={33} height={12} scale={1.5} />
      <PeopleImage position={[-1, -2, 2]} width={33} height={12} scale={2.3} />
      <PeopleImage position={[1, -2, 3]} width={33} height={12} scale={1.6} />
      <PeopleImage position={[-1, -1.5, 4.5]} width={33} height={12} scale={2.7} />
      <PeopleImage position={[1, -2, 6]} width={33} height={12} scale={1.4} />
      <PeopleImage position={[0, -2, 7]} width={33} height={13.5} scale={1.9} />
    </Suspense>
    <Rig xScale={40} yScale={80} />
  </Canvas>
  );

const PCTop = () => (
  <Canvas
    camera={{ position: [0, 0, 10] }}
    colorManagement={false}
    shadowMap
  >
    <Lights position={[0, 125, 70]} intensity={40} />
    <Plane />
    <Sphere />
    <Lines count={200} colors={COLORS} />
    <Suspense fallback={null}>
      <P1assImage width={44} height={18} />
      <DecorationImage width={44} height={18} />
      <P1assLTTextImage position={[0, 8, -3]} width={30} height={10} />
      <PeopleImage position={[0, -2.5, 1]} width={44} height={18} scale={1.5} />
      <PeopleImage position={[-1, -2.5, 2]} width={44} height={18} scale={2.3} />
      <PeopleImage position={[1, -3, 3]} width={44} height={18} scale={1.6} />
      <PeopleImage position={[-1, -2.5, 4.5]} width={44} height={18} scale={2.7} />
      <PeopleImage position={[1, -2.5, 7]} width={44} height={18} scale={1.4} />
      <PeopleImage position={[0, -2.5, 9]} width={33} height={13.5} scale={1.9} />
    </Suspense>
    <Rig xScale={100} yScale={100} />
  </Canvas>
);

const Index = () => (
  <Div100vh className="flex flex-col">
    <main className="flex-grow w-full h-full sm:hidden">
      <SPTop />
    </main>
    <main className="flex-grow w-full h-full hidden sm:block lg:hidden">
      <LGTop />
    </main>
    <main className="flex-grow w-full h-full hidden lg:block">
      <PCTop />
    </main>
    <Header />
    <Footer />
  </Div100vh>
);

export default Index;
