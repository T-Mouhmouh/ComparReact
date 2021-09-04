import React, { Component, useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import "../Style/css/CarCompanyListComponent.css";
import WishListService from "../services/WishListService.js";
import StoreService from "../services/StoreService";
import CarService from "../services/CarService";
import { Link } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import avatar from "../Style/img/imgcar.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
var PATHCar = "https://localhost:44330/PhotosCar/";
var img = "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG";
var Voitures, Villes;
var enregistrationObjet = {
  id_car: 0,
  id_user: 0,
  mark: "",
  model: "",
  year: 0,
  fuel_type: "",
  color: "",
  descriptionCar: "",
  mileage: 0,
  price: 0,
  nbrPlaces: 0,
  gearBox: "",
  imgName: "",
  active: "",
  imgFile: [],
};
export class CarCompanyListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardDataToRander: "",
      delete: "",
      open: false,
      setOpen: false,
      marque: [],
      model: [],
      selectedmarque: "",
      selectedmodel: "",
      IsUpdate: false,
      updatecar: "",
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

  deleteCar = async (id_car) => {
    const confirmBox = window.confirm(
      "vous voulez vraiment supprimer cette voiture ?"
    );
    if (confirmBox === true) {
      var tt = await CarService.DeleteCar(id_car);
      this.initialazeCarList();
    }
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

  UpdateActive = async (e, id_car) => {
    var active = e.target.checked ? "active" : "inactive";
    var ff = await CarService.UpdateActiveCar(id_car, active);
  };
  enChangeelement = (e) => {
    // this.setState({ [e.target.name]: e.target.value }); gooodd

    switch (e.target.id) {
      case "AnneeModele":
        enregistrationObjet.year = Number(e.target.value);
        break;
      case "Carburant":
        enregistrationObjet.fuel_type = e.target.value;
        break;
      case "descriptionCar":
        enregistrationObjet.description = e.target.value;
        break;
      case "Kilometrage":
        enregistrationObjet.mileage = Number(e.target.value);
        break;
      case "Prix":
        enregistrationObjet.price = Number(e.target.value);
        break;
      case "Places":
        enregistrationObjet.nbrPlaces = Number(e.target.value);
        break;
      case "BoiteaVitesse":
        enregistrationObjet.gearBox = e.target.value;
        break;
      case "Couleur":
        enregistrationObjet.color = e.target.value;
        break;
      case "description":
        enregistrationObjet.descriptionCar = e.target.value;
        break;

      case "avatar":
        enregistrationObjet.imgFile = e.target.files;
        break;
    }
  };

  clearData = () => {
    enregistrationObjet = {
      id_car: 0,
      id_user: 0,
      mark: "",
      model: "",
      year: 0,
      fuel_type: "",
      color: "",
      descriptionCar: "",
      mileage: 0,
      price: 0,
      nbrPlaces: 0,
      gearBox: "",
      imgName: "",
      active: "",
      imgFile: [],
    };
  };

  handleFileSelected = async (e) => {
    e.preventDefault();
    let newDate = new Date();
    let min = newDate.getMinutes();
    let Month = newDate.getMonth() + 1;
    if (Month < 10) {
      Month = 0 + Month.toString();
    }
    if (min < 10) {
      min = 0 + min.toString();
    }
    let datetoadd = Month.toString() + min.toString();

    var connectedUser = localStorage.getItem("connectedUser");
    var connectedUserJ = JSON.parse(connectedUser);
    enregistrationObjet.id_user = connectedUserJ.id_user;
    const formData = new FormData();
    formData.append("data", enregistrationObjet);
    for (let i = 0; i < enregistrationObjet.imgFile.length; i++) {
      formData.append("carimg", enregistrationObjet.imgFile[i]);
      if (enregistrationObjet.imgName == "") {
        enregistrationObjet.imgName =
          datetoadd + enregistrationObjet.imgFile[i].name;
      } else {
        enregistrationObjet.imgName =
          enregistrationObjet.imgName +
          "__" +
          datetoadd +
          enregistrationObjet.imgFile[i].name;
      }
    }
    var tt = await CarService.AddCar(enregistrationObjet);
    var Path = "https://localhost:44330/api/Car/SaveFile";

    fetch(Path, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {},
        (error) => {
          alert("Failed");
        }
      );

    if (tt.success) {
      this.handleClose();
      this.initialazeCarList();
      NotificationManager.success(" Voiture a été Bien Ajouter:)", "Success !");
    }
    this.clearData();
  };

  UpdateCar = async (id) => {
    var car = await CarService.GetCarById(id);
    this.clearData();

    this.setState({
      updatecar: car.data,
      IsUpdate: true,
    });

    console.log("carrr upxdd", this.state.updatecar);

    enregistrationObjet.color = car.data.color;
    enregistrationObjet.descriptionCar = car.data.descriptionCar;
    enregistrationObjet.fuel_type = car.data.fuel_type;
    enregistrationObjet.gearBox = car.data.gearBox;
    enregistrationObjet.id_car = car.data.id_car;

    enregistrationObjet.mark = car.data.mark;
    enregistrationObjet.mileage = car.data.mileage;
    enregistrationObjet.model = car.data.model;
    enregistrationObjet.nbrPlaces = car.data.nbrPlaces;
    enregistrationObjet.price = car.data.price;

    this.handleClickOpen();
  };

  SubmitUpdateCar = async (e) => {
    e.preventDefault();
    let newDate = new Date();
    let min = newDate.getMinutes();
    let Month = newDate.getMonth() + 1;
    if (Month < 10) {
      Month = 0 + Month.toString();
    }
    if (min < 10) {
      min = 0 + min.toString();
    }
    let datetoadd = Month.toString() + min.toString();

    const formData = new FormData();
    formData.append("data", enregistrationObjet);
    for (let i = 0; i < enregistrationObjet.imgFile.length; i++) {
      formData.append("carimg", enregistrationObjet.imgFile[i]);
      if (enregistrationObjet.imgName == "") {
        enregistrationObjet.imgName =
          datetoadd + enregistrationObjet.imgFile[i].name;
      } else {
        enregistrationObjet.imgName =
          enregistrationObjet.imgName +
          "__" +
          datetoadd +
          enregistrationObjet.imgFile[i].name;
      }
    }
    var tt = await CarService.UpdateCar(enregistrationObjet);
    var Path = "https://localhost:44330/api/Car/SaveFile";

    fetch(Path, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {},
        (error) => {
          alert("Failed");
        }
      );

    if (tt.success) {
      this.handleClose();
      this.initialazeCarList();
      NotificationManager.success(
        " Voiture a été Bien modifié :)",
        "Success !"
      );
    }
    this.clearData();
  };

  AjouterCar = async () => {
    this.setState({
      IsUpdate: false,
    });

    this.handleClickOpen();
  };
  splitimg(img) {
    var words;
    if (img != null) words = img.split("__");
    if (img == null) {
      return img;
    } else return words[0];
  }
  render() {
    let { CardDataToRander, marque, model } = this.state;
    //window.history.pushState("", "", "http://localhost:3000/ProfilePage");
    return (
      <div>
        <button
          type="button"
          onClick={() => this.AjouterCar()}
          class="btn btn-primary addbtn"
        >
          <i class="far fa-plus-square"></i> Ajouter
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
                      <img
                        width="70px"
                        height="70px"
                        src={PATHCar + this.splitimg(item.imgName)}
                      ></img>
                    </Link>
                  </th>
                  <td>{item.mark}</td>
                  <td>{item.model}</td>
                  <td>
                    <b>{item.fuel_type.toUpperCase()}</b>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) => this.UpdateActive(e, item.id_car)}
                        defaultChecked={item.active == "active"}
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
                      <i
                        class="far fa-edit"
                        onClick={() => this.UpdateCar(item.id_car)}
                      ></i>
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
          <DialogTitle id="form-dialog-title">Ajouter Voiture</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <secion className="row justify-content-center">
                <form
                  className="form-container"
                  onSubmit={
                    this.state.IsUpdate
                      ? (e) => this.SubmitUpdateCar(e)
                      : (e) => this.handleFileSelected(e)
                  }
                >
                  <div className="row">
                    <div className="mb-3 col-6">
                      <img src={avatar} className="avatar" />
                      <input
                        className="form-control form-control-sm"
                        id="avatar"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={this.enChangeelement}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label className="form-label fw-bold">Carburant :</label>
                      <select
                        name="pets"
                        id="Carburant"
                        onChange={this.enChangeelement}
                        defaultValue={enregistrationObjet.fuel_type}
                      >
                        <option>--Select-- </option>
                        <option value="Essence">Essence </option>
                        <option value="Hybride">Hybride</option>
                        <option value="Diesel">Diesel</option>
                      </select>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="mb-3 col-6">
                      <div className="col">
                        <Typeahead
                          clearButton
                          id="mark"
                          options={marque}
                          onChange={(e) => (enregistrationObjet.mark = e[0])}
                          defaultInputValue={enregistrationObjet.mark}
                          placeholder="Marque..."
                        />
                      </div>
                      <div className="Typeahead">
                        <Typeahead
                          clearButton
                          id="basic-example"
                          options={model}
                          onChange={(e) => (enregistrationObjet.model = e[0])}
                          defaultInputValue={enregistrationObjet.model}
                          placeholder="Model..."
                        />
                      </div>
                    </div>

                    <div className="mb-3 col-6">
                      <label className="form-label fw-bold">Année-Modèle</label>
                      <input
                        type="text"
                        className="form-control"
                        id="AnneeModele"
                        placeholder="Année-Modèle"
                        onChange={this.enChangeelement}
                        defaultValue={enregistrationObjet.year}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <div className="col">
                        <label className="form-label fw-bold">
                          Kilométrage
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Kilometrage"
                          placeholder="Kilometrage"
                          onChange={this.enChangeelement}
                          defaultValue={enregistrationObjet.mileage}
                        />
                      </div>
                      <div className="col">
                        <label className="form-label fw-bold">Prix</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Prix"
                          placeholder="Prix"
                          defaultValue={enregistrationObjet.price}
                          onChange={this.enChangeelement}
                        />
                      </div>
                    </div>

                    <div className="mb-3 col-6">
                      <label className="form-label fw-bold">
                        Boite a Vitesse
                      </label>
                      <input
                        className="form-control"
                        id="BoiteaVitesse"
                        placeholder="Boite a Vitesse"
                        defaultValue={enregistrationObjet.gearBox}
                        onChange={this.enChangeelement}
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label fw-bold">
                        Nombre de Places
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Places"
                        placeholder="Nombre de Places"
                        defaultValue={enregistrationObjet.nbrPlaces}
                        onChange={this.enChangeelement}
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-bold">Couleur</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Couleur"
                        placeholder="Couleur"
                        defaultValue={enregistrationObjet.color}
                        onChange={this.enChangeelement}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label className="form-label fw-bold">Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        placeholder="Description"
                        onChange={this.enChangeelement}
                        defaultValue={enregistrationObjet.descriptionCar}
                        rows="5"
                        cols="33"
                      ></textarea>
                    </div>
                  </div>
                  {this.state.IsUpdate && (
                    <button type="submit" className="btn btn-primary btn-lg">
                      Modifier
                    </button>
                  )}
                  {!this.state.IsUpdate && (
                    <button type="submit" className="btn btn-primary btn-lg">
                      Enregister
                    </button>
                  )}
                </form>
              </secion>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <input
              type="button"
              value="Cancel"
              onClick={this.handleClose}
              color="primary"
            />
          </DialogActions>
        </Dialog>
        <NotificationContainer />
      </div>
    );
  }
}
export default CarCompanyListComponent;
