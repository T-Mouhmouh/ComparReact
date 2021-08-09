import React, { Component, useState } from "react";
import "../Style/css/login.css";
import "../Style/css/reservation.css";
import "bootstrap/dist/css/bootstrap.css";

import ReservationService from "../services/ReservationService";
import RegistrationService from "../services/RegistrationService";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
var connectedJ = {
  id_visitor: 0,
  login: "",
  pass: "",
  fullName: "",
  phoneNumber: "",
  city: "",
  deleted: 1,
};
var ReservationData = {
  id_visitor: 0,
  id_car: 0,
  id_company: 0,
  date_reservation: "",
  visitorPhoneNumber: "",
  visitorImgName: "",
  visitorName: "",
  nbrjrs: 0,
};

var connected = localStorage.getItem("connectedVisitor");
connectedJ = JSON.parse(connected);
export class ResirvationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  reservation = async () => {
    var connected = localStorage.getItem("connectedVisitor");
    connectedJ = JSON.parse(connected);
    ReservationData.id_visitor = connectedJ.id_visitor;
    ReservationData.visitorImgName = connectedJ.imgName;
    ReservationData.visitorName = connectedJ.fullName;
    ReservationData.visitorPhoneNumber = connectedJ.phoneNumber;
    ReservationData.id_car = this.props.idcar;
    ReservationData.id_company = this.props.idcompany;

    var ss = await ReservationService.AddReservation(ReservationData);
    if (ss.success) {
      NotificationManager.success(
        "Merci " +
          connectedJ.fullName +
          ", Votre reservation a été Bien envoyé :)",
        "Success !"
      );
      document.getElementById("btnreserver").click();
      document.getElementById("btnreserver").disabled = true;
    }
    if (!ss.success) {
      NotificationManager.error("", "Error !");
    }
  };

  dateChange = (e) => {
    if (e.target.id == "datereservasion") {
      ReservationData.date_reservation = e.target.value;
    }
    if (e.target.id == "nbrjrs") {
      ReservationData.nbrjrs = parseFloat(e.target.value, 10);
    }
  };
  render() {
    return (
      <div className="reservationFather">
        <p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            id="btnreserver"
          >
            <i class="fas fa-handshake"></i>
            Reserver
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <div className="row infoFathr">
              <div class="col info">
                {connectedJ != null && connectedJ.fullName}
              </div>
              <div class="col info">
                {connectedJ != null && connectedJ.city}
              </div>
            </div>
            <div className="row">
              <div class="col datereservation">
                date reservation :
                <input
                  type="date"
                  id="datereservasion"
                  onChange={this.dateChange}
                />
              </div>
              <div class="col datereservation">
                Nombre des Jours :
                <input type="number" id="nbrjrs" onChange={this.dateChange} />
              </div>
            </div>
            <button
              type="button"
              class="btn btn-warning"
              onClick={this.reservation}
            >
              Reserver <i class="fas fa-thumbtack"></i>
            </button>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}
export default ResirvationComponent;
