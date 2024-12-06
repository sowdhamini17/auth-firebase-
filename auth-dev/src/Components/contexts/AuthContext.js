import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../../firebase';


const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider = ({childern}) => {
    function signup(email,password){
        return auth.createUsersWIthEmailAndPassword(email,password)
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStagechanged((user)=>{
        setCurrentUser(user)})
        
        return unsubscribe
    },[])
    const[currentUser,setCurrentUser]=useState()
    const value={
        currentUser,
        signup
        }
  return (
    <AuthContext.Provider value={value}>
      {childern}
    </AuthContext.Provider>
  )
}

export default AuthProvider
