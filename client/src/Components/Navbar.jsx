import React from 'react'
import '../assets/styles/layout.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <i className="logo-name">NuvoShop</i>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><i to="/">Home</i></li>
              <li><i className="fa-solid fa-arrow-right-from-bracket" /></li>
              <i className="cart-icon" to="cart">
                <div className="amount-circle">10</div>
                <i className="fa fa-shopping-cart" />
              </i>
              <li><i>SignUp</i></li>
              <li><i>SignIn</i></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
