import axios from "axios";
const RegistrationService = {
  // for the Visitor

  // async Registration(data) {
  //   var visitor = {
  //     data: "",
  //     success: false,
  //     msg: "",
  //   };
  //   await axios({
  //     method: "post",
  //     url: "https://localhost:44330/api/Visitor/AddVisitor",
  //     data: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Credentials": true,
  //     },
  //   })
  //     .then((data) => {
  //       if (data.status == 200) {
  //         visitor.data = data.data;
  //         visitor.success = true;
  //         visitor.msg = "ok";
  //       } else if (data.status == 204) {
  //         visitor.data = data.data;
  //         visitor.success = false;
  //         visitor.msg = "ko";
  //       } else {
  //         visitor.success = false;
  //         visitor.msg = "try later !";
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       visitor.success = false;
  //       visitor.msg = err.stack;
  //       visitor.data = "";
  //     });
  //   console.log("in service :", visitor);
  //   return visitor;
  // },

  async Registration(data) {
    var RegisterUser = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .post("https://localhost:44330/api/Visitor/AddVisitor", data)
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
        console.log(err);
        RegisterUser.success = false;
        RegisterUser.msg = err.stack;
        RegisterUser.data = "";
      });

    return RegisterUser;
  },

  async Update(data) {
    var RegisterUser = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .put("https://localhost:44330/api/Visitor/UpdateVisitor", data)
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
        console.log(err);
        RegisterUser.success = false;
        RegisterUser.msg = err.stack;
        RegisterUser.data = "";
      });

    return RegisterUser;
  },
};
export default RegistrationService;
