const CarService = {
  ShercheCar: function (marque, model, city) {
    fetch(
      "https://localhost:44330/api/Car/InitialSearchCar?Marque=" +
        marque +
        "&Model=" +
        model +
        "&City=" +
        city +
        ""
    )
      .then((res) => res.json())
      .then((data) => console.log("dataa : ", data));
  },

  secondValidationMethod: function (value) {
    //inspect the value
  },
};

export default CarService;
