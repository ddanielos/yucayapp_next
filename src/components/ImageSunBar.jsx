import Image from 'next/image'
import styles from '../styles/ImageSunBar.module.css';

const ImageSunBar = () => {
  return (
    <div className={styles.banner}>
      <Image className={styles.art} src="/static/img/arte-icon.png" alt="arte" width={135} height={472} />
      <Image className={styles.sun} src="/static/img/sol-naciente.png" alt="sol naciente" width={632} height={322}/>
      <Image className={styles.sana} src="/static/img/sana-icon.png" alt="sanacion" width={129} height={472}/>
    </div>
  )
}

export default ImageSunBar;
