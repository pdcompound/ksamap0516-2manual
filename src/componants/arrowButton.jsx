'use client';


import Image from "next/image"

export default function ArrowButton({xDegrees, leftx, topx, onImageClick}) {

    const onClick1 = () => {
        if(xDegrees === 0){
            onImageClick('right');
        }else if(xDegrees === 90){
            onImageClick('down');
        }else if(xDegrees === 180){
            onImageClick('left');
        }else if(xDegrees === 270){
            onImageClick('up');
        }
    }


    return(
        <div
            onClick={onClick1}
            style={{
                position: 'absolute',
                left: `${leftx}%`,
                top: `${topx}%`,
                transform: `rotate(${xDegrees}deg)`,
                zIndex: 30,
                pointerEvents: 'auto',
                cursor: 'pointer',
                width: '15px', // match Image width
                height: '36px', // match Image height
                userSelect: 'none'
            }}
            draggable={false}
        >
            <Image
                src="/simpleArrowWhite.png"
                alt="Arrow"
                width={15}
                height={36}
                style={{userSelect: 'none'}}
                draggable={false}
            />
        </div>



    );
}

