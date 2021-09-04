import axios from "axios";
const CarService = {
  //initialSerach
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
        SearchResult.success = false;
        SearchResult.msg = err.stack;
        SearchResult.data = "";
      });
    return SearchResult;
  },

  //FilterPlus
  async filterePlus(filterePlusobj) {
    var SearchResult = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Car/SearchCarPlus?Marque=" +
          filterePlusobj.Marque +
          "&Model=" +
          filterePlusobj.Model +
          "&City=" +
          filterePlusobj.City +
          "&minprice=" +
          filterePlusobj.minprice +
          "&maxprice=" +
          filterePlusobj.maxprice +
          "&minmileage=" +
          filterePlusobj.minmilage +
          "&maxmileage=" +
          filterePlusobj.maxmilage +
          "&minnbrPlaces=" +
          filterePlusobj.minnmrPlaces +
          "&maxnbrPlaces=" +
          filterePlusobj.maxnmrPlaces +
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
  async GetKpi(Company_Id) {
    var Car = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Car/GetKpi?Company_Id=" + Company_Id + ""
      )
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

  async UpdateActiveCar(id_Car, active) {
    var Result = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .put(
        "https://localhost:44330/api/Car/UpdateActiveCar?id_car=" +
          id_Car +
          "&active=" +
          active +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          Result.data = data.data;
          Result.success = true;
          Result.msg = "ok";
        } else if (data.status == 204) {
          Result.data = data.data;
          Result.success = false;
          Result.msg = "ko";
        } else {
          Result.success = false;
          Result.msg = "try later !";
        }
      })
      .catch((err) => {
        Result.success = false;
        Result.msg = err.stack;
        Result.data = "";
      });
    return Result;
  },

  async boostIt(id_company) {
    var Result = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .put(
        "https://localhost:44330/api/Users/UpdateSponsor?User_Id=" +
          id_company +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          Result.data = data.data;
          Result.success = true;
          Result.msg = "ok";
        } else if (data.status == 204) {
          Result.data = data.data;
          Result.success = false;
          Result.msg = "ko";
        } else {
          Result.success = false;
          Result.msg = "try later !";
        }
      })
      .catch((err) => {
        Result.success = false;
        Result.msg = err.stack;
        Result.data = "";
      });
    return Result;
  },

  async AddCar(data) {
    var RegisterUser = {
      data: "",
      success: false,
      msg: "",
    };

    await axios
      .post("https://localhost:44330/api/Car/AddCar", data)
      .then((data) => {
        if (data.status == 201) {
          RegisterUser.data = data.data;
          RegisterUser.success = true;
          RegisterUser.msg = "ok";
        } else if (data.status == 204) {
          RegisterUser.data = data.data;
          RegisterUser.success = false;
          RegisterUser.msg = "ko";
        } else {
          RegisterUser.success = false;
          RegisterUser.msg = "try later !";
        }
      })
      .catch((err) => {
        RegisterUser.success = false;
        RegisterUser.msg = err.stack;
        RegisterUser.data = "";
      });

    return RegisterUser;
  },

  async UpdateCar(data) {
    var RegisterUser = {
      data: "",
      success: false,
      msg: "",
    };

    await axios
      .put("https://localhost:44330/api/Car/UpdateCar", data)
      .then((data) => {
        if (data.status == 201) {
          RegisterUser.data = data.data;
          RegisterUser.success = true;
          RegisterUser.msg = "ok";
        } else if (data.status == 204) {
          RegisterUser.data = data.data;
          RegisterUser.success = false;
          RegisterUser.msg = "ko";
        } else {
          RegisterUser.success = false;
          RegisterUser.msg = "try later !";
        }
      })
      .catch((err) => {
        RegisterUser.success = false;
        RegisterUser.msg = err.stack;
        RegisterUser.data = "";
      });

    return RegisterUser;
  },
};

export default CarService;
