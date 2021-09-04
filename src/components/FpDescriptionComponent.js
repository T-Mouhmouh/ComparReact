import React, { Component, useState } from "react";
import "../Style/css/FpDescriptionComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class FpDescriptionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marque: "",
      model: "",
      city: "",
    };
  }

  render() {
    return (
      <div class="FpDescriptionComponentParent    container">
        <div class="FpDescriptionComponentCont  center">
          <div className="row">
            <div class="Section SectionPrice col-lg-4  col-sm-12 ">
              <i class="fas fa-money-bill-wave"></i>
              <span className="FpPrice">{this.props.car?.price} DH</span>
            </div>
            <div class="Section SectionPrice col-lg-4  col-sm-12 ">
              <i class="far fa-eye"></i>
              <span className="FpPrice">{this.props.car?.mark}</span>
            </div>
            <div class="Section SectionPrice col-lg-4  col-sm-12 ">
              <i class="fab fa-medium"></i>
              <span className="FpPrice">{this.props.car?.model}</span>
            </div>
          </div>

          <div className="row">
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-users"></i>
              <span>{this.props.car?.nbrPlaces}</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-sitemap"></i>
              <span>{this.props.car?.gearBox}</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-gas-pump"></i>
              <span>{this.props.car?.fuel_type}</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-route"></i>
              <span>{this.props.car?.mileage} Km</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-palette"></i>
              <span>{this.props.car?.color}</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-calendar-alt"></i>
              <span>{this.props.car?.year}</span>
            </div>
          </div>

          <div className="row">
            <div class=" SectionDesc col-lg-10  col-sm-12 ">
              <span className="Desc">Description :</span>
              <p className="FpDesc">{this.props.car?.descriptionCar}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FpDescriptionComponent;
