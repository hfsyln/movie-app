import React, { useContext } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import {signOut} from "firebase/auth"
import { auth} from '../firebaseConfig';
import Avatar from "../assets/avatar.png"
import  { AuthContext } from '../context/AuthContextProvider';



const Navbar = () => {

   const {currentUser} = useContext(AuthContext) //yakaladım burada aşağıda kulandım

const navigate = useNavigate();

const logOut = () => {
    signOut(auth);
    navigate("/")
  };

  return (
    <div>
         <nav className="navbar bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Movie App</NavLink>
                <form className="d-flex gap-3" role="search">

              {currentUser && 
                <div>
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
              <img src={currentUser?.photoURL || Avatar} className="rounded-full" alt="user"/>
              <NavLink to="/" className="btn btn-outline-light" type="submit" onClick={logOut}>logOut</NavLink>
              </div>
            }
                
                    <NavLink to="/register" className="btn btn-outline-light" type="submit">Register</NavLink>
                    <NavLink to="/login" className="btn btn-outline-light" type="submit">LogIn</NavLink> 
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar