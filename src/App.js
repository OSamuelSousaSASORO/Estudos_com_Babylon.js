import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function App() {
  
  return (
    <>
      <div>Teste</div>
      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[4, 3, 1]}></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
      </Canvas>


      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <shapeGeometry></shapeGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
      </Canvas>

      <div>asd</div>
      <Canvas>

        <perspectiveCamera position={[0,10,10]}></perspectiveCamera>
        <OrbitControls/>

        <ambientLight args={['#ffffff', 0.5]}></ambientLight>
        <mesh>
          <sphereGeometry args={[3, 10, 9]}></sphereGeometry>{/*Só passei os primeiros 3 argumentos, vou deixar os outros sem nada
          https://threejs.org/docs/?q=sph#api/en/geometries/SphereGeometry
          */}
          <meshStandardMaterial color='red'/>{/*Tem muito mais argumento que isso*/}
        </mesh>

        <mesh rotation={[1.7, 3.14, 0.0]} position={[0,-2,0]}> {/*X,Y,Z*/}
          <planeGeometry args={[21,8,1,1]}></planeGeometry>
          <meshStandardMaterial color='blue'></meshStandardMaterial>
        </mesh>
        {/*
          <ambientLight intensity={0.1} />
          AmbientLight( color : Integer, intensity : Float )
          color - (optional) Numeric value of the RGB component of the color. Default is 0xffffff.
          intensity - (optional) Numeric value of the light's strength/intensity. Default is 1.
        */}
        
      </Canvas>
      <div>asd</div>

      <Canvas>
        <perspectiveCamera position={[0,10,10]}></perspectiveCamera>

        <ambientLight args={['#ffffff', 0.5]}></ambientLight>
        <mesh>
          <sphereGeometry args={[3, 10, 9]}></sphereGeometry>
          <meshStandardMaterial color='red'/>
        </mesh>

        <mesh rotation={[1.7, 3.14, 0.0]} position={[0,-2,0]}>
          <planeGeometry args={[21,8,1,1]}></planeGeometry>
          <meshStandardMaterial color='blue'></meshStandardMaterial>
        </mesh>
      </Canvas>
    </> 
  );
}

export default App;
