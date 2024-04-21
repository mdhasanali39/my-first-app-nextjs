import Image from "next/image";
import styles from "./hero.module.css";
import HeroBtn from "./heroBtn/HeroBtn";
import HeroImage from "./heroImage/HeroImage";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 items-center min-h-[calc(100vh-64px)] px-20 pb-14">
      {/* hero text content  */}
      <div className="flex-[2] space-y-4">
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Get Your <span className='text-blue-500'>Mobile</span> & <p> <span className='text-blue-500'>Accessories</span></p>
        </h2>
        <p className="w-3/4 mx-auto lg:mx-0 text-center lg:text-left">
          Discover the latest in mobile devices and accessories. Elevate your
          tech experience with our curated selection of smartphones, cases,
          headphones, and more.
        </p>
        {/* call to action button  */}
        <div className="flex lg:block justify-center items-center">
        <HeroBtn/>
        </div>
      </div>
      {/* hero image  */}
      <div className="flex-1">
        <HeroImage/>
      </div>
    </div>
  );
};

export default Hero;
