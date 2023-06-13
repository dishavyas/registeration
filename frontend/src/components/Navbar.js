import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

<nav className="navbar bg-primary w-5">
  <div className="container-fluid w-5 d-flex align-items-center  justify-content-between">
    < Link to={'/'}><span className="navbar-brand mb-0 h1 text-dark fs-1 fw-bold">Navbar</span></Link>
    <Link to={'/login'} ><button className='btn-warning btn btn-lg float-end rounded-5 text-dark fw-bold'>login</button></Link>
  </div>
</nav>
    </div>
  )
}

export default Navbar