import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="nav-header">
        <div className="nav-left-control">
          <Link to="/">
            <img className="logo" src={require('../images/Logo.svg')} alt="logo" />
          </Link>
        </div>
        <div className="nav-right-control">
          <Link to="/shopping-cart">
            <i className="material-icons-outlined shopping-cart">shopping_cart</i>
          </Link>
        </div>
      </nav>
    )
}

export default Navbar;