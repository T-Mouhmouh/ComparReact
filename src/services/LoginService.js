const LoginService = {
    // for the Visitor
  CheckLoginVisitor: function (login,password) {
    fetch(
      "https://localhost:44330/api/Visitor/CheckLoginVisitor?login=" +
        login +
        "&password=" +
        password +
        ""
    )
      .then((res) => res.json())
      .then((data) => console.log("dataVisitor : ", data));
  },
  // for the User
CheckLoginUser: function (login,password) {
    fetch(
      "https://localhost:44330/api/Users/CheckLoginUser?login=" +
        login +
        "&password=" +
        password +
        ""
    )
      .then((res) => res.json())
      .then((data) => console.log("dataUser : ", data));
  },


  secondValidationMethod: function (value) {
    //inspect the value
  },
};

export default LoginService;
