import React, { Component, useState } from "react";
import "../Style/css/SliderComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import CarService from "../services/CarService.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
let DemoData = [
  {
    img:
      "https://maroc-diplomatique.net/wp-content/uploads/2018/10/1024px-Renault_2009_logo.svg-e1538403417655.png",
    title: "Renult",
  },
  {
    img:
      "https://i.pinimg.com/originals/f4/97/94/f49794ec7ca66c00608fefccf711cd55.jpg",
    title: "Mercides",
  },

  {
    img:
      "https://www.zastavki.com/pictures/640x480/2011Brands_Audi_logo_027961_29.jpg",
    title: "Audi",
  },
  {
    img:
      "https://img-4.linternaute.com/2jQvz-_kz_EwazKCRMIWLAZFLRE=/450x/smart/96554f639fa249b1ae8cebaa7239a4bf/ccmcms-linternaute/22661525.png",
    title: "Peugeot ",
  },
  {
    img: "https://www.android.com/static/2016/img/auto/logos/fiat_w_1x.jpg",
    title: "Fiat",
  },
  {
    img:
      "https://www.pngkey.com/png/detail/67-671397_land-rover-range-rover-logo.png",
    title: "RangeRover",
  },
  {
    img: "https://cdn.1min30.com/wp-content/uploads/2017/10/Logo-Volvo-1.jpg",
    title: "Volvo",
  },
];
export class MarqueSliderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.setState({
      data: DemoData,
    });
  }
  render() {
    let { data } = this.state;
    console.log("render:", data);
    return (
      <>
        <div class="MarqueParent container">
          <div className="row SliderRow">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              autoCapitalize
              navigation
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {this.state.data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="col-lg-2 .col-md-4 col-sm-2 SliderCart MarqueSlider">
                    <div>
                      <img className="MarqueImg" src={item.img} />
                    </div>
                    <div>{item.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}
export default MarqueSliderComponent;
