import React, { Component, useState } from "react";
import "../Style/css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginService from "../services/LoginService.js";
export class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      user_type: "visitor", //visitor or user
    };
  }

submitLogin = (e) => {
    let {user_type } = this.state;
    e.preventDefault();
    console.log("im in login Component");
   if (this.state.user_type =="visitor") {
                            var check = LoginService.CheckLoginVisitor(this.state.login,this.state.password)
                                          }
   else if (user_type =="company") {
                            var check = LoginService.CheckLoginUser(this.state.login,this.state.password)
                                  }
  };



  render() {
  var isselectedTypeClass = "selectedType";
  var visitorclass = (this.state.user_type == "visitor" ? isselectedTypeClass : "");
  var companyclass = (this.state.user_type == "company" ? isselectedTypeClass : "");
    return (
    <div >
    <section className="container-fluid">
        <secion className="row justify-content-center">
            <section className="col-12 col-sm-6 col-md-3">
                <form className="form-container" onSubmit={this.submitLogin}>
                    <div className="mb-3">
                        <div className={visitorclass+" inline"} onClick={(e) => {
                                this.setState({
                                user_type: "visitor",
                                             });
                        }}>My Account</div>
                        <div className={companyclass+" inline"} onClick={(e) => {
                                this.setState({
                                user_type: "company",
                                             });
                        }}>My Company</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="exemple@domaine.com" 
                                    onChange={(e) => {
                                                      this.setState({
                                                      login: e.target.value,
                                                                    });
                                           }}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Mot de passe</label>
                        <input type="password" className="form-control" id="passwd" placeholder="******" 
                                                onChange={(e) => {
                                                            this.setState({
                                                            password: e.target.value,
                                                                          });
                                                }}
                        />
                        <a href="https://github.com/T-Mouhmouh/ComparReact">Mot de passe oublié?</a>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Se connecter</button>
                    <div>
                        <div className="inline" >Pas encore inscrit?</div>
                        <div className="inline"><a href="https://github.com/T-Mouhmouh/ComparReact">S'inscrire gratuitement.</a></div>
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
