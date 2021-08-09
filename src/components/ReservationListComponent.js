import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Style/css/ReservationList.css";
import ReservationService from "../services/ReservationService.js";
import { Link } from "react-router-dom";
var img = "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG";
var PATHVisitor = "https://localhost:44330/PhotosVisitor/";
export class ReservationListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservationList: [{}],
    };
  }

  componentDidMount = async () => {
    var connected = localStorage.getItem("connectedVisitor");
    var connectedJ = JSON.parse(connected);
    var connectedUser = localStorage.getItem("connectedUser");
    var connectedUserJ = JSON.parse(connectedUser);
    if (connectedJ != null) {
      var reservationList =
        await ReservationService.getReservationListByVisitor(
          connectedJ.id_visitor
        );
    }
    if (connectedUserJ != null) {
      var reservationList =
        await ReservationService.getReservationListByCompany(
          connectedUserJ.id_user
        );
    }

    this.setState({
      reservationList: reservationList.data,
    });
  };

  convertdate = (datetoconvert) => {
    if (datetoconvert != undefined) {
      var the_arr = datetoconvert.split("T");
      the_arr.pop();
      return the_arr.join("T");
    } else {
      return datetoconvert;
    }
  };
  render() {
    let { reservationList } = this.state;
    {
      !this.props.isCompany &&
        window.history.pushState("", "", "http://localhost:3000/ProfilePage");
    }

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Marque</th>
              <th scope="col">Model</th>
              <th scope="col">Feul Type</th>
              <th scope="col">Price</th>
              <th scope="col">Agence</th>
              <th scope="col">Date Réservation</th>
              {this.props.isCompany && <th scope="col"> Nom et Prénom</th>}
              {this.props.isCompany && <th scope="col">Numéro de Télephone</th>}
              {this.props.isCompany && <th scope="col">Profile</th>}
              <th scope="col">Nbr jours</th>
              {this.props.isCompany && <th scope="col">évaluation</th>}
            </tr>
          </thead>
          <tbody>
            {reservationList.map((item, index) => (
              <tr>
                <th scope="row">
                  <Link
                    to={{
                      pathname: "FicheProduitPage",
                      state: { id_car: item?.id_car },
                    }}
                  >
                    <img width="70px" height="70px" src={img}></img>
                  </Link>
                </th>
                <td>{item.mark}</td>
                <td>{item.model}</td>
                <td>{item.fuel_type}</td>
                <td>{item.price}</td>
                <td>{item.fullName}</td>
                <td>{this.convertdate(item.date_reservation)}</td>
                {this.props.isCompany && (
                  <td>
                    <img
                      width="70px"
                      height="70px"
                      src={PATHVisitor + item.visitorImgName}
                    />
                  </td>
                )}
                {this.props.isCompany && <td>{item.visitorName}</td>}
                {this.props.isCompany && <td>{item.visitorPhoneNumber}</td>}
                <td>{item.nbrjrs}</td>
                {this.props.isCompany && (
                  <td>
                    <button type="button" class=" btn-success  likelikeBtn ">
                      <i class="far fa-thumbs-up"></i>
                    </button>
                    <button type="button" class=" btn-success">
                      <i class="far fa-thumbs-down"></i>
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ReservationListComponent;
