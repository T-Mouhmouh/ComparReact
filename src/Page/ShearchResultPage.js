import React, { Component, useState } from "react";
import "../Style/css/FpDescriptionComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";

import { SearchComponent } from "../components/SearchComponent";
import { CardComponent } from "../components/CardComponent";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class ShearchResultPage extends Component {
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
        <SearchComponent />
        <CardComponent />
      </>
    );
  }
}
export default ShearchResultPage;
