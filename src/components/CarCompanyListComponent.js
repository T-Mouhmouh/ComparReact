import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Style/css/CarCompanyListComponent.css";
import WishListService from "../services/WishListService.js";
import StoreService from "../services/StoreService";
import CarService from "../services/CarService";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

var img = "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG";
export class CarCompanyListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardDataToRander: "",
      delete: "",
      open: false,
      setOpen: false,
    };
  }

  handleClickOpen = () => {
    this.setState({
      setOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
    });
  };
  initialazeCarList = async () => {
    var connectedUser = localStorage.getItem("connectedUser");
    var connectedUserJ = JSON.parse(connectedUser);
    var tt = await StoreService.GetMoreStoreCars(connectedUserJ.id_user);
    if (tt != undefined) {
      this.setState({
        CardDataToRander: tt.data,
      });
    }
  };
  componentDidMount = async () => {
    this.initialazeCarList();
  };

  deleteCar = async (id_car) => {
    const confirmBox = window.confirm(
      "vous voulez vraiment supprimer cette voiture ?"
    );
    if (confirmBox === true) {
      var tt = await CarService.DeleteCar(id_car);
      this.initialazeCarList();
    }
  };

  render() {
    let { CardDataToRander } = this.state;
    //window.history.pushState("", "", "http://localhost:3000/ProfilePage");
    return (
      <div>
        <button
          type="button"
          onClick={() => this.handleClickOpen()}
          class="btn btn-primary addbtn"
        >
          <i class="far fa-plus-square"></i> cc
        </button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mark</th>
              <th scope="col">Model</th>
              <th scope="col">Feul Type</th>
              <th scope="col">Price</th>
              <th scope="col">Active</th>
              <th scope="col">
                <i class="fas fa-tools TabHeart"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {CardDataToRander != "" &&
              CardDataToRander.map((item, index) => (
                <tr>
                  <th scope="row">
                    <Link
                      to={{
                        pathname: "FicheProduitPage",
                        state: { id_car: item.id_car },
                      }}
                    >
                      <img width="70px" height="70px" src={img}></img>
                    </Link>
                  </th>
                  <td>{item.mark}</td>
                  <td>{item.model}</td>
                  {item.fuel_type.toUpperCase() === "D" && <td>Diesel</td>}
                  {item.fuel_type.toUpperCase() === "E" && <td>Essence</td>}
                  {item.fuel_type.toUpperCase() === "H" && <td>Hybride</td>}
                  <td>{item.price}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={"flexSwitchCheckDefault" + index}
                      />
                      <label
                        className="form-check-label"
                        for={"flexSwitchCheckDefault" + index}
                      >
                        <b>active</b>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <i class="far fa-edit"></i>
                      <i
                        class="far fa-trash-alt"
                        onClick={() => this.deleteCar(item.id_car)}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Dialog
          open={this.state.setOpen}
          onClose={() => this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <input
              type="button"
              value="Cancel"
              onClick={this.handleClose}
              color="primary"
            />
            <input
              type="button"
              value="Subscribe"
              onClick={this.handleClose}
              color="primary"
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default CarCompanyListComponent;
