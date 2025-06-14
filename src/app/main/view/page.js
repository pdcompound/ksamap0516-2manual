'use client'


import {useRef} from 'react';
import ThreeView from '@/componants/threeView';
import ArrowButton from '@/componants/arrowButton';

export default function Home() {

    const cameraRef1 = useRef(null); //acts like a pointer
    const controlsRef1 = useRef(null);

    const targetMovementSize = 1;

    const moveCamera = (direction) => {
        if(direction === 'right'){
            cameraRef1.current.position.x += targetMovementSize;
            controlsRef1.current.target.x += targetMovementSize;
        }else if(direction === 'down'){
            cameraRef1.current.position.y -= targetMovementSize;
            controlsRef1.current.target.y -= targetMovementSize;
        }else if(direction === 'left'){
            cameraRef1.current.position.x -= targetMovementSize;
            controlsRef1.current.target.x -= targetMovementSize;
        }else if(direction === 'up'){
            cameraRef1.current.position.y += targetMovementSize;
            controlsRef1.current.target.y += targetMovementSize;
        }

        controlsRef1.current.update();

    }




    return (


        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            pointerEvents: 'none',
            userSelect: 'none'
        }}>
            <div style={{pointerEvents: 'none', zIndex: 10, userSelect: 'none'}}>
                <ThreeView cameraRef = {cameraRef1} controlsRef = {controlsRef1} />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 10,         // must be higher than ThreeView's canvas
                    pointerEvents: 'none', //make some events get in the arrow, others at the canvas
                    userSelect: 'none'
                }}
                draggable={false}
            >


                    <ArrowButton xDegrees={0} leftx={97} topx={89} onImageClick = {moveCamera} />
                    <ArrowButton xDegrees={90} leftx={94} topx={94} onImageClick = {moveCamera} />
                    <ArrowButton xDegrees={180} leftx={91} topx={89} onImageClick = {moveCamera} />
                    <ArrowButton xDegrees={270} leftx={94} topx={84} onImageClick = {moveCamera} />


            </div>

        </div>
    );
}
