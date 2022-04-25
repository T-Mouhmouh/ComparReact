import React, { Component, useState } from "react";
import { PropTypes } from "react";
import "../Style/css/SearchComponent.css";
import MultiRangeSlider from "../components/MultiRangeSlider";
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
var filterePlusobj = {
  Marque: "",
  Model: "",
  City: "",
  // minprice: 0,
  // maxprice: 0,
  // minmileage: 0,
  //maxmileage: 0,
  //minnbrPlaces: 0,
  // maxnbrPlaces: 0,
};
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
      isfilterPlus: false,
    };
  }

  submitSearch = async (e) => {
    let { marque, model, city, selectedcity, selectedmodel, selectedmarque } =
      this.state;
    e.preventDefault();

    //CarService.ShercheCar(marque, model, city);

    filterePlusobj.Marque = selectedmarque;
    filterePlusobj.Model = selectedmodel;
    filterePlusobj.City = selectedcity;
    console.log("filterrr ", filterePlusobj);
    var ss = !this.state.isfilterPlus
      ? await CarService.ShercheCar(selectedmarque, selectedmodel, selectedcity)
      : await CarService.filterePlus(filterePlusobj);

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

  handlePrice(e) {
    filterePlusobj.minprice = e.min;
    filterePlusobj.maxprice = e.max;
    console.log(filterePlusobj);
    console.log("cccccc", e.min, e.min);
  }
  handleMilage(e) {
    filterePlusobj.minmilage = e.min;
    filterePlusobj.maxmilage = e.max;
    console.log(filterePlusobj);
  }
  handleNbrPlaces(e) {
    filterePlusobj.minnmrPlaces = e.min;
    filterePlusobj.maxnmrPlaces = e.max;
    console.log(filterePlusobj);
  }
  render() {
    let { marque, model, city } = this.state;
    return (
      <form onSubmit={this.submitSearch}>
        <div className="SearchComponentParent container">
          <div className="SearchComponentCont row center">
            <div className="MarqueSection  col-lg-4  col-sm-12 ">
              <Typeahead
                clearButton
                id="basic-example"
                options={marque}
                onChange={(e) => {
                  this.filtermodel(e);
                }}
                placeholder="Choose your Marque..."
              />
            </div>
            <div className="ModelSection col-lg-4 col-sm-12">
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
            <div className="Citysection col-lg-4 col-sm-12">
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
            <button className="SearchBtn btn btn-success">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <>
            <div className="SearchComponentCont row center">
              <p>
                <i
                  className="fab fa-searchengin"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExampl"
                  aria-expanded="false"
                  aria-controls="collapseExampl"
                  id="btnfilterPlus"
                  onClick={() =>
                    this.setState({ isfilterPlus: !this.state.isfilterPlus })
                  }
                ></i>
              </p>

              <div
                className="collapse SearchComponentCont row center"
                id="collapseExampl"
              >
                <div className=" sliderplus col-lg-4  col-sm-6 ">
                  <div className="title">Prix :</div>
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    id={"price"}
                    onChange={(e) => this.handlePrice(e)}
                  />
                </div>

                <div className=" sliderplus col-lg-4  col-sm-6 ">
                  <div className="title">kilométrage :</div>
                  <MultiRangeSlider
                    min={0}
                    max={500000}
                    id={"kilometrage"}
                    onChange={(e) => this.handleMilage(e)}
                  />
                </div>
                <div className=" sliderplus col-lg-4 col-sm-6 ">
                  <div className="title">Nombre du Places :</div>
                  <MultiRangeSlider
                    min={0}
                    max={10}
                    id={"nbrplaces"}
                    onChange={(e) => this.handleNbrPlaces(e)}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </form>
    );
  }
}
export default SearchComponent;
