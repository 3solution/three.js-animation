import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ModelLoader from '../../components/ModelLoader';
import styles from './styles.module.scss';
import { OrbitControls } from '@react-three/drei';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Canvas camera={{ fov: 35, far: 20000, position: [0, 0, 30] }} className={styles.canvas}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} color={0xffffff} />
          <hemisphereLight intensity={0.2} color={0xffffff} />
          <directionalLight color={0xffffff} intensity={1} castShadow={true} position={[0, 100, 0]} />
          <ModelLoader></ModelLoader>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MainPage;
