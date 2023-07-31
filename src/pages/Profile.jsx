import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  let { userId } = useParams();

  console.log(userId)
  
  return (
    <h1>Profile for user {userId}</h1>
  )
}

export default Profile