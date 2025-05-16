import Link from "next/link";
import Image from "next/image";

import styles from "@/componants/navbar.module.css"

export default function Navbar(){
    return(
        <>
        <div className = {styles.navbar}>
            <div className = {styles.navbarLeft}>
                <Image className = {styles.logoImage} alt = "ksamapLogo" src = "/next.svg" href = "/" width = "200" height = "30" />
                <Link href = "/main/view" className = {styles.links}>View</Link>
                <Link href = "/main/edit" className = {styles.links}>Edit</Link>


            </div>
            <div className = {styles.navbarMid}>
                <Link href = "/about" className = {styles.links}>About</Link>
                <Link href = "/about/dev" className = {styles.links}>Dev</Link>
                <Link href = "/about/docs" className = {styles.links}>Docs</Link>
                <Link href = "/about/contact" className = {styles.links}>Contact</Link>
            </div>
            <div className = {styles.navbarRight}>
                <Link href = "/main/edit" className = {styles.links}>Log in</Link>
                <Link href = "/main/edit" className = {styles.links}>Sign up</Link>
            </div>
        </div>
        <div className = {styles.navbarSpacer}></div>
        </>
    );

}