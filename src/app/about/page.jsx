import { Suspense } from 'react'
import styles from '../../styles/AboutUs.module.css';
import Loading from './loading'
import Image from 'next/image'

export default async function AboutPage(){
    return(
      <>
        <Suspense fallback={<Loading />}>
          <div className={styles.container}>
            <div className={styles.firstTitle}>
              <h2>La familia</h2>
              <Image className={styles.imageTitle} src="/static/img/ave.png" alt="" width={60} height={30}/>
            </div>
            <div className={styles.firstContent}>
              <Image className={styles.imageAbout} src="/static/img/img01.png" alt="" width={450} height={290}/>
              <p>La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú. Después de varios años trabajando juntos en la elaboración de cervezas a gran escala, decidieron emprender su propio proyecto: crear una cervecería artesanal en el hermoso Valle Sagrado de Cusco.</p>
            </div>
          </div>
          <div className={styles.secondContainer}>
            <div className={styles.secondTitle}>
              <Image className={styles.imageTitle} src="/static/img/destilador.png" alt="" width={64} height={54}/>
              <h2>Nuestra pasión</h2>
            </div>
            <div className={styles.secondContent}>
              <div className={styles.secondContentP}>
                <p>La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú. Después de varios años trabajando juntos en la elaboración de cervezas a gran escala, decidieron emprender su propio proyecto: crear una cervecería artesanal en el hermoso Valle Sagrado de Cusco.</p>
                <br/>
                <p>La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú.</p>
              </div>
              <Image className={styles.imageSecondAbout} src="/static/img/img03.jpg" alt="" width={338} height={535}/>
            </div>
          </div>
          <div className={styles.thirdContainer}>
            {/* <div className={styles.thirdTitle}>
              <Image className={styles.imageThirdTitle} src="/static/img/hop-black.png" alt="" width={60} height={60}/>
              <h2>Nuestra calidad</h2>
            </div> */}
            <div className={styles.thirdContent}>
              <Image className={styles.thirdImage} src="/static/img/img_04.jpg" alt="" width={390} height={267}/>
              <p>La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú.</p>
              <Image className={styles.thirdImage_2} src="/static/img/img-005.png" alt="" width={331} height={391}/>
            </div>
          </div>
        </Suspense>
      </>
    )
}
