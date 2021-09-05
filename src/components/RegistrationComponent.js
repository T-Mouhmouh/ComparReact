import React, { Component, useState } from "react";
import "../Style/css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginService from "../services/LoginService.js";
import RegistrationService from "../services/RegistrationService";
import "react-notifications/lib/notifications.css";
import avatar from "../Style/img/avatar.jpg";
import CarService from "../services/CarService.js";
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
var enregistrationObjet = {
  id_visitor: 0,
  login: "",
  pass: "",
  fullName: "",
  phoneNumber: "",
  city: "",
  deleted: 1,
  imgName: "",
  imgFile: null,
  description: "",
};
var connectedJ = {
  id_visitor: 0,
  login: "",
  pass: "",
  fullName: "",
  phoneNumber: "",
  city: "",
  imgName: "",
  deleted: 1,
};
var Villes;
var connected = localStorage.getItem("connectedVisitor");
connectedJ = JSON.parse(connected);
var connectedUser = localStorage.getItem("connectedUser");
var connectedUserJ = JSON.parse(connectedUser);
var PATHVisitor = "https://localhost:44330/PhotosVisitor/";
var PATHUser = "https://localhost:44330/PhotosUsers/";
export class RegistrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      city: [],
      userType: "Particulier", //visitor or user
      UserConected: { data: "", msg: "", success: false },
      IsUpdatePage: false,
      avatar: avatar,
    };
  }

  submitRegistration = async (e) => {
    var RegistrationUser = {
      data: "",
      msg: "",
      success: false,
    };
    let { user_type } = this.state;
    e.preventDefault();
    if (this.state.userType == "Particulier") {
      RegistrationUser = await RegistrationService.Registration(
        enregistrationObjet,
        "visitor"
      );
    }
    if (this.state.userType == "Professionnel") {
      RegistrationUser = await RegistrationService.Registration(
        enregistrationObjet,
        "user"
      );
    }
    this.handleFileSelected();
    if (RegistrationUser.success && this.state.userType == "Particulier") {
      await LoginService.CheckLoginVisitor(
        enregistrationObjet.login,
        enregistrationObjet.pass
      );
    }
    if (RegistrationUser.success && this.state.userType == "Professionnel") {
      await LoginService.CheckLoginUser(
        enregistrationObjet.login,
        enregistrationObjet.pass
      );
    }
    this.setState({ UserConected: RegistrationUser });
  };

  submitUpdate = async (e) => {
    const data = new FormData();
    var RegistrationUser = {
      data: "",
      msg: "",
      success: false,
    };
    let { user_type } = this.state;
    e.preventDefault();
    if (enregistrationObjet.login == "") {
      enregistrationObjet.login = connectedJ.login;
    }
    if (enregistrationObjet.pass == "") {
      enregistrationObjet.pass = connectedJ.pass;
    }
    if (enregistrationObjet.phoneNumber == "") {
      enregistrationObjet.phoneNumber = connectedJ.phoneNumber;
    }
    if (enregistrationObjet.fullName == "") {
      enregistrationObjet.fullName = connectedJ.fullName;
    }
    if (enregistrationObjet.city == "") {
      enregistrationObjet.city = connectedJ.city;
    }

    RegistrationUser = await RegistrationService.Update(enregistrationObjet);
    if (RegistrationUser.success) {
      NotificationManager.success("Bien Modifié...", "Success !");
    }
    if (!RegistrationUser.success) {
      NotificationManager.error("Pas Modifié !...", "Error !");
    }
    this.setState({ UserConected: RegistrationUser });
  };

  setUserType = (e) => {
    if (e.target.id == "Particulier") {
      this.setState({
        userType: "Particulier",
      });
      enregistrationObjet.userType = "Particulier";
    } else if (e.target.id == "Professionnel") {
      this.setState({
        userType: "Professionnel",
      });
      enregistrationObjet.userType = "Professionnel";
    }
  };
  enChangeelement = (e) => {
    // this.setState({ [e.target.name]: e.target.value }); gooodd

    switch (e.target.id) {
      case "email":
        enregistrationObjet.login = e.target.value;
        break;
      case "passwd":
        enregistrationObjet.pass = e.target.value;
        break;
      case "fullName":
        enregistrationObjet.fullName = e.target.value;
        break;
      case "tel":
        enregistrationObjet.phoneNumber = e.target.value;
        break;
      case "description":
        enregistrationObjet.description = e.target.value;
        break;
      case "avatar":
        enregistrationObjet.imgFile = e.target.files[0];
        enregistrationObjet.imgName = e.target.files[0].name;

        this.imageHandler(e);
        break;
    }
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ avatar: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  handleFileSelected = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      enregistrationObjet.imgFile,
      enregistrationObjet.imgName
    );

    var Path =
      this.state.userType == "Particulier"
        ? "https://localhost:44330/api/Visitor/SaveFile"
        : "https://localhost:44330/api/Users/SaveFile";

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
  };

  componentDidMount = async () => {
    Villes = await CarService.GetAllvilles();
    try {
      var AllVilles = Array.from(
        new Set(Villes.data.map((data) => data.ville))
      );
    } catch {}

    this.setState({
      city: AllVilles,
    });
  };

  render() {
    if (this.props.IsUpdatePage) {
      enregistrationObjet.id_visitor = connectedJ.id_visitor;
    }
    let { UserConected, avatar } = this.state;

    var isselectedTypeClass = "selectedType";
    var visitorclass =
      this.state.user_type == "visitor" ? isselectedTypeClass : "";
    var companyclass =
      this.state.user_type == "company" ? isselectedTypeClass : "";

    if (connectedJ != null) {
      avatar = PATHVisitor + connectedJ.imgName;
    }
    if (connectedUserJ != null) {
      avatar = PATHVisitor + connectedUserJ.imgName;
    }

    return (
      <div>
        {UserConected.success && !this.props.IsUpdatePage ? (
          <Redirect to="/Search" />
        ) : (
          ""
        )}
        <section className="container-fluid">
          <secion className="row justify-content-center">
            <form
              className="form-container"
              onSubmit={
                (this.props.IsUpdatePage && this.submitUpdate) ||
                this.submitRegistration
              }
            >
              <div className="row ">
                <div className="col-6 row me-2">
                  <div className="col">
                    <img src={avatar} className="avatar" />
                    <input
                      className="form-control form-control-sm"
                      id="avatar"
                      type="file"
                      accept="image/*"
                      onChange={this.enChangeelement}
                    />
                  </div>
                  {!this.props.IsUpdatePage && (
                    <div className="col-6">
                      <label className="form-label fw-bold">Vous êtes un</label>
                      <div className="mb-3 col-6">
                        <div class="form-check col">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="ParticulierInput"
                            id="Particulier"
                            value="Particulier"
                            checked={this.state.userType === "Particulier"}
                            onChange={this.setUserType}
                          />
                          <label class="form-check-label" for="Particulier">
                            Particulier
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 col-6">
                        <div class="form-check col">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="ProfessionnelInput"
                            id="Professionnel"
                            value="Professionnel"
                            checked={this.state.userType === "Professionnel"}
                            onChange={this.setUserType}
                          />
                          <label class="form-check-label" for="Professionnel">
                            Professionnel
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    defaultValue={
                      this.props.IsUpdatePage ? connectedJ.login : ""
                    }
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="exemple@domaine.com"
                    onChange={this.enChangeelement}
                  />
                </div>

                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Mot de passe</label>
                  <input
                    type="password"
                    defaultValue={
                      this.props.IsUpdatePage ? connectedJ.pass : ""
                    }
                    className="form-control"
                    id="passwd"
                    placeholder="Mot de passe"
                    onChange={this.enChangeelement}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Nom et Prénom </label>
                  <input
                    type="text"
                    defaultValue={
                      this.props.IsUpdatePage ? connectedJ.fullName : ""
                    }
                    className="form-control"
                    id="fullName"
                    placeholder="Nom et Prénom"
                    onChange={this.enChangeelement}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Télephone</label>
                  <input
                    type="text"
                    defaultValue={
                      this.props.IsUpdatePage ? connectedJ.phoneNumber : ""
                    }
                    className="form-control"
                    id="tel"
                    placeholder="Télephone"
                    onChange={this.enChangeelement}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Ville</label>
                  <Typeahead
                    clearButton
                    id="basic-example"
                    options={this.state.city}
                    className="form-control"
                    id="ville"
                    defaultInputValue={
                      this.props.IsUpdatePage ? connectedJ.city : ""
                    }
                    onChange={(e) => {
                      enregistrationObjet.city = e[0];
                    }}
                    placeholder="Choose your City"
                  />
                </div>
                {this.state.userType == "Professionnel" && (
                  <div className="mb-3 col-6">
                    <label className="form-label fw-bold">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      defaultValue={
                        this.props.IsUpdatePage ? connectedJ.description : ""
                      }
                      placeholder="Description"
                      onChange={this.enChangeelement}
                      rows="5"
                      cols="33"
                    ></textarea>
                  </div>
                )}
              </div>
              {!this.props.IsUpdatePage && (
                <button type="submit" className="btn btn-primary btn-lg">
                  Enregister
                </button>
              )}
              {this.props.IsUpdatePage && (
                <button type="submit" className="btn btn-primary btn-lg">
                  Modifier
                </button>
              )}
            </form>
          </secion>
        </section>
        <NotificationContainer />
      </div>
    );
  }
}
export default RegistrationComponent;
