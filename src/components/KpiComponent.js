import React, { Component, useState } from "react";
import "../Style/css/KpiComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class KpiComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kpi: "",
    };
  }
  componentDidMount = async () => {
    var connectedUser = localStorage.getItem("connectedUser");
    var connectedUserJ = JSON.parse(connectedUser);
    var tt = await CarService.GetKpi(connectedUserJ.id_user);
    if (tt != undefined) {
      this.setState({
        kpi: tt.data,
      });
    }
  };
  render() {
    let { kpi } = this.state;

    return (
      <div className="container">
        <div className="center">
          <div className="row">
            <div className=" col-sm-6 col-lg-4 col-xl-3">
              <div className="kpiCard">
                <span>Nbr/Voitures</span>
                <i className="fas fa-car  kpiicons"></i>
                <p className="kpip">
                  {kpi != undefined && kpi != null && kpi != "" && kpi[0].cars}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4  col-xl-3">
              <div className="kpiCard">
                <span>Réservation</span>
                <i className="fas fa-handshake kpiicons"></i>
                <p className="kpip">
                  {kpi != undefined &&
                    kpi != null &&
                    kpi != "" &&
                    kpi[0].reservation}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4  col-xl-3">
              <div className="kpiCard">
                <span>Positif</span>
                <i className="far fa-thumbs-up kpiicons"></i>
                <p className="kpip">
                  {kpi != undefined && kpi != null && kpi != "" && kpi[0].like}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4  col-xl-3">
              <div className="kpiCard">
                <span>Négative</span>
                <i className="far fa-thumbs-down kpiicons"></i>
                <p className="kpip">
                  {kpi != undefined &&
                    kpi != null &&
                    kpi != "" &&
                    kpi[0].dislike}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default KpiComponent;
