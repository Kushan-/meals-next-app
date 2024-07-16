import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'

import MainHeaderBackground from '@/components/main-header/main-header';
import NavLink from "./nav-link";

import { usePathname } from "next/navigation";


const MainHeader = () => {

    return (
        <>
            {
                //    <MainHeaderBackground />
            }
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food on it" priority />
                    Next Level Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals' > Browse Meals </NavLink>
                        </li>
                    </ul>
                </nav>

                <NavLink href='/community'>Foodies Community</NavLink>



            </header>

        </>

    )
}

export default MainHeader