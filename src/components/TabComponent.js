import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import { RegistrationComponent } from "../components/RegistrationComponent";
import { WishListComponent } from "../components/WishListComponent";
import { ReservationListComponent } from "../components/ReservationListComponent";
import logo from "../Style/img/car.jpg";

export class TabComponent extends Component {
  render() {
    return (
      <>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
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
              <i className="fas fa-user-cog TabHeart"></i>
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
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
              <i className="fas fa-heart TabHeart"></i>
              WishList
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link "
              id="reservation-tab"
              data-bs-toggle="tab"
              data-bs-target="#reservation"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i className="fas fa-handshake TabHeart"></i>
              Réservation
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
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
          <div
            className="tab-pane fade "
            id="reservation"
            role="tabpanel"
            aria-labelledby="reservation-tab"
          >
            <ReservationListComponent isCompany={false} />
          </div>
        </div>
      </>
    );
  }
}
export default TabComponent;
