import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'

const Header = () => {
   return(
      <div className={styles.containerHeader}>
         <nav>
            <ul>
               <Link href="/beers">
                  <li>Nuestras Cervezas</li>
               </Link>
               <Link href="/about">
                  <li>Sobre Nosotros</li>
               </Link>
            </ul>
            <Link href="/">
               <div className={styles.menuCenter}>
                  <Image src="/static/img/logo.png" priority="high" alt="logo yucay brewery" width={141} height={106}/>
               </div>
            </Link>
            <ul>
               <Link href="/blogs">
                  <li>
                     Blog
                  </li>
               </Link>
               <Link href="/contacto"><li>Contacto</li></Link>
               {/* <Link href="#"> */}
                  <li className={styles.menuDisabled}>
                        Login
                     <Image src="/static/img/user.png" alt="" width={31} height={29}/>
                  </li>
               {/* </Link> */}
               {/* <Link href="#"> */}
                  <li className={`${styles.li} ${styles.menuDisabled}`}><Image src="/static/img/sale.png" alt="" width={31} height={35}/></li>
               {/* </Link> */}
            </ul>
         </nav>
      </div>
   )
}

export default Header;