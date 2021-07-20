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
  "https://www.moteur.ma/media/photos/ads/resized/audi-a4-268599.JPG",
  "https://www.moteur.ma/media/photos/ads/resized/audi-a4-219205.JPG",
  "https://www.moteur.ma/media/photos/ads/resized/audi-a4-819248.JPG",
  "https://www.moteur.ma/media/photos/ads/resized/audi-a4-256259.JPG",
  "https://www.moteur.ma/media/photos/ads/resized/audi-a4-207953.JPG",
];
export class FpImgSlider extends Component {
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {this.state.data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="SliderCart FpSliderImg">
                  <div>
                    <img className="FpImg" src={item} />
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
