'use client'

import classes from "./nav-link.module.css"

import { usePathname } from "next/navigation"
import Link from "next/link"


const NavLink = ({ href, children }) => {
    const activePath = usePathname()
    return (

        <Link href={href}
            className={activePath.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
        >
            {children}
        </Link>

    )

}

export default NavLink