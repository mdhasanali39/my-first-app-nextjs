import Link from "next/link";

const NavItem = ({label,path}) => {
    return (
        <div>
            <Link href={path} className="text-white font-semibold hover:text-white/70">{label}</Link>
        </div>
    );
};

export default NavItem;