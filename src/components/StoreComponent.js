import React, { Component, useState } from "react";
import "../Style/css/StoreComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";
var data = {
  img: "http://www.location-voiture-pas-cher.net/wp-content/uploads/2016/10/location-voiture-luxe.jpg",
  name: "ToufikCar",
  Tel: "0645323427",
  City: "Rabat",
  Storelink: "www.google.com",
};
export class StoreComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: data,
    };
  }

  render() {
    let { store } = this.state;
    return (
      <div class="StoreComponentParent container">
        <div class=" StoreImgparent ">
          <img className="StoreImg" src={store.img} />
        </div>
        <div class=" StoreElement storeName">
          <i class="fas fa-store"></i>
          <span>{store.name}</span>
        </div>
        <div class="StoreElement  StoreTel">
          <i class="fas fa-phone-square-alt"></i>
          <span>{store.Tel}</span>
        </div>
        <div class="StoreElement  StoreLocalisation">
          <i class="fas fa-map-marker-alt"></i>
          <span>{store.City}</span>
        </div>
        <div class=" StoreElement StoreLink">
          <a href={store.Storelink}>Voir Plus</a>
        </div>
      </div>
    );
  }
}
export default StoreComponent;
