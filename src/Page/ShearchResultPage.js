import React, { Component, useState, PropsTypes } from "react";

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
      tt: "",
      DataToRanderInCard: { data: [] },
    };
  }
  DataToRender = (data) => {
    console.log("data on parent : ", data);
    this.state.DataToRanderInCard = data;
    this.setState({
      tt: "btt",
      DataToRanderInCard: data,
    });
    this.forceUpdate();
  };
  render() {
    return (
      <>
        {this.state.tt}
        <SearchComponent DataToRender={this.DataToRender} />
        <CardComponent CardDataToRander={this.state.DataToRanderInCard} />
      </>
    );
  }
}
export default ShearchResultPage;
