import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig';


const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPass, setRegisterPass] = useState("")

   const register = async () =>{
    setRegisterEmail("")
    setRegisterPass("")
    try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPass)
    console.log(user)
    }catch(error){
        console.log(error)
    }
   }


  return (
    <div>
        <input type="text"  value={registerEmail} onChange={(e)=> {setRegisterEmail(e.target.value)}}/>
        <input type="password" value={registerPass} onChange={(e) => {setRegisterPass(e.target.value)}} />
        <button type='submit' onClick={register}>register</button>

    </div>
  )
}

export default Register