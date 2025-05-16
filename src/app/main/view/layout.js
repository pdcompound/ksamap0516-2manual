import '@/app/global.css';
import Viewbar from "@/componants/viewbar";

export default function({children}) {
    return(
        <>
            <Viewbar></Viewbar>
            <div className='viewContainer'>
                {children}
            </div>
        </>
    );
}