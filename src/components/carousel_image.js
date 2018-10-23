import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import { connect } from 'react-redux';

const carouselImg = (props)=>{
  const {imgLg, imgSm, alt} = props;
  return(  
    <ProgressiveImage src={imgLg} placeholder={imgSm}>
      {src => <img src={src} alt={alt} />}
    </ProgressiveImage>
    )
}

function mapStateToProps(state) {
  return {
    galleryType: state.gallery.galleryType,
    position: state.picturePosition.position,
  }
}

export default connect(mapStateToProps)(carouselImg);