import React, { useContext } from 'react'
import { UserContext } from '../UserProvider';

const Profile = () => {
    const { username } = useContext(UserContext);
  return (
    <div>
        <h1>User Profile</h1>
        <h5>Username: {username}</h5>
        <p>This is the user profile page where you can view your details.</p>
        <hr />
        
      
    </div>
  )
}

export default Profile
