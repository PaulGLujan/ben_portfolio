import React, {Component} from 'react';
import nepal from '../images/nepal.png';
import welding from '../images/welding.png';
import food from '../images/food.jpg';
import guitar from '../images/guitar.jpg';
import suit from '../images/suit.jpg';
import Slider from "react-slick";


class ThumbnailReel extends Component {
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return(
      <div className="sliderContainer">
        <Slider {...settings}>
          <div>
            <img src={nepal} alt="nepal"/>
          </div>
          <div>
            <img src={welding} alt="welding" />
          </div>
          <div>
            <img src={food} alt="food" />
          </div>
          <div>
            <img src={guitar} alt="guitar" />
          </div>
          <div>
            <img src={suit} alt="suit" />
          </div>
        </Slider>
      </div>
    )
  }
}

export default ThumbnailReel;