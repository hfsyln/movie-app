import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useState } from 'react'

const Login = () => {

    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")

   const login= async () =>{
    try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass)
    console.log(user)
    }catch(error){
        console.log(error)
    }
   }
  return (
    <div>
        <input value={loginEmail} type="text" onChange={(e)=> {setLoginEmail(e.target.value)} }/>
        <input value={loginPass} type="password" onChange={(e)=> {setLoginPass(e.target.value)}}/>
        <button onClick={login}>login</button>
    </div>
  )
}

export default Login