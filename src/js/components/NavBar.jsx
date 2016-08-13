import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <img src="./images/bloc_jams_logo.png" alt="Bloc Jams Logo" className="logo" />
      </Link>

      <div className="links-container">
        <Link to="/collection" className="navbar-link">collection</Link>
      </div>

    </nav>
  )
}

export default NavBar
