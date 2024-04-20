import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className="flex gap-6 items-center min-h-[calc(100vh-64px)] px-20">
      {/* hero text content  */}
      <div className="flex-[2] space-y-4">
        <h2 className="text-4xl font-bold">
          Get Your <span className='text-blue-500'>Mobile</span> & <p> <span className='text-blue-500'>Accessories</span></p>
        </h2>
        <p className="w-3/5">
          Discover the latest in mobile devices and accessories. Elevate your
          tech experience with our curated selection of smartphones, cases,
          headphones, and more.
        </p>
        <button className={styles.button}>
          Grab Yours
          <svg fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {/* hero image  */}
      <div className="flex-1">
        
        <div className={styles.imgCard}>
          <div className={styles.imgCircle}></div>
          <div className={styles.imgCircle}></div>
          <div className={styles.imgCardInner}>
                <Image className='rounded-lg' src='/shopmobfast-banner.jpg' alt='shopmobfast banner' fill/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
