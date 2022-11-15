import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const ModelLoader = () => {
  const group = useRef();
  const cube = useGLTF('glb/Cube1.glb');
  console.log('cube: ', cube);
  const cubeMaterial = useGLTF('glb/Cube1.glb').materials;
  const cubeAnimations = useGLTF('glb/Cube1.glb').animations;
  const cubeActions = useAnimations(cubeAnimations, group).actions;

  useEffect(() => {
    // if( cubeActions ) cubeActions.Animations.play();
    if (cubeActions) {
      console.log('cube->', cubeActions.Animation);
      cubeActions.Animation.play();
    }
  }, [cubeActions]);

  return (
    <group ref={group}>
      {/* <mesh name="cube" />
       */}
      <primitive object={cube.scene} />
    </group>
  );
};

useGLTF.preload('glb/Cube1.glb');
export default ModelLoader;
