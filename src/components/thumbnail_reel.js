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
  clickPic(elm){
    console.log('clickpic',elm)
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
            <img src={nepal} alt="nepal" onClick={(e)=>{this.clickPic(e.target.getAttribute('alt'))}}/>
          </div>
          <div>
            <img src={welding} alt="welding" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={food} alt="food" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={guitar} alt="guitar" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={suit} alt="suit" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={chinaPortrait} alt="chinaPortrait" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={jTree} alt="jTree" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={lola} alt="lola" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={roxy} alt="roxy" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
          <div>
            <img src={tigerLeap} alt="tigerLeap" onClick={(e) => { this.clickPic(e.target.getAttribute('alt')) }}/>
          </div>
        </Slider>
      </div>
    )
  }
}

export default ThumbnailReel;