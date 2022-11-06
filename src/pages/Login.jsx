import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useState } from 'react'
import Enve from "../enve.jpg"

const Login = () => {

    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")

   const login= async () =>{
    try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass)
    console.log(user)
    }catch(error){
        console.log(error)
        alert("Geçerli bir giriş yapınız yada kayıt olunuz")
    }
   }
  return (
    <div className="card d-flex flex-row mt-1 mx-auto" style={{width: "80%", height:"91vh"}}>
        <img src={Enve} style={{width:"50%"}} />
        <div className='card mx-auto mt-5 bg-warning' style={{width:"30%", height:"50vh"}}>
          <div className="my-3 mx-5  d-flex flex-column">
              <label className="form-label">Email address</label>
              <input value={loginEmail} type="text" onChange={(e)=> {setLoginEmail(e.target.value)} }/>
          </div>
          <div className="mx-5 my-2  d-flex flex-column">
              <label  className="form-label">Password</label>
              <input value={loginPass} type="password" onChange={(e)=> {setLoginPass(e.target.value)}}/>
          </div>
          <button className='m-5' onClick={login}>login</button>
        </div>
    </div>


        
  )
}

export default Login