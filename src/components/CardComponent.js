import React, { Component, useState } from "react";
import "../Style/css/CardComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";
let DemoData = [
  {
    img: "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG",
    numberImg: 5,
    price: "200",
    marque: "Renault",
    model: "Clio4",
    dateAnnance: "23/12/2021",
    city: "Rabat",
    description: " bla bla bla ..",
  },
  {
    img:
      "https://s3-eu-west-1.amazonaws.com/staticeu.izmocars.com/vehicleimages/640x480/dealers/vowpc4407/VOWPC4407_VO009145_117269.jpg",
    numberImg: 3,
    price: "250",
    marque: "Renault",
    model: "Clio4",
    dateAnnance: "03/11/2021",
    city: "Sale",
    description: " bla bla bla ..",
  },
  {
    img: "https://mnk-auto.store/wp-content/uploads/2020/10/830_202223891.jpg",
    numberImg: 9,
    price: "350",
    marque: "Renault",
    model: "Clio4",
    dateAnnance: "11/10/2021",
    city: "Casa-Blanca",
    description: " bla bla bla ..",
  },
];
export class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: DemoData,
    });
  }

  render() {
    let { data } = this.state;
    console.log("card data :", data);
    return (
      <>
        {this.state.data.map((item, index) => (
          <div className="CardParent container">
            <div className=" row center">
              <div className="CardSliderImg col-lg-4  col-sm-12">
                <img className="imgCard" src={item.img}></img>
              </div>
              <div className="CardSliderDesc col-lg-8  col-sm-12">
                <div className="CardPrice">{item.price} DH</div>
                <div className="CardDesc">{item.description} </div>

                <div className="CartBotomDiv">
                  <hr />
                  <div className=" row center">
                    <div className="CardMarque  col-lg-6  col-sm-6">
                      {item.marque}
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
      </>
    );
  }
}
export default CardComponent;
