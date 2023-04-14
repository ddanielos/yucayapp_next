import { Suspense } from 'react'
import styles from '../../styles/Contact.module.css';
import Loading from './loading'
import Image from 'next/image'

import Contact from '../../components/Contact'

export default async function AboutPage(){
    return(
      <>
        <Suspense fallback={<Loading />}>
          <div>
            <>
              <Contact />
              {/* <div className={styles.container}>
                <form>
                  <section>
                    <input
                      type="text"
                      id="name"
                      placeholder="Nombre *"
                    />
                  </section>
                  <section>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email *"
                    />
                  </section>
                  <section>
                    <textarea
                      id="mensaje"
                      placeholder="Déjanos un mensaje *"
                    />
                  </section>
                  <button type="submit">Suscribir</button>
                </form>
              </div> */}
            </>
          </div>
        </Suspense>
      </>
    )
}