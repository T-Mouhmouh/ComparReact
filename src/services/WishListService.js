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
};
export default WishListService;
