'use client';  //makes the code run on the client

import {useEffect, useRef} from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export default function ThreeView({cameraRef, controlsRef}) {

    const containerRef = useRef(null);




    useEffect(()=>{  //run side effects
        const container = containerRef.current;
        const width = container.clientWidth*0.9;
        const height = container.clientHeight;

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        camera.position.z = 4;






        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setPixelRatio(devicePixelRatio);
        container.appendChild(renderer.domElement);


        //orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;


        //Ref
        if(cameraRef){
            cameraRef.current = camera;
        }
        if(controlsRef){
            controlsRef.current = controls;
        }



        const boxGeometry1 = new THREE.BoxGeometry();
        const icoGeometry1 = new THREE.IcosahedronGeometry(1,1);

        const material1  = new THREE.MeshNormalMaterial();
        const materialPlane = new THREE.MeshBasicMaterial({color: 0xdddddd, side: THREE.DoubleSide});

        const cube1 = new THREE.Mesh(boxGeometry1, material1);
        const cube2 = new THREE.Mesh(boxGeometry1, material1);
        const cube3 = new THREE.Mesh(boxGeometry1, material1);
        const cube4 = new THREE.Mesh(boxGeometry1, material1);
        const cube5 = new THREE.Mesh(boxGeometry1, material1);

        const planeGeometry1 = new THREE.PlaneGeometry(50,50,100,100);
        const plane1 = new THREE.Mesh(planeGeometry1, materialPlane);

        const ico1 = new THREE.Mesh(icoGeometry1, materialPlane);

        cube2.position.x -=1;
        cube3.position.y -=1;
        cube4.position.z +=1;
        cube5.position.y -=1;
        cube5.position.x -=1;
        plane1.position.z -= 0.5;




        scene.add(cube1, cube2, cube3, cube4, cube5, plane1);




        const animate = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    },[])

    return(

            <div ref = {containerRef}
                 style={{height:'100vh', width:'100vw',
                     border: '0px solid red', zIndex: 20,
                     pointerEvents: 'auto'}}/>

    )
}