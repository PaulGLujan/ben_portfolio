import React, {Component} from 'react';
import Slider from "react-slick";
import {updatePicPos} from '../actions/index';
import { connect } from 'react-redux';
import ImageDiv from './carousel_image';

class ThumbnailReel extends Component {
  constructor(props){
    super(props);
    this.clickPic = this.clickPic.bind(this);
  }
  clickPic(elm){
    this.props.updatePicPos(elm);
  }
  assembleImageDiv(src, alt, name, key) {
    return <ImageDiv src={src} alt={alt} name={name} key={key} onClick={(e) => { this.clickPic(e.target.getAttribute('num')) }}/>
  }
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    const galArr = this.props.gallery;
    const outputArr = [];
    for (let i = 0; i < galArr.length; i++) {
      outputArr.push(this.assembleImageDiv(galArr[i], 'pic' + i, i, 'pic' + i));
    }
    return(
      <div className="sliderContainer">
        <Slider {...settings}>
          {outputArr}
          {/* <div>
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
          </div> */}
        </Slider>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery.gallery,
  }
}

export default connect(mapStateToProps, {updatePicPos})(ThumbnailReel);