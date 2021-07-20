import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Style/img/car.jpg";
export class HeaderComponent extends Component {
  render() {
    var connected = localStorage.getItem("connectedVisitor");
    var connectedJ = JSON.parse(connected);
    /*  var WishListCar = localStorage.getItem("WishListCar");
    var WishListCarJ = JSON.parse(WishListCar); */
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
          {connectedJ == null && (
            <button type="button" class="loginbtn btn btn-success">
              Login
            </button>
          )}
          {connectedJ != null && (
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {connectedJ?.login}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item active" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default HeaderComponent;
