import React, {useContext} from 'react'
import { UserContext } from './UserProvider'

const Child = () => {
  const { username } = useContext(UserContext);
  return (
    <div>
        <h2>This is the Child Component</h2>
        <h5 style={{color:"blue"}}>Username: {username}</h5>
        
        
      
    </div>
  )
}

export default Child
