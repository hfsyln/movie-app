import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import {signOut} from "firebase/auth"
import { auth} from '../firebaseConfig';



const Navbar = () => {


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
                    <NavLink to="/login" className="btn btn-outline-light" type="submit">LogIn</NavLink> 
                    <NavLink to="/register" className="btn btn-outline-light" type="submit">Register</NavLink>
                    <NavLink to="/" className="btn btn-outline-light" type="submit" onClick={logOut}>logOut</NavLink>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar