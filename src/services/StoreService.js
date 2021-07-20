import axios from "axios";
const StoreService = {
  //get Store infos
  async GetStoreInfos(id) {
    var Store = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get("https://localhost:44330/api/Company/GetCompany?Id=" + id + "")
      .then((data) => {
        if (data.status == 200) {
          Store.data = data.data;
          Store.success = true;
          Store.msg = "ok";
        } else if (data.status == 204) {
          Store.data = data.data;
          Store.success = false;
          Store.msg = "ko";
        } else {
          Store.success = false;
          Store.msg = "try later !";
        }
      })
      .catch((err) => {
        Store.success = false;
        Store.msg = err.stack;
        Store.data = "";
      });
    return Store;
  },

  //get more Store car
  async GetMoreStoreCars(id_company) {
    var MoreStoreCars = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Car/GetCarByCompany?Company_Id=" +
          id_company +
          ""
      )
      .then((data) => {
        if (data.status == 200) {
          MoreStoreCars.data = data.data;
          MoreStoreCars.success = true;
          MoreStoreCars.msg = "ok";
        } else if (data.status == 204) {
          MoreStoreCars.data = data.data;
          MoreStoreCars.success = false;
          MoreStoreCars.msg = "ko";
        } else {
          MoreStoreCars.success = false;
          MoreStoreCars.msg = "try later !";
        }
      })
      .catch((err) => {
        MoreStoreCars.success = false;
        MoreStoreCars.msg = err.stack;
        MoreStoreCars.data = "";
      });
    return MoreStoreCars;
  },
};

export default StoreService;
