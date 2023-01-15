import React, {useEffect, useRef} from "react";
import { Canvas, useThree, useFrame } from '@react-three/fiber'
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
           },[camera, gl]
        );
        return null;
     };

     /*
     Iremos começar nosso código aqui em baixo:
     Comecaremos pela animação chamando useFrame do react-three/fiber
     */

     function MyAnimatedBox() {
        const mymesh = useRef()

        useFrame(({ clock }) => {
            mymesh.current.rotation.x = clock.getElapsedTime()
            mymesh.current.rotation.y = clock.getElapsedTime()
        })

        return (
          <mesh ref={mymesh}>
            <boxGeometry />
            <meshBasicMaterial color="green" args={[1, 2, 10]}/>
          </mesh>
        )
    }

    return(
        <>
            <Canvas>
            <perspectiveCamera position={[0,50,0]} near={4.9} far={5}></perspectiveCamera>

            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 10, 5]} color="red" />
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

            {/*
            <Canvas> é Equvalente a const renderer = new THREE.WebGLRenderer({canvas}); 
            camera propriedade é equivalente a const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);*/}
            <Canvas>
                {/*Criando a iluminação para poder ver melhor a animação 3d criada */}
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 0, 5]} color="red" />

                {/*Usado para adicionar um laço entre os objetos que serão renderizados dentro dele */}
                <mesh position={[3,-1,0]}>
                    {/*
                    boxgeometry é equivalente a:
                    const boxWidth = 1;
                    const boxHeight = 1;
                    const boxDepth = 1;
                    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth); */}
                    <boxGeometry args={[1,1,1]}></boxGeometry>
                    {/*
                    meshBasicMaterial é equivalente a:
                    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});*/}
                    <meshBasicMaterial color='green'></meshBasicMaterial>
                </mesh>
                {/* Chamando a animação que foi definida la na parte de cima.*/}
                <MyAnimatedBox></MyAnimatedBox>
                <CameraController/>
            </Canvas>
        </>
    )
}