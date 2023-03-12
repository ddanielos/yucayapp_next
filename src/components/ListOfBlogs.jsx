import styles from '../styles/ListOfBlogs.module.css'
import BlogItem from './BlogItem'
import useFetchBlogs from '../hooks/useFetchBlogs';

export default async function ListOfBlogs(){
  const blogs = await useFetchBlogs()
  if (blogs){
    const reverseBlogs = blogs.data.reverse();
    return(
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
    )
  }

}