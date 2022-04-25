import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Style/img/KriliCar.PNG";
import { Link } from "react-router-dom";
var PATHVisitor = "https://localhost:44330/PhotosVisitor/";
var PATHUser = "https://localhost:44330/PhotosUsers/";
export class HeaderComponent extends Component {
  render() {
    var connected = localStorage.getItem("connectedVisitor");
    var connectedJ = JSON.parse(connected);

    var connectedUser = localStorage.getItem("connectedUser");
    var connectedUserJ = JSON.parse(connectedUser);
    var btnclass;
    var loginEtat = false;
    var loginbtn = false;
    if (connectedUserJ === null || connectedJ === null) {
      loginEtat = true;
    }
    if (connectedJ != null) {
      btnclass = "btn-warning";
      loginbtn = true;
    }
    if (connectedUserJ != null) {
      btnclass = "btn-primary";
      loginbtn = true;
    }
    /*  var WishListCar = localStorage.getItem("WishListCar");
    var WishListCarJ = JSON.parse(WishListCar); */
    return (
      <div className="Navbar  sticky-top">
        <div className="leftSide">
          <a href="/Search">
            <img className="menuimg" src={logo} />
          </a>
          <div className="Links"></div>
          <button>open</button>
        </div>
        <div className="rightSide">
          {!loginEtat && (
            <button type="button" className="loginbtn btn btn-success">
              Login
            </button>
          )}
          {loginbtn && (
            <div className="dropdown">
              <button
                className={`btn dropdown-toggle usernamebtn ${btnclass}`}
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {connectedJ != null && connectedJ?.login}
                {connectedUserJ != null && connectedUserJ?.fullName}
              </button>

              <ul
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  {connectedJ != null && (
                    <a
                      className="dropdown-item "
                      href="http://localhost:3000/ProfilePage"
                    >
                      <i className="fas fa-heart TabHeart"></i>
                      Mes favoris /<i className="fas fa-user-cog"></i>Profile
                    </a>
                  )}
                  {connectedUserJ != null && (
                    <a
                      className="dropdown-item "
                      href="http://localhost:3000/ProfileCompanyPage"
                    >
                      <i className="fas fa-list-ol TabHeart "></i>
                      Voitures /<i className="fas fa-user-cog"></i>Profile
                    </a>
                  )}
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
                    <i className="fas fa-sign-out-alt TabHeart"></i>
                    Log Out
                  </a>
                </li>
              </ul>
              {connectedJ != null && (
                <img
                  src={PATHVisitor + connectedJ.imgName}
                  className="profileImage"
                />
              )}
              {connectedUserJ != null && (
                <img
                  src={PATHUser + connectedUserJ.imgName}
                  className="profileImage"
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default HeaderComponent;
