"use client"
import Link from "next/link";
import { IoMenu,IoClose } from "react-icons/io5";
import NavLinks from "./navlinks/NavLinks";
import { useState } from "react";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const OpenCloseIcon = isOpen ? IoClose: IoMenu

  return (
    <div className={`flex lg:hidden flex-col ${isOpen ?'':'h-[90px]'} justify-between`}>
      <div className="fixed top-0 left-0 right-0 z-[9995] flex justify-between bg-blue-500 py-5 px-4">
        {/* logo bar  */}
        <div>
          <Link href="/" className="font-bold text-white">
            ShopMobFast
          </Link>
        </div>
        <div>
          <OpenCloseIcon 
          onClick={()=>setIsOpen(!isOpen)}
           size={28} color="white" />
        </div>
      </div>
      {/* navbar links */}
      <NavLinks isOpen={isOpen}/>
    </div>
  );
};

export default MobileNav;
