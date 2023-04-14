import styles from '../../styles/ContactLayout.module.css'
import Image from 'next/image'

export default function ContactLayout({ children }) {
  return (
    <div>
      <section className={styles.blogUpper}></section>
        <section className={styles.blogHeaderContainer}>
          <div className={styles.blogTitleContainer}>
              <Image src="/static/img/flor_s_fondo.png" alt="lupulo" width={150} height={84}/>
              <h1 className={styles.blogHeaderTitle}>Contacto</h1>
          </div>
        </section>
      {children}
    </div>
  )
}