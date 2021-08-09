import axios from "axios";
const CarService = {
  async ShercheCar(marque, model, city) {
    var SearchResult = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Car/InitialSearchCar?Marque=" +
          marque +
          "&Model=" +
          model +
          "&City=" +
          city +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          SearchResult.data = data.data;
          SearchResult.success = true;
          SearchResult.msg = "ok";
        } else if (data.status == 204) {
          SearchResult.data = data.data;
          SearchResult.success = false;
          SearchResult.msg = "ko";
        } else {
          SearchResult.success = false;
          SearchResult.msg = "try later !";
        }
      })
      .catch((err) => {
        console.log(err);
        SearchResult.success = false;
        SearchResult.msg = err.stack;
        SearchResult.data = "";
      });
    return SearchResult;
  },

  //get all Voitures
  async GetAllVoitures() {
    var Voitures = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get("https://localhost:44330/api/Car/GetAllVoitures")
      .then((data) => {
        if (data.status == 200) {
          Voitures.data = data.data;
          Voitures.success = true;
          Voitures.msg = "ok";
        } else if (data.status == 204) {
          Voitures.data = data.data;
          Voitures.success = false;
          Voitures.msg = "ko";
        } else {
          Voitures.success = false;
          Voitures.msg = "try later !";
        }
      })
      .catch((err) => {
        console.log(err);
        Voitures.success = false;
        Voitures.msg = err.stack;
        Voitures.data = "";
      });
    return Voitures;
  },

  //get all villes
  async GetAllvilles() {
    var villes = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get("https://localhost:44330/api/Car/GetAllVilles")
      .then((data) => {
        if (data.status == 200) {
          villes.data = data.data;
          villes.success = true;
          villes.msg = "ok";
        } else if (data.status == 204) {
          villes.data = data.data;
          villes.success = false;
          villes.msg = "ko";
        } else {
          villes.success = false;
          villes.msg = "try later !";
        }
      })
      .catch((err) => {
        console.log(err);
        villes.success = false;
        villes.msg = err.stack;
        villes.data = "";
      });
    return villes;
  },

  //get Car By Id
  async GetCarById(id_Car) {
    var Car = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get("https://localhost:44330/api/Car/GetCar?Id=" + id_Car + "")
      .then((data) => {
        if (data.status == 200) {
          Car.data = data.data;
          Car.success = true;
          Car.msg = "ok";
        } else if (data.status == 204) {
          Car.data = data.data;
          Car.success = false;
          Car.msg = "ko";
        } else {
          Car.success = false;
          Car.msg = "try later !";
        }
      })
      .catch((err) => {
        Car.success = false;
        Car.msg = err.stack;
        Car.data = "";
      });
    return Car;
  },

  async DeleteCar(id_Car) {
    var Car = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .delete("https://localhost:44330/api/Car/DeleteCar?Id=" + id_Car + "")
      .then((data) => {
        if (data.status == 201) {
          Car.data = data.data;
          Car.success = true;
          Car.msg = "ok";
        } else if (data.status == 204) {
          Car.data = data.data;
          Car.success = false;
          Car.msg = "ko";
        } else {
          Car.success = false;
          Car.msg = "try later !";
        }
      })
      .catch((err) => {
        Car.success = false;
        Car.msg = err.stack;
        Car.data = "";
      });
    return Car;
  },
};

export default CarService;
