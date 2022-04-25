import React, { Component, useState } from "react";
import "../Style/css/CardComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";

import WishListService from "../services/WishListService.js";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { browserhistory } from "react-router";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
import { FicheProduitPage } from "../Page/FicheProduitPage";
import NoResultImg from "../Style/img/search_no_result.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
var img = "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG";
var PATHCar = "https://localhost:44330/PhotosCar/";
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
    img: "https://s3-eu-west-1.amazonaws.com/staticeu.izmocars.com/vehicleimages/640x480/dealers/vowpc4407/VOWPC4407_VO009145_117269.jpg",
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
      CardDataToRander: [],
      selectedindex: "",
      FpDatatoRender: {},
      isfav: false,
      WishListCarList: [],
    };
  }

  componentDidMount() {
    var WishListCarList = null;
    var WishListCar = localStorage.getItem("WishListCar");
    if (WishListCar != null) {
      WishListCarList = WishListCar.split(",");
    }

    this.setState({
      data: DemoData,
      WishListCarList: WishListCarList,
    });
  }
  addFavorit = async (event, id_car) => {
    if (event.target.classList.contains("far")) {
      event.target.classList.remove("far");
      event.target.classList.add("fas");
      var Add = await WishListService.AddToWishList(id_car);
    } else {
      event.target.classList.remove("fas");
      event.target.classList.add("far");
      var Delete = await WishListService.DeleteFromWishList(id_car);
    }
  };
  splitimg(img) {
    var words;
    if (img != null) words = img.split("__");
    if (img == null) {
      return img;
    } else return words[0];
  }
  render() {
    var WishList = null;
    var WishListCar = localStorage.getItem("WishListCar");
    if (WishListCar != null) {
      WishList = WishListCar.split(",");
    }

    let { data, CardDataToRander, WishListCarList } = this.state;
    return (
      <>
        {this.props.CardDataToRander?.data?.map((item, index) => (
          <div>
            <div className="CardParent container">
              <div>
                {WishList != null &&
                  !WishList.some((val) => item.id_car == val) && (
                    <i
                      className="far fa-heart "
                      onClick={(e) => this.addFavorit(e, item.id_car)}
                    ></i>
                  )}
                {WishList != null &&
                  WishList.some((val) => item.id_car == val) && (
                    <i
                      className="fas fa-heart"
                      onClick={(e) => this.addFavorit(e, item.id_car)}
                    ></i>
                  )}
              </div>

              <Link
                to={{
                  pathname: "FicheProduitPage",
                  state: { id_car: item.id_car },
                }}
              >
                <div className=" row center">
                  <div className="CardSliderImg col-lg-4  col-sm-12">
                    <img
                      className="imgCard"
                      src={PATHCar + this.splitimg(item.imgName)}
                    ></img>
                  </div>

                  <div className="CardSliderDesc col-lg-8  col-sm-12">
                    <div className="CardPrice">{item.price} DH</div>
                    <div className="CardDesc">{item.descriptionCar} </div>
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
              </Link>
            </div>
          </div>
        ))}

        {this.props.CardDataToRander?.data.length == 0 && (
          <div className="NoResultDiv">
            <img src={NoResultImg} />
          </div>
        )}
      </>
    );
  }
}
export default CardComponent;
