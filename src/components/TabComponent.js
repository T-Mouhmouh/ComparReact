import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import { RegistrationComponent } from "../components/RegistrationComponent";
import { WishListComponent } from "../components/WishListComponent";
import logo from "../Style/img/car.jpg";

export class TabComponent extends Component {
  render() {
    return (
      <>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              className="nav-link "
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i class="fas fa-user-cog TabHeart"></i>
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#WishList"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i class="fas fa-heart TabHeart"></i>
              WishList
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            className="tab-pane fade "
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <RegistrationComponent IsUpdatePage={true} />
          </div>
          <div
            className="tab-pane fade  show active"
            id="WishList"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <WishListComponent />
          </div>
        </div>
      </>
    );
  }
}
export default TabComponent;
