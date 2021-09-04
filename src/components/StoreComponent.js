import React, { Component, useState } from "react";
import "../Style/css/StoreComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import StoreService from "../services/StoreService";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
var img =
  "http://www.location-voiture-pas-cher.net/wp-content/uploads/2016/10/location-voiture-luxe.jpg";
var PATHUser = "https://localhost:44330/PhotosUsers/";
export class StoreComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: {},
    };
  }

  componentWillMount = async () => {
    var tt = await StoreService.GetStoreInfos(this.props.idCompany);
    this.setState({ store: tt.data });
  };

  render() {
    let { store } = this.state;

    return (
      <div class="StoreComponentParent col-4">
        <div class=" StoreImgparent ">
          <img className="StoreImg" src={PATHUser + store.imgName} />
        </div>
        <div class=" StoreElement storeName">
          <i class="fas fa-store"></i>
          <span>{store.fullName}</span>
        </div>
        <div class="StoreElement  StoreTel">
          <i class="fas fa-phone-square-alt"></i>
          <span>{store.phoneNumber} </span>
        </div>
        <div class="StoreElement  StoreLocalisation">
          <i class="fas fa-map-marker-alt"></i>
          <span>{store.city}</span>
        </div>
        {this.props.IsCompanyPage != "yes" && (
          <a href={"CompanyPage/" + store.id_user}>
            <div class=" StoreElement StoreLink">Voir Plus</div>
          </a>
        )}
      </div>
    );
  }
}
export default StoreComponent;
