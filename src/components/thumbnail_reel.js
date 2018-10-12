import React, {Component} from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import ImageDiv from './thumbnail_image';

class ThumbnailReel extends Component {
  assembleImageDiv(src, alt, name, key) {
    return <ImageDiv src={src} alt={alt} name={name} key={key}/>
  }

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1
    };
    const galArr = this.props.gallery;
    const thumbnailArr = [];
    for (let i = 0; i < galArr.length; i++) {
      thumbnailArr.push(this.assembleImageDiv(galArr[i], 'pic' + i, i, 'pic' + i));
    }
    return(
      <div className="sliderContainer">
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