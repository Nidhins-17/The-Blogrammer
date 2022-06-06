import React from 'react'


function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Bloggrammer</h1>
      <div className="links">

        <a href="/" style = {{
          color : "black",
          backgroundColor : "#f1356d",
          borderRadius : '8px'
        }}>Home</a>

        <a href="/create" style={{
          color : "black",
          backgroundColor : "#f1356d",
          borderRadius : '8px'
        }}>New Blog</a>

      </div>
    </nav>
  )
}

export default Navbar;
