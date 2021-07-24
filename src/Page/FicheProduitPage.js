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
import { HeaderComponent } from "../components/HeaderComponent";

export class FicheProduitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marque: "",
      model: "",
      city: "",
      FpDatatoRender: "",
    };
  }

  componentWillMount = async () => {
    console.log("FicheProduitPag : ", this.props.location.state.id_car);
    var FpDatatoRender = await CarService.GetCarById(
      this.props.location.state.id_car
    );
    this.setState({ FpDatatoRender: FpDatatoRender });
  };

  render() {
    let { FpDatatoRender } = this.state;
    return (
      <>
        <HeaderComponent />
        <div className="row center">
          {FpDatatoRender != "" && <FpImgSlider />}
          {FpDatatoRender != "" && (
            <StoreComponent idCompany={FpDatatoRender?.data.id_company} />
          )}
          {FpDatatoRender != "" && (
            <FpDescriptionComponent car={FpDatatoRender.data} />
          )}
          <p class="ChoiseTitle">Résultats similaires :</p>
          {FpDatatoRender != "" && (
            <CompanyProductComponent
              idCompany={FpDatatoRender?.data.id_company}
            />
          )}
        </div>
      </>
    );
  }
}
export default FicheProduitPage;
