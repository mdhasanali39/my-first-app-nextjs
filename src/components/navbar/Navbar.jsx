import Link from "next/link";
import NavLinks from "./navlinks/NavLinks";
import {IoMenu} from 'react-icons/io5';
import MobileNav from "./mobileNav";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[9999]">
    {/* mobile  */}
    <MobileNav/>
    {/* desktop  */}
      <div className="hidden lg:flex justify-between py-5 px-4 bg-blue-500">
        {/* logo bar  */}
        <div>
          <Link href='/' className="font-bold text-white">ShopMobFast</Link>
        </div>
        {/* navbar links */}
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
