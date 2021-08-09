import axios from "axios";
const RegistrationService = {
  async Registration(data, type) {
    var RegisterUser = {
      data: "",
      success: false,
      msg: "",
    };
    var cc =
      type == "visitor"
        ? "https://localhost:44330/api/Visitor/AddVisitor"
        : "https://localhost:44330/api/Users/AddUsers";
    await axios
      .post(cc, data)
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
