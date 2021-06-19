import React, { Component, useState } from "react";
import "../Style/css/FpDescriptionComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";

import { LoginComponent } from "../components/LoginComponent";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class LoginPage extends Component {
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
        <LoginComponent />
      </>
    );
  }
}
export default LoginPage;
