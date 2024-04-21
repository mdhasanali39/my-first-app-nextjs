import Image from "next/image";
import styles from "./heroimage.module.css";
const HeroImage = () => {
  return (
    <div className={`${styles.container} `}>
      <div className={styles.card} id={styles.c1}>
      <Image className='rounded-lg' src='/mobile-phone.jpg' alt='airpods image' fill/>

      </div>
      <div className={styles.card} id={styles.c2}>
      <Image className='rounded-lg' src='/headphone.jpg' alt='airpods image' fill/>

      </div>
      <div className={styles.card} id={styles.c3}>

      <Image className='rounded-lg' src='/airpods.jpg' alt='airpods image' fill/>
      </div>
      <div className={styles.card} id={styles.c4}>
      <Image className='rounded-lg' src='/mobile-phone.jpg' alt='airpods image' fill/>
      </div>
    </div>
  );
};

export default HeroImage;
