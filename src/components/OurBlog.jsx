import styles from '../styles/OurBlog.module.css';
import useFetchBlogs from '@/hooks/useFetchBlogs';
import BlogItem from './BlogItem';
import Image from 'next/image';

export default async function OurBlog(){
  const blogs = await useFetchBlogs()
  if(!blogs){
    <h2>Loading...</h2>
  }
  const data = blogs.data.reverse();
  return(
    <>
    <div className={styles.aboutTitle}>
      <Image className={styles.imageFlor} src='/static/img/flor-naranj.png' alt="lupulo" width={145} height={144} />
      <h2 className={styles.title}>De nuestro blog</h2>
      <Image className={styles.imageFlor} src='/static/img/flor-naranj.png' alt="lupulo" width={145} height={144}/>
    </div>
    <div className={styles.aboutContent}>
      <div className={styles.listOfBlogs}>
        {
          data.slice(0, 3).map( item => {
            return (
              <BlogItem key={item.id} {...item} />
            )
          })
        }
        </div>
    </div>
  </>
  )
}