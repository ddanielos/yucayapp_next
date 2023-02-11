
import Link from 'next/link';
import Image from 'next/image';
import Subscribe from './Subscribe'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      {/* <div>
        <Image src="/static/img/arte-icon.png" width={135} height={472}/>
        <Image src="/static/img/sol-naciente.png" width={632} height={322}/>
        <Image src="/static/img/sana-icon.png" width={141} height={106}/>
      </div> */}
      <div className={styles.containerBlockOne}>
      <div className={styles.sectionBlockOne}>
        <h2>Contacto</h2>
        <p>Email: contacto@yucaybrew.com</p>
        <p>Wapp: +51 913165855</p>
        <p>Dirección: Plaza Manco II 107 Yucay Urubamba</p>
      </div>
      <div className={styles.sectionBlockTwo}>
        <h2>Suscripcion</h2>
        <p>Abre una Yucay y suscríbete:</p>
        <Subscribe />
      </div>
    </div>
    <div className={styles.containerBlockOne}>
      <div className={styles.sectionBlockThree}>
        <h2>Visitanos</h2>
        <p>Miércoles - Sábado: 12:00 - 22:00</p>
        <p>Domingo: 11:00 - 22:00</p>
      </div>
      <div className={styles.sectionBlockFour}>
        <p>Envíos y devoluciones</p>
        <p>Métodos de pago</p>
      </div>
    </div>
  </div>
  )
}

export default Footer;