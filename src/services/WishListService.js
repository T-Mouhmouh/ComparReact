import axios from "axios";
const WishListService = {
  // for the Visitor
  async GetWishList(id_Visitor) {
    var visitor = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .get(
        "https://localhost:44330/api/Wishlist/GetWishlistByVisitor?Visitor_Id=" +
          id_Visitor +
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
    return visitor;
  },

  async AddToWishList(id_car) {
    var connected = localStorage.getItem("connectedVisitor");
    var connectedJ = JSON.parse(connected);
    var dataToInsert = {
      id_wishlist: 0,
      id_visitor: connectedJ.id_visitor,
      id_car: id_car,
      deleted: 0,
    };

    var Wishlist = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .post("https://localhost:44330/api/Wishlist/AddWishlist", dataToInsert)
      .then((data) => {
        if (data.status == 201) {
          Wishlist.data = data.data;
          Wishlist.success = true;
          Wishlist.msg = "ok";
        } else if (data.status == 204) {
          Wishlist.data = data.data;
          Wishlist.success = false;
          Wishlist.msg = "ko";
        } else {
          Wishlist.success = false;
          Wishlist.msg = "try later !";
        }
      })
      .catch((err) => {
        Wishlist.success = false;
        Wishlist.msg = err.stack;
        Wishlist.data = "";
      });

    if (Wishlist.success == true) {
      this.WishlistInisialisation(Wishlist.success);
    }

    return Wishlist;
  },

  async DeleteFromWishList(id_car) {
    var Wishlist = {
      data: "",
      success: false,
      msg: "",
    };
    await axios
      .delete(
        "https://localhost:44330/api/Wishlist/DeleteWishlist?Id=" + id_car
      )
      .then((data) => {
        if (data.status == 201) {
          Wishlist.data = data.data;
          Wishlist.success = true;
          Wishlist.msg = "ok";
        } else if (data.status == 204) {
          Wishlist.data = data.data;
          Wishlist.success = false;
          Wishlist.msg = "ko";
        } else {
          Wishlist.success = false;
          Wishlist.msg = "try later !";
        }
      })
      .catch((err) => {
        Wishlist.success = false;
        Wishlist.msg = err.stack;
        Wishlist.data = "";
      });

    if (Wishlist.success == true) {
      this.WishlistInisialisation(Wishlist.success);
    }
    return Wishlist;
  },

  async WishlistInisialisation(success) {
    var connected = localStorage.getItem("connectedVisitor");
    var connectedJ = JSON.parse(connected);
    if (success == true) {
      var tt = await this.GetWishList(connectedJ.id_visitor);
      var carWishListIds = [];
      tt.data.map((item) => {
        carWishListIds.push(item.id_car);
      });
      // push carWishListIds to localStoreg
      localStorage.setItem("WishListCar", carWishListIds);
    }
  },
};
export default WishListService;
