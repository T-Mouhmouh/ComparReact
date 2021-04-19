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
      city: "",
    };
  }

  submitSearch = (e) => {
    let { marque, model, city } = this.state;
    e.preventDefault();
    console.log("heloo");
    CarService.ShercheCar(marque, model, city);
  };

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <div class="SearchComponentParent container">
          <div class="SearchComponentCont row center">
            <div class="MarqueSection col-5">
              <select
                class="mdb-select md-form"
                searchable="Search here.."
                onChange={(e) => {
                  this.setState({
                    marque: e.target.value,
                  });
                }}
              >
                <option value="" disabled selected>
                  Choose your Marque
                </option>
                <option value="Ferrari">Ferrari</option>
                <option value="Ford">Ford</option>
                <option value="Mercides">Mercides</option>
                <option value="Reunault">Reunault</option>
                <option value="Fiat">Fiat</option>
              </select>
            </div>
            <div class="ModelSection col-5">
              <select
                class="mdb-select md-form"
                searchable="Search here.."
                onChange={(e) => {
                  this.setState({
                    model: e.target.value,
                  });
                }}
              >
                <option value="" disabled selected>
                  Choose your Model
                </option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Poland">Poland</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <div class="Citysection col-2">
              <select
                class="mdb-select md-form"
                searchable="Search here.."
                onChange={(e) => {
                  this.setState({
                    city: e.target.value,
                  });
                }}
              >
                <option value="" disabled selected>
                  Choose your City
                </option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Poland">Poland</option>
                <option value="Japan">Japan</option>
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
