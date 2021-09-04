import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import WishListService from "../services/WishListService.js";
import CarService from "../services/CarService";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
var img = "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG";
var PATHCar = "https://localhost:44330/PhotosCar/";
export class WishListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WishListCars: [{}],
    };
  }

  componentDidMount = async () => {
    var WishListCar = localStorage.getItem("WishListCar");
    var WishListCarList = "";
    if (WishListCar != null) {
      WishListCarList = WishListCar != "" ? WishListCar.split(",") : "";
    }

    var cars = [];
    var tt;

    for (let i = 0; WishListCarList.length > i; i++) {
      tt = await CarService.GetCarById(WishListCarList[i]);
      cars.push(tt.data);
    }

    this.setState({ WishListCars: cars });
  };

  splitimg(img) {
    var words;
    if (img != null) words = img.split("__");
    if (img == null) {
      return img;
    } else return words[0];
  }

  render() {
    let { WishListCars } = this.state;

    window.history.pushState("", "", "http://localhost:3000/ProfilePage");
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mark</th>
              <th scope="col">Model</th>
              <th scope="col">Feul Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {WishListCars.map((item, index) => (
              <tr>
                <th scope="row">
                  <Link
                    to={{
                      pathname: "FicheProduitPage",
                      state: { id_car: item.id_car },
                    }}
                  >
                    <img
                      width="70px"
                      height="70px"
                      src={PATHCar + this.splitimg(item.imgName)}
                    ></img>
                  </Link>
                </th>
                <td>{item.mark}</td>
                <td>{item.model}</td>
                <td>{item.fuel_type}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default WishListComponent;
