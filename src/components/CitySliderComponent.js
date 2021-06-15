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
let DemoData = ["Rabat", "Sale", "Casa", "Taza", "Oujda"];
export class CitySliderComponent extends Component {
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
        <div class="SliderParent container">
          <p class="ChoiseTitle">Choisissez une Ville</p>
          <div className="row SliderRow">
            <Swiper
              spaceBetween={5}
              slidesPerView={4}
              autoCapitalize
              navigation
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {this.state.data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="col-lg-2 .col-md-4 col-sm-2 SliderCart Citycart">
                    <div>{item}</div>
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
export default CitySliderComponent;
