import React, {Component} from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import ImageDiv from './thumbnail_image';

class ThumbnailReel extends Component {
  constructor(props){
    super(props);
    this.state = {
      position: 0,
    }
  }

  assembleImageDiv(src, alt, name, key) {
    return <ImageDiv src={src} alt={alt} name={name} key={key}/>
  }

  render(){
    const position = this.state.position;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      arrows: false,
      lazyLoad: true,
      initialSlide: position,
    };
    const galArr = this.props.gallery;
    const thumbnailArr = [];
    for (let i = 0; i < galArr.length; i++) {
      thumbnailArr.push(this.assembleImageDiv(galArr[i]['thumbnail'], 'pic' + i, i, 'pic' + i));
    }
    return(
      <div className="sliderContainer pointer-cursor">
        <Slider {...settings}>
          {thumbnailArr}
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

export default connect(mapStateToProps)(ThumbnailReel);