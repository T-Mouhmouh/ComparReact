import React, { Component, useState } from "react";
import "../Style/css/CompanyProductComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import StoreService from "../services/StoreService";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";
var img = "https://img.e-marketing.fr/Images/Breves/breve48883-0.JPG";
var PATHCar = "https://localhost:44330/PhotosCar/";
export class CompanyProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {}

  componentWillMount = async () => {
    var tt = await StoreService.GetMoreStoreCars(this.props.idCompany);

    this.setState({ data: tt.data });
  };

  splitimg(img) {
    var words;
    if (img != null) words = img.split("__");
    if (img == null) {
      return img;
    } else return words[0];
  }
  splitimg(img) {
    var words;
    if (img != null) words = img.split("__");
    if (img == null) {
      return img;
    } else return words[0];
  }
  render() {
    let { data } = this.state;
    return (
      <div className="CompanyProductCard container">
        <div className="row">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            autoCapitalize
            navigation
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="cardpr" index={index}>
                  <div className="test">
                    <div className="ProductImg">
                      <img src={PATHCar + this.splitimg(item.imgName)} />
                    </div>

                    <div>
                      <div className="ProductPrice">{item.price} DH</div>
                      <div className="row">
                        <div className="col ProductMarque">{item.mark}</div>
                        <div className="col ProductModele">{item.model}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}
export default CompanyProductComponent;
