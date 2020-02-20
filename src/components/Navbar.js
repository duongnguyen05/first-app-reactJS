import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav>
        <div className="nav-left-controls">
          <Link to="/">
            <img alt="logo" />
          </Link>
        </div>
        <div className="nav-right-control">
          <Link to="/shopping-cart">
            <i>Shopping Cart</i>
          </Link>
        </div>
      </nav>
    )
}

export default Navbar;