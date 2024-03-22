import React from 'react'
import { useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"

function PostAuthor({ userId }) {
    console.log(userId)
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)
    console.log(author.name)

    return <span>by { author ? author.name : 'unknown author'}</span>
}

export default PostAuthor