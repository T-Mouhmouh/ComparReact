import React, { Component, useState } from "react";
import "../Style/css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginService from "../services/LoginService.js";
export class RegistrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      user_type: "visitor", //visitor or user
    };
  }

  submitLogin = (e) => {
    let { user_type } = this.state;
    e.preventDefault();
    console.log("im in login Component");
    if (this.state.user_type == "visitor") {
      var check = LoginService.CheckLoginVisitor(
        this.state.login,
        this.state.password
      );
    } else if (user_type == "company") {
      var check = LoginService.CheckLoginUser(
        this.state.login,
        this.state.password
      );
    }
  };

  render() {
    var isselectedTypeClass = "selectedType";
    var visitorclass =
      this.state.user_type == "visitor" ? isselectedTypeClass : "";
    var companyclass =
      this.state.user_type == "company" ? isselectedTypeClass : "";
    return (
      <div>
        <section className="container-fluid">
          <secion className="row justify-content-center">
            <form className="form-container" onSubmit={this.submitLogin}>
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
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
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
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
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
                    onChange={(e) => {
                      this.setState({
                        login: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwd"
                    placeholder="Mot de passe"
                    onChange={(e) => {
                      this.setState({
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Nom et Prénom </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwd"
                    placeholder="Nom et Prénom"
                    onChange={(e) => {
                      this.setState({
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Télephone</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwd"
                    placeholder="Télephone"
                    onChange={(e) => {
                      this.setState({
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label className="form-label fw-bold">Ville</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwd"
                    placeholder="Ville"
                    onChange={(e) => {
                      this.setState({
                        password: e.target.value,
                      });
                    }}
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
