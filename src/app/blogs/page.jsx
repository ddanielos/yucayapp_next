import { Suspense, suspense } from 'react'
import styles from '../../styles/Blogs.module.css';
import BlogItem from '../../components/BlogItem';
import useFetchBlogs from '../../hooks/useFetchBlogs';
import Loading from './loading'

export default async function BlogsPage(){
  const blogs = await useFetchBlogs()
  if (blogs){
    const reverseBlogs = blogs.data.reverse();
    return(
      <Suspense fallback={<Loading />}>
        <div className={styles.listOfBlogs}>
          {
            reverseBlogs.length > 0 &&
            reverseBlogs.map( item => {
              return (
                <BlogItem key={item.id} {...item} />
              )
            })
          }
        </div>
      </Suspense>
    )
  }
}