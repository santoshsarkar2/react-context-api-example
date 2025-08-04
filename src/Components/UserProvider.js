import React, { createContext, useState } from 'react';

// Create a UserContext
export const UserContext = createContext(); 

const UserProvider  = ({ children }) => {
  const [username, setUsername] = useState("Sarkar");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider 
