import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Style/img/car.jpg";
import { Link } from "react-router-dom";
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
                className="btn btn-warning dropdown-toggle usernamebtn"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {connectedJ?.login}
              </button>
              <ul
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item " href="ProfilePage">
                    <i class="fas fa-heart TabHeart"></i>
                    Mes favoris /<i class="fas fa-user-cog"></i>Profile
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      localStorage.removeItem("connectedVisitor");
                      localStorage.removeItem("connectedUser");
                      localStorage.removeItem("WishListCar");
                    }}
                    href="Login"
                  >
                    <i class="fas fa-sign-out-alt TabHeart"></i>
                    Log Out
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
