import React, {useEffect} from "react";
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Ex1() {

    const CameraController = () => {
        const { camera, gl } = useThree();
        useEffect(
           () => {
              const controls = new OrbitControls(camera, gl.domElement);
              controls.minDistance = 3;
              controls.maxDistance = 20;
              return () => {
                controls.dispose();
              };
           },
           [camera, gl]
        );
        return null;
     };

    return(
        <>
            <Canvas>
            <perspectiveCamera position={[0,50,0]} near={4.9} far={5}></perspectiveCamera>

            <ambientLight args={['#ffffff', 0.5]}></ambientLight>
                <mesh>
                <sphereGeometry args={[3, 10, 9]}></sphereGeometry>
                <meshStandardMaterial color='red'/>
                </mesh>

                <mesh rotation={[1.7, 3.14, 0.0]} position={[0,-2,0]}>
                <planeGeometry args={[21,8,1,1]}></planeGeometry>
                <meshStandardMaterial color='blue'></meshStandardMaterial>
                </mesh>
                <CameraController/>
            </Canvas>
        </>
    )
}