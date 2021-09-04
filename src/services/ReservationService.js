import axios from "axios";
const ReservationService = {
  async AddReservation(ReservationData) {
    var Reservation = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .post(
        "https://localhost:44330/api/Reservation/AddReservation",
        ReservationData
      )
      .then((data) => {
        if (data.status == 201) {
          Reservation.data = data.data;
          Reservation.success = true;
          Reservation.msg = "ok";
        } else if (data.status == 204) {
          Reservation.data = data.data;
          Reservation.success = false;
          Reservation.msg = "ko";
        } else {
          Reservation.success = false;
          Reservation.msg = "try later !";
        }
      })
      .catch((err) => {
        Reservation.success = false;
        Reservation.msg = err.stack;
        Reservation.data = "";
      });

    return Reservation;
  },

  async getReservationListByVisitor(id_visitor) {
    var reservation = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Reservation/GetReservationByVisitor?Id=" +
          id_visitor +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          reservation.data = data.data;
          reservation.success = true;
          reservation.msg = "ok";
        } else if (data.status == 204) {
          reservation.data = data.data;
          reservation.success = false;
          reservation.msg = "ko";
        } else {
          reservation.success = false;
          reservation.msg = "try later !";
        }
      })
      .catch((err) => {
        reservation.success = false;
        reservation.msg = err.stack;
        reservation.data = "";
      });
    return reservation;
  },

  async getReservationListByCompany(id_company) {
    var reservation = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Reservation/GetReservationByCompany?Company_Id=" +
          id_company +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          reservation.data = data.data;
          reservation.success = true;
          reservation.msg = "ok";
        } else if (data.status == 204) {
          reservation.data = data.data;
          reservation.success = false;
          reservation.msg = "ko";
        } else {
          reservation.success = false;
          reservation.msg = "try later !";
        }
      })
      .catch((err) => {
        reservation.success = false;
        reservation.msg = err.stack;
        reservation.data = "";
      });
    return reservation;
  },

  async review(id_reservation, reviewWord) {
    var Reservation = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .put(
        "https://localhost:44330/api/Reservation/Updatereview?id_reservation=" +
          id_reservation +
          "&reviewWord=" +
          reviewWord +
          ""
      )
      .then((data) => {
        if (data.status == 201) {
          Reservation.data = data.data;
          Reservation.success = true;
          Reservation.msg = "ok";
        } else if (data.status == 204) {
          Reservation.data = data.data;
          Reservation.success = false;
          Reservation.msg = "ko";
        } else {
          Reservation.success = false;
          Reservation.msg = "try later !";
        }
      })
      .catch((err) => {
        Reservation.success = false;
        Reservation.msg = err.stack;
        Reservation.data = "";
      });

    return Reservation;
  },
};
export default ReservationService;
