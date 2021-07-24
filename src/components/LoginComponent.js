import React, { Component, useState } from "react";
import "../Style/css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginService from "../services/LoginService.js";
import WishListService from "../services/WishListService.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      user_type: "visitor", //visitor or user
      UserConected: { data: "", msg: "", success: false },
    };
  }
  getWishListData = async () => {
    var connected = localStorage.getItem("connectedVisitor");
    var connectedJ = JSON.parse(connected);
    var tt = await WishListService.GetWishList(connectedJ.id_visitor);
    var carWishListIds = [];
    tt.data.map((item) => {
      carWishListIds.push(item.id_car);
    });

    // push carWishListIds to localStoreg
    localStorage.setItem("WishListCar", carWishListIds);
  };

  submitLogin = async (e) => {
    let { user_type } = this.state;
    var connectedUser = {
      data: "",
      msg: "",
      success: false,
    };
    e.preventDefault();

    if (this.state.user_type == "visitor") {
      connectedUser = await LoginService.CheckLoginVisitor(
        this.state.login,
        this.state.password
      );
      if (connectedUser.success) {
        this.getWishListData();
      }
    } else if (user_type == "company") {
      connectedUser = await LoginService.CheckLoginUser(
        this.state.login,
        this.state.password
      );
    }

    this.setState({ UserConected: connectedUser });
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
        {UserConected.success ? <Redirect to="/Search" /> : ""}
        <section className="container-fluid">
          <secion className="row justify-content-center">
            <section className="col-12 col-sm-6 col-md-3">
              <form className="form-container" onSubmit={this.submitLogin}>
                <div className="mb-3">
                  <div
                    className={visitorclass + " inline"}
                    onClick={(e) => {
                      this.setState({
                        user_type: "visitor",
                      });
                    }}
                  >
                    My Account
                  </div>
                  <div
                    className={companyclass + " inline"}
                    onClick={(e) => {
                      this.setState({
                        user_type: "company",
                      });
                    }}
                  >
                    My Company
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
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
                <div className="mb-3">
                  <label className="form-label fw-bold">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwd"
                    placeholder="******"
                    onChange={(e) => {
                      this.setState({
                        password: e.target.value,
                      });
                    }}
                  />
                  <a href="https://github.com/T-Mouhmouh/ComparReact">
                    Mot de passe oublié?
                  </a>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Se connecter
                </button>
                <div>{this.state.UserConected.msg}</div>
                <div>
                  <div className="inline">Pas encore inscrit?</div>
                  <div className="inline">
                    <a href="https://github.com/T-Mouhmouh/ComparReact">
                      S'inscrire gratuitement.
                    </a>
                  </div>
                </div>
              </form>
            </section>
          </secion>
        </section>
      </div>
    );
  }
}
export default LoginComponent;
