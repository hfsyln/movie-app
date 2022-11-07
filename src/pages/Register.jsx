import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate()
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPass, setRegisterPass] = useState("")
    const [registerName, setRegisterName] = useState("")


    
   const register = async () =>{
    setRegisterEmail("")
    setRegisterPass("")
    setRegisterName("")
    try {
    if(registerName && registerPass && registerEmail){
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPass)
    console.log(user)
    alert("kayıt yapılmıştır")
    navigate("/")
    }else{
      alert("Boş alan bırakmayınız")
    }
    }catch(error){
        console.log(error)
    }
   }


  return (

    <div className="card d-flex flex-row mt-1 mx-auto bg-secondary bg-opacity-25  " style={{width: "80%", height:"91vh"}}>
   
        <div className='card mx-auto mt-5 bg-warning' style={{width:"30%", height:"50vh"}}>
          <div className="my-3 mx-5  d-flex flex-column">
              <label className="form-label">User Name</label>
              <input type="text"  value={registerName} onChange={(e)=> {setRegisterName(e.target.value)}}/>
          </div>
          <div className="my-3 mx-5  d-flex flex-column">
              <label className="form-label">Email address</label>
              <input type="text"  value={registerEmail} onChange={(e)=> {setRegisterEmail(e.target.value)}}/>
          </div>
          <div className="mx-5 my-2  d-flex flex-column">
              <label  className="form-label">Password</label>
              <input type="password" value={registerPass} onChange={(e) => {setRegisterPass(e.target.value)}} />
          </div>
            <button className='mt-4 mx-5 '  type='submit' onClick={register}>register</button>
        </div>
</div>
    
  )
}

export default Register