import React, { Component, useState } from "react";
import "../Style/css/CompanyAllListProductComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import StoreService from "../services/StoreService";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { browserhistory } from "react-router";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
import { FicheProduitPage } from "../Page/FicheProduitPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

var img = "https://mnk-auto.store/wp-content/uploads/2020/10/830_202223891.jpg";

var tt;
export class CompanyAllListProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardDataToRander: [],
      selectedindex: "",
      FpDatatoRender: {},
    };
  }

  componentWillMount = async () => {
    tt = await StoreService.GetMoreStoreCars(this.props.idCompany);
    console.log("this.props.idCompany", this.props.idCompany);
    if (tt != undefined) {
      this.setState({
        CardDataToRander: tt.data,
      });
    }
  };
  componentWillReceiveProps = async () => {
    tt = await StoreService.GetMoreStoreCars(this.props.idCompany);
    if (tt != undefined) {
      this.setState({
        CardDataToRander: tt.data,
      });
    }
  };

  render() {
    let { CardDataToRander } = this.state;
    return (
      <div className="father">
        {CardDataToRander.map((item, index) => (
          <div className="CardList container">
            <div className=" row center">
              <div className="CardSliderImg col-lg-4  col-sm-12">
                <img className="imgCardList" src={img}></img>
              </div>
              <div className="CardSliderDesc col-lg-8  col-sm-12">
                <div className="CardPriceList">{item.price} DH</div>
                <div className="CardDesc">{item.color} </div>

                <div className="CartBotomDiv">
                  <hr />
                  <div className=" row center">
                    <div className="CardMarque  col-lg-6  col-sm-6">
                      {item.mark}
                    </div>
                    <div className="CardModel col-lg-6  col-sm-6">
                      {item.model}
                    </div>
                  </div>
                  <div className=" row center">
                    <div className="CardDate col-lg-6  col-sm-6">
                      {item.dateAnnance}
                    </div>
                    <div className="CardCity col-lg-6  col-sm-6">
                      {item.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default CompanyAllListProductComponent;
