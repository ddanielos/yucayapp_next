import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return(
    <>
      <div className={styles.aboutTitle}>
        <Image src="/static/img/flor-naranj.png" alt="flor" width={145} height={144}/>
        <h2 className={styles.title}>Quienes Somos</h2>
        <Image src="/static/img/flor-naranj.png" alt="flor" width={145} height={144}/>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutUs}>
          <section className={styles.parrafo}>
            <h2>Quienes Somos</h2>
            <p>Somos una cervecería artesanal desde 2014 localizada en el corazón del Valle Sagrado de los inKas, en el pueblo de Yucay.</p>
            <p>Creemos que las cosas buenas de la vida requieren valentia para lograr la verdadera independencia haciendo algo que se ama.</p>
            <p>Somos dueños y empleados. Revisamos cada etapa del proceso cervecero con ingenio.</p>
          </section>
        </div>
        <div className={styles.what}>
          <section className={styles.parrafo}>
            <h2>Que queremos</h2>
            <p>Queremos inspirar.</p>
            <p>Queremos generar una comunidad en torno a lo que más felices nos hace. Nuestra tierra, nuestra cultura y el proceso cervecero.</p>
            <p>Esperamos poder compartir cultura. Enseñarles el lugar donde vivimos y trabajamos. Las riquezas de la tierra y los rituales familiares que rodean la elaboración de la cerveza Yucay.</p>
          </section>
        </div>
      </div>
      <div className={styles.sectionLogo}>
        <Image className={styles.logo} src="/static/img/logo-alt.png" alt="logo alt" width={162} height={178}/>
      </div>
    </>
  )
}

export default About;