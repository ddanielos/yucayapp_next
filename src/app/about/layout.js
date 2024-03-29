import styles from '../../styles/BlogsLayout.module.css'
import Image from 'next/image'

export default function AboutLayout({ children }) {
  return (
    <div>
      <section className={styles.blogUpper}></section>
        <section className={styles.blogHeaderContainer}>
          <div className={styles.blogTitleContainer}>
              <Image src="/static/img/flor_s_fondo.png" alt="lupulo" width={150} height={84}/>
              <h1 className={styles.blogHeaderTitle}>Nuestra historia</h1>
          </div>
        </section>
      {children}
    </div>
  )
}