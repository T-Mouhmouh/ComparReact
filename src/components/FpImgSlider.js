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
var PATHCar = "https://localhost:44330/PhotosCar/";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export class FpImgSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.setState({
      data: this.props.imgList,
    });
  }
  render() {
    let { data } = this.state;
    return (
      <>
        <div className="row col-8 ">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            //autoCapitalize
            navigation
            //autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
          >
            {this.state.data != null &&
              this.state.data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="SliderCart FpSliderImg">
                    <div>
                      <img className="FpImg" src={PATHCar + item} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </>
    );
  }
}
export default FpImgSlider;
