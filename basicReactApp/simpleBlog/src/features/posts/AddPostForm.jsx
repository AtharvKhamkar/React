import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAllUsers } from '../users/usersSlice'
import { addNewPost } from './postsSlice'

function AddPostForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector(selectAllUsers)
    
    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';


    const onSavePostClicked = () => {
        if (canSave) {
           try {
               setAddRequestStatus('pending')
               dispatch(addNewPost({ title, body: content, userId })).unwrap()
               
               setTitle('')
               setContent('')
               setUserId('')
               navigate('/')
           } catch (error) {
            console.error('failed to save the post',err)
           } finally {
               setAddRequestStatus('idle')
           }
       }
    }

    

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>{ user.name}</option>
    ))

  return (
      <section>
          <h2>Add a new Post</h2>
          <form >
              <label htmlFor="postTitle">Post Title:</label>
              <input
                  type="text"
                  id='postTitle'
                  name='postTitle'
                  value={title}
                  onChange={onTitleChange}
              />
              <label htmlFor='postAuthor'>Author:</label>
              <select
                  id='postAuthor'
                  value={userId}
                  onChange={onAuthorChange}>
                  <option value=""></option>
                  {userOptions}
                  </select>
              <label htmlFor="postContent">Content</label>
              <textarea
                  id='postContent'
                  name='postContent'
                  value={content}
                  onChange={onContentChange}
              />
              <button type="button"
                  onClick={onSavePostClicked}
                  disabled={!canSave}
              >Save Post</button>
          </form>
    </section>
  )
}

export default AddPostForm