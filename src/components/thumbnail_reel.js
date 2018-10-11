import React, {Component} from 'react';
import nepal from '../images/nepal.png';
import welding from '../images/welding.png';
import food from '../images/food.jpg';
import guitar from '../images/guitar.jpg';
import suit from '../images/suit.jpg';
import chinaPortrait from '../images/china_portrait.png';
import jTree from '../images/joshua_tree.png';
import lola from '../images/lola.png';
import roxy from '../images/roxy.png';
import tigerLeap from '../images/tiger_leaping_gorge.png';
import Slider from "react-slick";


class ThumbnailReel extends Component {
  constructor(props){
    super(props);
    this.clickPic = this.clickPic.bind(this);
  }
  clickPic(){
    console.log('clickPic')
  }
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
            <img src={nepal} alt="nepal" onClick={this.clickPic}/>
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
          <div>
            <img src={chinaPortrait} alt="chinaPortrait" />
          </div>
          <div>
            <img src={jTree} alt="jTree" />
          </div>
          <div>
            <img src={lola} alt="lola" />
          </div>
          <div>
            <img src={roxy} alt="roxy" />
          </div>
          <div>
            <img src={tigerLeap} alt="tigerLeap" />
          </div>
        </Slider>
      </div>
    )
  }
}

export default ThumbnailReel;