import React, {Component} from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import {connect} from 'react-redux';
import ImageDiv from './carousel_image';
import {withRouter} from 'react-router-dom';
import landscapes from '../assets/images/landscapes/landscapes';
import portraits from '../assets/images/portraits/portraits';

class ImageWindow extends Component {
  constructor(props){
    super(props);
    this.assembleImageDiv = this.assembleImageDiv.bind(this);
    this.assembleGalleryDivs = this.assembleGalleryDivs.bind(this);
    this.getGalleryFromURL = this.getGalleryFromURL.bind(this);
  }
  componentDidUpdate(prevProps) {
    const position = this.props.match.params.position;
    console.log(position);
    // if (prevProps.position !== this.props.position) {
    //   this.slider.slickGoTo(this.props.position);
    // }
  }
  assembleImageDiv(imgLg, imgSm, alt){
    return <ImageDiv imgLg={imgLg} imgSm={imgSm} alt={alt}/>
  }
  getGalleryFromURL(){
    const galleryStr = this.props.match.params.gallery;
    switch (galleryStr) {
      case 'landscapes':
        return landscapes;
      case 'portraits':
        return portraits; 
    }
  }
  assembleGalleryDivs(){
    let galArr = this.getGalleryFromURL();
    const outputArr = [];
    for (let i = 0; i < galArr.length; i++) {
      outputArr.push(
        this.assembleImageDiv(galArr[i]['pic'], galArr[i]['small'], 'pic'+i)
      );
    }
    return outputArr;
  }
  render(){
    const position = parseInt(this.props.match.params.position);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      lazyLoad: true,
      initialSlide: position,
    };
    return(
      <div className="imageWindow">
        <Slider ref={e => this.slider = e} {...settings}>
          {this.assembleGalleryDivs()}
        </Slider>
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

export default withRouter(connect(mapStateToProps)(ImageWindow));