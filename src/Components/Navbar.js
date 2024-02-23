

import React from "react";
import "../App.css"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./images/layer_1.png" alt="logo" /> 
      </div>
      <div className="links">
        <a href="home">Home</a>
        <a href="plans">Plans</a>
        <a href="help">Help</a>
      </div>
      <div className="login-btn">
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
