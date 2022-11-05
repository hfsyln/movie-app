import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">React Movie App</a>
                <form className="d-flex gap-3" role="search">
                    <button className="btn btn-outline-light" type="submit">LogIn</button> 
                    <button className="btn btn-outline-light" type="submit">Register</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar