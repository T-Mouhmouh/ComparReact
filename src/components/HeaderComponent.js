import React, { useState } from "react";
import "../Style/css/Header.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Style/img/car.jpg";
export const HeaderComponent = () => {
  return (
    <div class="Navbar  sticky-top">
      <div className="leftSide">
        <img className="menuimg" src={logo} />
        <div className="Links">
          <a>Home</a>
          <a>Client</a>
          <a>Contact Us</a>
        </div>
        <button>open</button>
      </div>

      <div className="rightSide">
        <button type="button" class="loginbtn btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};
