import React, {useContext} from 'react'
import { UserContext } from './UserProvider';

const GrandChild = () => {
    const { username } = useContext(UserContext);
  return (
    <div>
      
        <h3>This is the GrandChild Component</h3>
        <h5 style={{color:"yellow"}}>Username: {username}</h5>
        
        
    </div>
  )
}

export default GrandChild
