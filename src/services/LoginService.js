import axios from "axios";
const LoginService = {
  // for the Visitor
  async CheckLoginVisitor(login, password) {
    var visitor = {
      data: "",
      success: false,
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
          visitor.success = true;
          visitor.msg = "";
          localStorage.setItem("connectedVisitor", JSON.stringify(data.data));
        } else if (data.status == 204) {
          visitor.data = data.data;
          visitor.success = false;
          visitor.msg = "";
        } else {
          visitor.success = false;
          visitor.msg = "try later !";
        }
      })
      .catch((err) => {
        visitor.success = false;
        visitor.msg = err.stack;
        visitor.data = "";
      });
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
          User.success = true;
          User.msg = "";
          localStorage.setItem("connectedUser", JSON.stringify(data.data));
        } else if (data.status == 204) {
          User.data = data.data;
          User.success = false;
          User.msg = "";
        } else {
          User.success = false;
          User.msg = "try later !";
        }
      })
      .catch((err) => {
        User.success = false;
        User.msg = err.stack;
        User.data = "";
      });

    return User;
  },
};
export default LoginService;
