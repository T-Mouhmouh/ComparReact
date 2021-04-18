import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Style/img/car.jpg";
export class HeaderComponent extends Component {
  render() {
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
  }
}
export default HeaderComponent;
