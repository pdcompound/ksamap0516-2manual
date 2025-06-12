import Image from "next/image"

function ArrowButton({xDegrees, leftx, topx}) {
    return(<Image src = "/simpleArrowWhite.png" alt = "Arrow" style = {{position: 'absolute', left: `${leftx}%`, top: `${topx}%`, transform:`rotate(${xDegrees}deg)`, zIndex: 30}} width={15} height={36} />);
}


export default function AllArrowButtons(){
    return (
        <>
            <ArrowButton xDegrees={0} leftx={97} topx={89} />
            <ArrowButton xDegrees={90} leftx={94} topx={94} />
            <ArrowButton xDegrees={180} leftx={91} topx={89} />
            <ArrowButton xDegrees={270} leftx={94} topx={84} />
        </>
    )
}




