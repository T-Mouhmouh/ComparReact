import React, { Component, useState } from "react";
import "../Style/css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginService from "../services/LoginService.js";
import RegistrationService from "../services/RegistrationService";
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
};
export class RegistrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      userType: "Particulier", //visitor or user
      UserConected: { data: "", msg: "", success: false },
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

    RegistrationUser = await RegistrationService.Registration(
      enregistrationObjet
    );
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
      case "ville":
        enregistrationObjet.city = e.target.value;
        break;
    }
    //    console.log("trtrtrtrtr", enregistrationObjet);
  };

  render() {
    let { UserConected } = this.state;
    var isselectedTypeClass = "selectedType";
    var visitorclass =
      this.state.user_type == "visitor" ? isselectedTypeClass : "";
    var companyclass =
      this.state.user_type == "company" ? isselectedTypeClass : "";
    return (
      <div>
        {UserConected.success ? <Redirect to="/Shearch" /> : ""}
        <section className="container-fluid">
          <secion className="row justify-content-center">
            <form className="form-container" onSubmit={this.submitRegistration}>
              {/* <div className="mb-3 center">
                <div
                  className={visitorclass + " inline"}
                  onClick={(e) => {
                    this.setState({
                      user_type: "visitor",
                    });
                  }}
                >
                  Visiteur
                </div>
                <div
                  className={companyclass + " inline"}
                  onClick={(e) => {
                    this.setState({
                      user_type: "company",
                    });
                  }}
                >
                  Agence
                </div>
*/}

              <div className="row ">
                <div className="col-6">
                  <label className="form-label fw-bold">Vous êtes un </label>
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
                      <label class="form-check-label" for="exampleRadios1">
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
                      <label class="form-check-label" for="exampleRadios2">
                        Professionnel
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
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
                    className="form-control"
                    id="tel"
                    placeholder="Télephone"
                    onChange={this.enChangeelement}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Ville</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ville"
                    placeholder="Ville"
                    onChange={this.enChangeelement}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Enregister
              </button>
            </form>
          </secion>
        </section>
      </div>
    );
  }
}
export default RegistrationComponent;
