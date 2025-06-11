'use client';  //makes the code run on the client

import {useEffect, useRef} from 'react'
import * as THREE from 'three';

export default function ThreeView(){
    const containerRef = useRef(null);

    useEffect(()=>{  //run side effects
        const container = containerRef.current;
        const width = container.clientWidth*0.9;
        const height = container.clientHeight;

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        camera.position.z = 2;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setPixelRatio(devicePixelRatio);
        container.appendChild(renderer.domElement);

        const geometry1 = new THREE.BoxGeometry();
        const material1  = new THREE.MeshNormalMaterial();
        const cube1 = new THREE.Mesh(geometry1, material1);



        scene.add(cube1);



        //scene.background = new THREE.Color(0x000000);

        const animate = () => {
            cube1.rotation.x += 0.005;
            cube1.rotation.y += 0.003;
            

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    },[])

    return(
        <div ref = {containerRef} style={{height:'100vh', width:'100vw', border: '0px solid red'}}/>
    )
}