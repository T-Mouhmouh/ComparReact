import React, { Component, useState } from "react";
import { PropTypes } from "react";
import "../Style/css/SearchComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
var MarqueData = ["BMW", "Reunault", "Volswagen"];
var ModelData = ["R4", "S150", "TT"];
var CityData = ["Rabat", "Casa", "Tanger"];
var Voitures, Villes;
export class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marque: [],
      model: [],
      city: [],
      selectedmarque: "",
      selectedmodel: "",
      selectedcity: "",
    };
  }

  submitSearch = async (e) => {
    let { marque, model, city, selectedcity, selectedmodel, selectedmarque } =
      this.state;
    e.preventDefault();

    //CarService.ShercheCar(marque, model, city);
    var ss = await CarService.ShercheCar(
      selectedmarque,
      selectedmodel,
      selectedcity
    );
    console.log("result sherche :", ss);
    this.props.DataToRender(ss);
  };

  filtermodel = (e) => {
    var SelectedMarque = Voitures.data.filter((data) => data.marque == e[0]);
    const ModelByMarque = Array.from(
      new Set(SelectedMarque.map((data) => data.modele))
    );
    const AllModele = Array.from(
      new Set(Voitures.data.map((data) => data.modele))
    );

    var filtredModele = ModelByMarque.length == 0 ? AllModele : ModelByMarque;

    this.setState({
      selectedmarque: e[0],
      model: filtredModele,
    });

    //console.log("selected marque", this.state.selectedmarque);
  };

  componentDidMount = async () => {
    Voitures = await CarService.GetAllVoitures();
    Villes = await CarService.GetAllvilles();
    try {
      var AllVilles = Array.from(
        new Set(Villes.data.map((data) => data.ville))
      );
      var marquesDistinct = Array.from(
        new Set(Voitures.data.map((data) => data.marque))
      );
      var modelesDistinct = Array.from(
        new Set(Voitures.data.map((data) => data.modele))
      );
    } catch {}

    this.setState({
      marque: marquesDistinct,
      model: modelesDistinct,
      city: AllVilles,
    });
  };

  render() {
    let { marque, model, city } = this.state;
    return (
      <form onSubmit={this.submitSearch}>
        <div class="SearchComponentParent container">
          <div class="SearchComponentCont row center">
            <div class="MarqueSection  col-lg-4  col-sm-12 ">
              <Typeahead
                clearButton
                id="basic-example"
                options={marque}
                onChange={(e) => {
                  this.filtermodel(e);
                }}
                placeholder="   Choose your Marque..."
              />
            </div>
            <div class="ModelSection col-lg-4 col-sm-12">
              <Typeahead
                clearButton
                id="basic-example"
                options={model}
                onChange={(e) => {
                  this.setState({
                    selectedmodel: e[0],
                  });
                }}
                placeholder=" Choose your Model"
              />
            </div>
            <div class="Citysection col-lg-4 col-sm-12">
              <Typeahead
                clearButton
                id="basic-example"
                options={city}
                onChange={(e) => {
                  this.setState({
                    selectedcity: e[0],
                  });
                }}
                placeholder="Choose your City"
              />
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
