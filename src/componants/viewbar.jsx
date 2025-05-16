import Link from "next/link";
import Image from "next/image";

import styles from "@/componants/viewbar.module.css"

export default function Viewbar(){
    return(
        <>
        <div className = {styles.viewbar}>
            <div className = {styles.viewbarTop}>
                <Image className = {styles.logoImage} alt = "ksamapLogo" src = "/next.svg" href = "/about" width = "100" height = "30" />
                <div className = {styles.links}>View</div>

            </div>
            <div className = {styles.viewbarMid}>
                <Link href = "/about" className = {styles.links}>About</Link>
                <Link href = "/about/dev" className = {styles.links}>Dev</Link>
                <Link href = "/about/docs" className = {styles.links}>Docs</Link>
                <Link href = "/about/contact" className = {styles.links}>Contact</Link>
            </div>
            <div className = {styles.viewbarBottom}>
                <Link href = "/main/edit" className = {styles.links}>Edit</Link>
            </div>
        </div>
        </>
    );

}