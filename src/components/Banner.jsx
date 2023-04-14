import Image from 'next/image';
import styles from '../styles/Banner.module.css'

import Link from 'next/link';

const Banner = () => {
   return(
      <>
         <div className={styles.banner}>
            <div className={styles.bannerContainer}>
               <div className={styles.bannerLeft}>
                  <Image src="/static/img/proceso.png" alt="proceso" width={97} height={97}/>
                  <Image className={styles.blandas} src="/static/img/blandas.png" alt="Tierras blandas" width={495} height={168}/>
                  <Image src="/static/img/ave.png" alt="" width={100} height={39}/>
               </div>
               <div className={styles.bannerCenter}>
                  <div className={styles.bannerCenterContainer}>
                     <p className={styles.frases}>{`ch'alla!`}</p>
                     {/* <button className={styles.todas}>Todas las cervezas</button> */}
                     <Link href="/beers">
                        <p className={styles.todas}>Todas las cervezas</p>
                     </Link>
                     <p className={styles.frases}>Apoya negocios locales</p>
                  </div>
               </div>
               <div className={styles.bannerRight}>
                  <Image src="/static/img/proceso.png" alt="proceso" width={97} height={97}/>
                  <Image className={styles.blandas} src="/static/img/blandas.png" alt="Tierras blandas" width={495} height={168}/>
                  <Image className={styles.ave} src="/static/img/ave.png" alt="" width={100} height={39}/>
               </div>
            </div>
         </div>
      </>
   )
}

export default Banner;