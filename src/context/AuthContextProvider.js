import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../firebaseConfig';


export const AuthContext= createContext()


const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false)

  useEffect (() => {
    userObserver(setCurrentUser);
    
  }, [])


  return ( 
    //çocuklara currenti gönder
    <AuthContextProvider value={{currentUser}}> 
        {children}
    </AuthContextProvider>
  )
}

export default AuthContextProvider
