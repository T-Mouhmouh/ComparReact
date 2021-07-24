import React, { Component, useState } from "react";
import "../Style/css/StoreComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import StoreService from "../services/StoreService";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
var img =
  "http://www.location-voiture-pas-cher.net/wp-content/uploads/2016/10/location-voiture-luxe.jpg";

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
          <img className="StoreImg" src={img} />
        </div>
        <div class=" StoreElement storeName">
          <i class="fas fa-store"></i>
          <span>{store.title}</span>
        </div>
        <div class="StoreElement  StoreTel">
          <i class="fas fa-phone-square-alt"></i>
          <span>{store.phone_number} </span>
        </div>
        <div class="StoreElement  StoreLocalisation">
          <i class="fas fa-map-marker-alt"></i>
          <span>{store.city}</span>
        </div>
        {this.props.IsCompanyPage != "yes" && (
          <div class=" StoreElement StoreLink">
            <a href={"CompanyPage/" + store.id_company}>Voir Plus</a>
          </div>
        )}
      </div>
    );
  }
}
export default StoreComponent;
