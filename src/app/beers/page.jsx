import { Suspense } from 'react'
import useFetchBeers from '../../hooks/useFetchBeers';
import styles from '../../styles/Beers.module.css';
import BeerItem from '../../components/BeerItem';
import Loading from './loading'

export default async function BeersPage(){
  const beers = await useFetchBeers()
  if(beers){
    let count=0;
    return(
      <div className={styles.listOfBeers}>
        <section className={styles.upper}></section>
            <h1 className={styles.title}></h1>
          <Suspense fallback={<Loading />}>
              {
                beers.data.length > 0 &&
                beers.data.map( item => {
                  count = count +1
                  return (
                    <BeerItem key={item.id} {...item} count={count} />
                  )
                })
              }
          </Suspense>
        </div>
    )
  }
}
