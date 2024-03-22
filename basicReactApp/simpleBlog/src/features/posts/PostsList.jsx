import React from 'react'
import { useSelector } from "react-redux"
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'

function PostsList() {
    const posts = useSelector(selectAllPosts)
    
    const renderedPost = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={ post.userId} />
            </p>
        </article>
    ))
  return (
      <section>
          <h2>Posts</h2>
          {renderedPost}
    </section>
  )
}

export default PostsList