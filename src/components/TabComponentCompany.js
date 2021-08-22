import React, { Component, useState } from "react";
import "../Style/css/header.css";
import "bootstrap/dist/css/bootstrap.css";
import CarCompanyListComponent from "./CarCompanyListComponent";
import KpiComponent from "./KpiComponent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ReservationListComponent } from "../components/ReservationListComponent";
import CarService from "../services/CarService";
export class TabComponentCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false,
    };
  }
  handleClickOpen = () => {
    this.setState({
      setOpen: true,
    });
  };
  handleClose = async (etat) => {
    var connectedUser = localStorage.getItem("connectedUser");
    var connectedUserJ = JSON.parse(connectedUser);

    if (etat == "valider") {
      var tt = await CarService.boostIt(connectedUserJ.id_user);
      if (tt.success) {
      }
      document.getElementById("btnboost").disabled = true;
      document.getElementById("btnboost").display = "none";
    }

    this.setState({
      setOpen: false,
    });
  };

  render() {
    var connectedUser = localStorage.getItem("connectedUser");
    var connectedUserJ = JSON.parse(connectedUser);

    return (
      <>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              className="nav-link active "
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i class="fas fa-folder-plus TabHeart"></i>
              Ajouter /<i class="fas fa-list-ol "></i>List
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className="nav-link "
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#WishList"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i class="fas fa-heart TabHeart"></i>
              KPI
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className="nav-link "
              id="reservation-tab"
              data-bs-toggle="tab"
              data-bs-target="#reservation"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i class="fas fa-handshake TabHeart"></i>
              Réservation
            </button>
          </li>

          {connectedUserJ.sponsor == "yes" && (
            <button
              class="btn btn-warning boostit"
              id="btnboost"
              disabled
              onClick={() => this.handleClickOpen()}
            >
              <i class="fas fa-rocket"></i>
              Boost it !
            </button>
          )}
          {connectedUserJ.sponsor == "Non" && (
            <button
              class="btn btn-warning boostit"
              id="btnboost"
              onClick={() => this.handleClickOpen()}
            >
              <i class="fas fa-rocket"></i>
              Boost it !
            </button>
          )}
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <CarCompanyListComponent />
          </div>
          <div
            className="tab-pane fade  "
            id="WishList"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <KpiComponent />
          </div>
          <div
            className="tab-pane fade "
            id="reservation"
            role="tabpanel"
            aria-labelledby="reservation-tab"
          >
            <ReservationListComponent isCompany={true} />
          </div>
        </div>

        <Dialog
          open={this.state.setOpen}
          onClose={() => this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sponsorisé</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div>pour sponsorisés vous voitures</div>
              <p>pour être en premier du recherche</p>
              <div>abonnement :</div>
              <tr>
                <b>800dh /3 mois</b>
              </tr>
              <tr>
                <b>1100dh /6 mois</b>
              </tr>
              <tr>
                <b>1800dh /12 mois</b>
              </tr>
              RIB : 123 358 4428 34245
              <div>ou appeler : 0645323427 pour plus d'informations</div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <input
              type="button"
              value="Valider"
              onClick={() => this.handleClose("valider")}
              color="primary"
            />
            <input
              type="button"
              value="Cancel"
              onClick={() => this.handleClose("close")}
              color="primary"
            />
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
export default TabComponentCompany;
