import styles from '../styles/BlogItem.module.css';
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

const URL = process.env.API_URL_COVER;

export default function BlogItem(props){
  const { title, content, cover, description, publishedAt, Slug } = props.attributes;
  const cover_img = `${URL}${cover}`
  return(
    <div className={styles.BlogItemContainer}>
      <Link href={`/blogs/${Slug}`}>
        <div className={styles.BlogItemWraper}>
          <div className={styles.BlogItemImgContainer}><img className={styles.BlogItemImg} src={cover_img}/></div>
          <div className={styles.BlogItemCard}>
            <h3 className={styles.BlogItemTitle}>
                {title}
            </h3>
            <p className={styles.BlogItemDescription} dangerouslySetInnerHTML={{__html: description}}></p>
            <div className={styles.BlogItemDate}>Publicado: {format(parseISO(publishedAt), 'dd-MM-yyyy')}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
