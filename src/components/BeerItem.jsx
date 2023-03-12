import styles from '../styles/BeerItem.module.css';
import Image from 'next/image'

const url = process.env.API_URL_COVER;

export default function BeerItem(props){
  const { count } = props;
  const { name, cover_url, description, detail, pair, abv, bitterness } = props.attributes;
  const cover = `${url}${cover_url}`
  // let classContainer = "beerContainer"
  // count%2==0 && (classContainer = "beerContainer containerRigth")
  return (
    <div className={styles.beerItemContainer}>
      <div key={count} className={count%2 === 0 ? styles.beerContainerLeft : styles.beerContainerRigth }>
        <div className={styles.beerStyleLogo}>
          <img className={styles.styleLogo} src={cover} alt='' />
        </div>
        <div className={styles.beerItemDetails}>
          <h2 className={styles.beerTitle}>{name}</h2>
          <ul className={styles.beerParameters}>
            <li className={styles.beerParametersItem}>
              <span><Image className={styles.iconIbu} src="/static/img/lupulo.png" alt="bitterness" width={100} height={100}/></span>
              <span>{bitterness}</span>
            </li>
            <li className={styles.beerParametersItem}>
              <span><Image className={styles.iconOh} src="/static/img/alcohol.png" alt="ABV" width={100} height={100}/></span>
              <span>{abv}</span>
            </li>
          </ul>
          <h2 className={styles.beerDetails}>{detail}</h2>
          <div className={styles.beerDescription}>{description}</div>
          <h3 className={styles.beerPair}>maridala con:{`  ${pair}`}</h3>
        </div>
      </div>
    </div>
  )
}