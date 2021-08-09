import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import CarCompanyListComponent from "./CarCompanyListComponent";
import { ReservationListComponent } from "../components/ReservationListComponent";
export class TabComponentCompany extends Component {
  render() {
    return (
      <>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              className="nav-link active "
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i class="fas fa-folder-plus TabHeart"></i>
              Ajouter /<i class="fas fa-list-ol "></i>List
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className="nav-link "
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#WishList"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i class="fas fa-heart TabHeart"></i>
              KPI
            </button>
          </li>
          <li class="nav-item" role="presentation">
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
              <i class="fas fa-handshake TabHeart"></i>
              Réservation
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <CarCompanyListComponent />
          </div>
          <div
            className="tab-pane fade  "
            id="WishList"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            kpi
          </div>
          <div
            className="tab-pane fade "
            id="reservation"
            role="tabpanel"
            aria-labelledby="reservation-tab"
          >
            <ReservationListComponent isCompany={true} />
          </div>
        </div>
      </>
    );
  }
}
export default TabComponentCompany;
