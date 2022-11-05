import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Movie App</NavLink>
                <form className="d-flex gap-3" role="search">
                    <NavLink to="/login" className="btn btn-outline-light" type="submit">LogIn</NavLink> 
                    <NavLink to="/register" className="btn btn-outline-light" type="submit">Register</NavLink>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar