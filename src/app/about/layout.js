import Navbar from '@/componants/navbar.jsx';
import '@/app/global.css';
import Footbar from "@/componants/footbar";


export default function({children}) {
    return(
        <>
            <Navbar></Navbar>
            <div className='aboutContainer'>
                {children}
            </div>
            <Footbar></Footbar>
        </>
    );
}