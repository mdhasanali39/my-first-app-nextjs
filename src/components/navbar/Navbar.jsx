import Link from "next/link";
import NavLinks from "./navlinks/NavLinks";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[9999]">
      <div className="flex justify-between py-5 px-4 bg-blue-500">
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
