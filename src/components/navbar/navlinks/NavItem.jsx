"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({label,path}) => {

    const pathname = usePathname()

    return (
        <div>
            <Link href={path} className={` font-semibold hover:text-white/70 ${pathname === path ? 'text-white/70':'text-white'}`}>{label}</Link>
        </div>
    );
};

export default NavItem;