import React,{ useContext } from 'react'
import { UserContext } from './UserProvider'
import Child from './Child';
import GrandChild from './GrandChild';

const Parent = () => {
    const { username } = useContext(UserContext);
  return (
    <div>
      
        <h1>This is the Parent Component</h1>
        <h5 style={{color:"red"}}>Username: {username}</h5>

        <Child />
        <hr />
        <GrandChild />
        
        
        
    </div>
  )
}

export default Parent
