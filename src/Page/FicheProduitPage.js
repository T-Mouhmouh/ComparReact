import React, { Component, useState } from "react";
import "../Style/css/FpDescriptionComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";

import { FpImgSlider } from "../components/FpImgSlider";
import { StoreComponent } from "../components/StoreComponent";
import { FpDescriptionComponent } from "../components/FpDescriptionComponent";
import { CompanyProductComponent } from "../components/CompanyProductComponent";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class FicheProduitPage extends Component {
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
      <>
        <div className="row center">
          <FpImgSlider />
          <StoreComponent />
          <FpDescriptionComponent />
          <p class="ChoiseTitle">Résultats similaires :</p>
          <CompanyProductComponent />
        </div>
      </>
    );
  }
}
export default FicheProduitPage;
