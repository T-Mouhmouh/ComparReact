import logo from "./logo.svg";
import React, { Component, useState } from "react";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent";
import ClassBased from "./components/ClassBased";
import { StoreComponent } from "./components/StoreComponent";
import { SearchComponent } from "./components/SearchComponent";
import { LoginComponent } from "./components/LoginComponent";
import { MarqueSliderComponent } from "./components/MarqueSliderComponent";
import { CitySliderComponent } from "./components/CitySliderComponent";
import { CardComponent } from "./components/CardComponent";
import { FpImgSlider } from "./components/FpImgSlider";
import { FpDescriptionComponent } from "./components/FpDescriptionComponent";
import { CompanyProductComponent } from "./components/CompanyProductComponent";
import { HomePage } from "./Page/HomePage";
import { LoginPage } from "./Page/LoginPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegistrationPage } from "./Page/RegistrationPage";
import { ShearchResultPage } from "./Page/ShearchResultPage";
import { FicheProduitPage } from "./Page/FicheProduitPage";
import { CompanyPage } from "./Page/CompanyPage";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";

import "../src/Style/css/App.css";
import "../src/Style/css/all.min.css";
import "../src/Style/css/fontawesome.min.css";

export class App extends Component {
  render() {
    return (
      <div class="app">
        <link rel="stylesheet" href="style css" />

        <HeaderComponent />
        {/*
      <CompanyProductComponent />  
      <div className="row center">
        //<FpImgSlider />
        <StoreComponent />
      </div>
      <SearchComponent />
      <FpDescriptionComponent />
      <CardComponent />
      <MarqueSliderComponent />
      <CitySliderComponent />
      <FpDescriptionComponent />
     
      <HomePage /> 
      <LoginPage />
      <ShearchResultPage />
      <FicheProduitPage />  
      <RegistrationPage />*/}

        <Router>
          <Switch>
            <Route exact path="/Login" component={LoginPage} />
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/Home" component={HomePage} />
            <Route exact path="/Shearch" component={ShearchResultPage} />
            <Route exact path="/FicheProduit" component={FicheProduitPage} />
            <Route exact path="/Registration" component={RegistrationPage} />
            <Route exact path="/CompanyPage/:id" component={CompanyPage} />
            <Route
              exact
              path="/FicheProduitPage"
              component={FicheProduitPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
