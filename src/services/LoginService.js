import axios from "axios";
const LoginService = {
  // for the Visitor
  async CheckLoginVisitor(login, password) {
    var visitor = {
      data: "",
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Visitor/CheckLoginVisitor?login=" +
          login +
          "&password=" +
          password +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          visitor.data = data.data;
          visitor.msg = "ok ! :)";
        } else if (data.status == 204) {
          visitor.data = data.data;
          visitor.msg = "NOT ok :(";
        } else {
          visitor.msg = "Try later ! ";
        }
      });

    console.log("in service :", visitor);
    return visitor;
  },
  // for the User
  async CheckLoginUser(login, password) {
    var User = {
      data: "",
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Users/CheckLoginUser?login=" +
          login +
          "&password=" +
          password +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          User.data = data.data;
          User.msg = "ok ! :)";
        } else if (data.status == 204) {
          User.data = data.data;
          User.msg = "NOT ok :(";
        } else {
          User.msg = "Try later ! ";
        }
      });

    console.log("in service :", User);
    return User;
  },
};
export default LoginService;
