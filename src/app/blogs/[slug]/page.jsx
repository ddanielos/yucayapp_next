import useFetchBlog from "@/hooks/useFetchBlog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProcessedMdxContent } from '@/utils/mdxUtils';
import styles from '@/styles/Blog.module.css'

export default async function Blog({params}){
  const {slug} = params;
  const blog = await useFetchBlog(slug);
  if(blog){
    const mdxSource = await getProcessedMdxContent(blog.data.attributes.content);
    return (
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{`" ${blog.data.attributes.title} "`}</h1>
        <MDXRemote source={mdxSource} />
      </div>
    )
  }
}