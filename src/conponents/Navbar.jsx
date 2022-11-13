import React, { useContext } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import { logOut} from '../firebaseConfig';
import { AuthContext } from "../context/AuthContextProvider";
import avatar from "../assets/avatar.png"



const Navbar = () => {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
const navigate = useNavigate();



  return (
    <div>
         <nav className="navbar bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Movie App</NavLink>
                <form className="d-flex gap-3" role="search">


                {currentUser ? (
                  <>
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
              <NavLink to="/" className="btn btn-outline-light" type="submit" onClick={() => logOut()}>logOut</NavLink>
              <img src={currentUser?.photoURL || avatar} style={{ height: 25, width: 25 }}/>
              
              </> ) : 
                  <>
                    <NavLink to="/login" className="btn btn-outline-light" type="submit">LogIn</NavLink> 
                    <NavLink to="/register" className="btn btn-outline-light" type="submit">Register</NavLink>
                    
                    </>} </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar