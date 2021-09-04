import React, { Component, useState } from "react";
import "../Style/css/FpDescriptionComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";
import { FpImgSlider } from "../components/FpImgSlider";
import { StoreComponent } from "../components/StoreComponent";
import { FpDescriptionComponent } from "../components/FpDescriptionComponent";
import { CompanyProductComponent } from "../components/CompanyProductComponent";
import { ResirvationComponent } from "../components/ResirvationComponent";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
import { HeaderComponent } from "../components/HeaderComponent";
var PATHCar = "https://localhost:44330/PhotosCar/";
export class FicheProduitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marque: "",
      model: "",
      city: "",
      FpDatatoRender: "",
      imgName: "",
    };
  }

  componentWillMount = async () => {
    var FpDatatoRender = await CarService.GetCarById(
      this.props.location.state.id_car
    );
    var tt = this.splitimg(FpDatatoRender.data.imgName);
    this.setState({
      FpDatatoRender: FpDatatoRender,
      imgName: tt,
    });
  };

  splitimg(img) {
    var words;
    if (img != null) words = img.split("__");
    if (img == null) {
      return img;
    } else return words;
  }

  render() {
    let { FpDatatoRender, imgName } = this.state;
    return (
      <>
        <HeaderComponent />
        <div className="row center">
          {FpDatatoRender != "" && <FpImgSlider imgList={imgName} />}
          {FpDatatoRender != "" && (
            <StoreComponent idCompany={FpDatatoRender?.data.id_user} />
          )}
          <div className="col-6">
            {FpDatatoRender != "" && (
              <FpDescriptionComponent car={FpDatatoRender.data} />
            )}
          </div>
          <div className="col ResirvationComponent">
            {FpDatatoRender != "" && (
              <ResirvationComponent
                idcompany={FpDatatoRender?.data.id_user}
                idcar={FpDatatoRender?.data.id_car}
              />
            )}
          </div>

          <p class="ChoiseTitle">Résultats similaires :</p>
          {FpDatatoRender != "" && (
            <CompanyProductComponent idCompany={FpDatatoRender?.data.id_user} />
          )}
        </div>
      </>
    );
  }
}
export default FicheProduitPage;
