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
      <div class="FpDescriptionComponentParent   col-6  container">
        <div class="FpDescriptionComponentCont  center">
          <div className="row">
            <div class="Section SectionPrice col-lg-8  col-sm-12 ">
              <i class="fas fa-money-bill-wave"></i>
              <span className="FpPrice">250 DH</span>
            </div>
          </div>

          <div className="row">
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-users"></i>
              <span>6</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-sitemap"></i>
              <span>Auto</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-gas-pump"></i>
              <span>Diesel</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-route"></i>
              <span>150 00 Km</span>
            </div>
            <div class="Section  col-lg-4  col-sm-12 ">
              <i class="fas fa-palette"></i>
              <span>Rouge</span>
            </div>
          </div>

          <div className="row">
            <div class=" SectionDesc col-lg-10  col-sm-12 ">
              <span className="Desc">Description :</span>
              <p className="FpDesc">
                La RENAULT CLIO 4 DIESEL est une voiture élégante. Il a 5 sièges
                et est équipé d'une transmission automatique. Réserver une
                voiture de location RENAULT CLIO 4 DIESEL en ligne, louer une
                voiture à l'aéroport de Tanger, de Meknès, et à Marrakech. La
                clio 4 de Renault avec boîte de vitesses automatique allie
                modernité et confort. Il dispose de la climatisation pour
                s'adapter à toute température.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FpDescriptionComponent;
