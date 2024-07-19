import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="link">
             <Link to="/">Shop</Link>
             <Link to="/cart " >CART</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
