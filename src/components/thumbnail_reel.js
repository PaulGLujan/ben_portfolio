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
import {updatePicPos} from '../actions/index';
import { connect } from 'react-redux';

class ThumbnailReel extends Component {
  constructor(props){
    super(props);
    this.clickPic = this.clickPic.bind(this);
  }
  clickPic(elm){
    this.props.updatePicPos(elm);
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
            <img src={nepal} alt="nepal" num={0} onClick={(e)=>{this.clickPic(e.target.getAttribute('num'))}}/>
          </div>
          <div>
            <img src={welding} alt="welding" num={1} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={food} alt="food" num={2} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={guitar} alt="guitar" num={3} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={suit} alt="suit" num={4} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={chinaPortrait} alt="chinaPortrait" num={5} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={jTree} alt="jTree" num={6} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={lola} alt="lola" num={7} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={roxy} alt="roxy" num={8} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
          <div>
            <img src={tigerLeap} alt="tigerLeap" num={9} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
          </div>
        </Slider>
      </div>
    )
  }
}

export default connect(null, {updatePicPos})(ThumbnailReel);