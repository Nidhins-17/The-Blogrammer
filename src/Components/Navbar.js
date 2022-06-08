import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Bloggrammer</h1>
      <div className="links">

        <Link to="/" className="Home">Home</Link>

        <Link to="/create" className = "NewBlog">New Blog</Link>

      </div>
    </nav>
  )
}

export default Navbar;
