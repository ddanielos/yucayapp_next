const fetchBlogs = () => {
  return fetch('http://44.212.214.88:1337/api/articles')
    .then(res => res.json())
}

export default async function PostsPage(){
  const blogs = await fetchBlogs()
  

  return(
    <section>
      {blogs.data.map(blog => (
        <article key={blog.id}>
          <h2>{blog.attributes.title}</h2>
          <p>{blog.attributes.description}</p>
        </article>
      ))}
    </section>
  )
}