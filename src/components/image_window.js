import React, {Component} from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import {connect} from 'react-redux';
import ImageDiv from './carousel_image';

class ImageWindow extends Component {
  constructor(props){
    super(props);
    this.assembleImageDiv = this.assembleImageDiv.bind(this);
  }
  assembleImageDiv(src, alt, name, key){
    return <ImageDiv src={src} alt={alt} name={name} key={key}/>
  }
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const galArr = this.props.gallery;
    const outputArr = [];
    for (let i=0; i<galArr.length; i++){
      outputArr.push(this.assembleImageDiv(galArr[i], 'pic'+i, i, 'pic'+i));
    }
    return(
      <div className="container imageWindow">
        {/* <Carousel showIndicators={false} showThumbs={false} selectedItem={parseInt(this.props.position)}> */}
        <Slider {...settings}>
          {outputArr}
        </Slider>
        {/* </Carousel> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    position: state.picturePosition.position,
    gallery: state.gallery.gallery,
  }
}

export default connect(mapStateToProps)(ImageWindow);