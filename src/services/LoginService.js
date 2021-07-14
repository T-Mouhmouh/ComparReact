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
          visitor.msg = "ok";
        } else if (data.status == 204) {
          visitor.data = data.data;
          visitor.success = false;
          visitor.msg = "ko";
        } else {
          visitor.success = false;
          visitor.msg = "try later !";
        }
      })
      .catch((err) => {
        console.log(err);
        visitor.success = false;
        visitor.msg = err.stack;
        visitor.data = "";
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
          User.success = true;
          User.msg = "ok";
        } else if (data.status == 204) {
          User.data = data.data;
          User.success = false;
          User.msg = "ko";
        } else {
          User.success = false;
          User.msg = "try later !";
        }
      })
      .catch((err) => {
        console.log(err);
        User.success = false;
        User.msg = err.stack;
        User.data = "";
      });

    console.log("in service :", User);
    return User;
  },
};
export default LoginService;
