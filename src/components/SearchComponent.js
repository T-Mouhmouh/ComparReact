import React, { Component, useState } from "react";
import "../Style/css/SearchComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";

export class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marque: "",
      model: "",
      ville: "",
    };
  }

  submitSearch = (e) => {
    e.preventDefault();
    console.log("heloo");
    CarService.ShercheCar("porche", "207", "rabat");
  };

  render() {
    let { marque } = this.state;
    return (
      <form onSubmit={this.submitSearch}>
        <div class="SearchComponentParent container">
          <div class="SearchComponentCont row center">
            <div class="MarqueSection col-5">
              <select class="mdb-select md-form" searchable="Search here..">
                <option value="" disabled selected>
                  Choose your Marque
                </option>
                <option value="1">Ferrari</option>
                <option value="2">Ford</option>
                <option value="3">Mercides</option>
                <option value="3">Reunault</option>
                <option value="3">Fiat</option>
              </select>
            </div>
            <div class="ModelSection col-5">
              <select class="mdb-select md-form" searchable="Search here..">
                <option value="" disabled selected>
                  Choose your Model
                </option>
                <option value="1">USA</option>
                <option value="2">Germany</option>
                <option value="3">France</option>
                <option value="3">Poland</option>
                <option value="3">Japan</option>
              </select>
            </div>
            <div class="Citysection col-2">
              <select class="mdb-select md-form" searchable="Search here..">
                <option value="" disabled selected>
                  Choose your City
                </option>
                <option value="1">USA</option>
                <option value="2">Germany</option>
                <option value="3">France</option>
                <option value="3">Poland</option>
                <option value="3">Japan</option>
              </select>
            </div>
          </div>
          <div className="SearchDiv">
            <button class="SearchBtn btn btn-success">Srchbtn</button>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchComponent;
