import Link from "next/link";
import Image from "next/image";

import styles from "@/componants/footbar.module.css"

export default function Footbar(){
    return(
        <>
        <div className = {styles.footbar}>
            <div className = {styles.footbar1}>
                <Image className = {styles.logoImage} alt = "ksamapLogo" src = "/next.svg" href = "/" width = "200" height = "30" />
                <Link href = "/" className = {styles.ksamap}>
                    2025 ksamap.
                </Link>
            </div>
            <div className = {styles.footbar2}>
                <Link href = "/main/view" className = {styles.links}>About</Link>
                <Link href = "/main/edit" className = {styles.links}>Dev</Link>
                <Link href = "/main/edit" className = {styles.links}>Docs</Link>
                <Link href = "/main/edit" className = {styles.links}>Contact</Link>

            </div>
            <div className = {styles.footbar3}>
                <Link href = "/main/view" className = {styles.links}>View</Link>
                <Link href = "/main/edit" className = {styles.links}>Edit</Link>
            </div>
            <div className = {styles.footbar4}>

            </div>
            <div className = {styles.footbar5}>

            </div>
        </div>

        </>
    );

}