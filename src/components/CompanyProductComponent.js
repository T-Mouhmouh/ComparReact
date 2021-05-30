import React, { Component, useState } from "react";
import "../Style/css/CompanyProductComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";
let DemoData = [
  {
    img: "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG",
    price: "200",
    marque: "Renault",
    model: "Clio4",
  },
  {
    img: "https://s3-eu-west-1.amazonaws.com/staticeu.izmocars.com/vehicleimages/640x480/dealers/vowpc4407/VOWPC4407_VO009145_117269.jpg",

    price: "250",
    marque: "Renault",
    model: "Clio4",
  },
  {
    img: "https://mnk-auto.store/wp-content/uploads/2020/10/830_202223891.jpg",

    price: "350",
    marque: "Renault",
    model: "Clio4",
  },
  {
    img: "https://mnk-auto.store/wp-content/uploads/2020/10/830_202223891.jpg",
    price: "350",
    marque: "Renault",
    model: "Clio4",
  },
];
export class CompanyProductComponent extends Component {
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
      <div className="CompanyProductCard container">
        <div className="row">
          {this.state.data.map((item, index) => (
            <div className="col-sm-6 col-xl-3 col-md-4 cardpr" index={index}>
              <div className="test">
                <div className="ProductImg">
                  <img src={item.img} />
                </div>

                <div>
                  <div className="ProductPrice">{item.price} DH</div>
                  <div className="row">
                    <div className="col ProductMarque">Marque</div>
                    <div className="col ProductModele">Modele</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default CompanyProductComponent;
