import Image from 'next/image';
import styles from '../styles/Hero.module.css'

const Hero = () => {
   return(
      <>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
              <Image className={styles.heroTitle} src="/static/img/hero.png" priority="high" alt="cervecería artesanal" width={334} height={272}/>
              <h2 className={styles.heroSlogan}>De nuestra tierra a tu casa</h2>
              <div className={styles.hero__border}></div>
          </div>
        </div>
      </>
   )
}
export default Hero;