'use client'
import Image from 'next/image';
import styles from '../styles/Bar.module.css';

const Bar = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, ¿cómo estás? deseo hacer un pedido de cervezas Yucay Brewey,');
    const phoneNumber = '+51913165855'; // Reemplaza esto con el número de teléfono de destino
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
  return(
    <>
      <div className={styles.Container}>
        <div className={styles.itemCard}>
          <p className={styles.title}>Delivery</p>
          <p onClick={handleWhatsAppClick} className={styles.subTitle}>Pide Ahora</p>
        </div>
        <div className={styles.spaceBetween}></div>
        <div className={styles.itemCard}>
          <p className={styles.title}>Nuestro Bar</p>
          <p className={styles.subTitle}>Visita</p>
        </div>
      </div>
      <div className={styles.bannerHashtag}>
        <div className={styles.one}>
          <Image className={styles.mascara} src="/static/img/mascara.png" alt="mascara" width={500} height={500}/>
        </div>
        <div className={styles.two}>
          <Image className={styles.esloganImg} src="/static/img/eslogan.png" alt="estar vivo" width={500} height={500}/>
        </div>
        <div className={styles.three}>
          <h2>#yucaybrewery</h2>
        </div>
        <div className={styles.four}>
          <Image className={styles.esloganImg} src="/static/img/eslogan.png" alt="estar vivo" width={500} height={500}/>
        </div>
        <div className={styles.five}>
          <Image className={styles.mascaraEspejo} src="/static/img/mascara.png" alt="mascara" width={500} height={500}/>
        </div>
      </div>
    </>
  )
}

export default Bar;
