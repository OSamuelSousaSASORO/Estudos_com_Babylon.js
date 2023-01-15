import React, { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function EX2(){

    function Box(){
        const mybox = useRef()

        useFrame(({ clock }) => {
            mybox.current.rotation.x = clock.getElapsedTime()
            mybox.current.rotation.y = clock.getElapsedTime()
        })

        return (
            <mesh ref={mybox} position={[0,0,-2]}>
                <boxGeometry args={[5,5,5,4,4,4]}></boxGeometry>
                <meshBasicMaterial color={'red'}></meshBasicMaterial>
            </mesh>
        )
    }

    return(
        <>
            <h1>Primeiras formas</h1>
            <p>Caixa</p>
            <Canvas style={{'height': '200px'}}>
                <ambientLight intensity={0.1}></ambientLight>
                <directionalLight position={[0, 0, -2]} color="green" />
                <Box></Box>
            </Canvas>
        </>
    )
}