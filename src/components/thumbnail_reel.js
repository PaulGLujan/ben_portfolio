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
    this.toggleLeft = this.toggleLeft.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
  }

  componentDidUpdate(){
    this.slider.slickGoTo(this.state.position);
  }

  toggleLeft() {
    console.log('left');
    const position = this.state.position;
    const leftPos = position - 1;
    if (leftPos >= 0) {
      this.setState({
        ...this.state,
        position: leftPos,
      })
    }
  }

  toggleRight() {
    console.log('right');
    const position = this.state.position;
    const numOfPics = this.props.numOfPics;
    let rightPos = position + 1;
    if (rightPos < numOfPics) {
      this.setState({
        ...this.state,
        position: rightPos,
      });
    }
    setTimeout(
      ()=>{console.log(this.state)},
      2000
    )
  }

  assembleImageDiv(src, alt, name, key) {
    return <ImageDiv src={src} alt={alt} name={name} key={key}/>
  }

  render(){
    const position = this.state.position;
    console.log('render position', position);
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
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
        <Slider ref={e => this.slider = e} {...settings}>
          {thumbnailArr}
        </Slider>
        <h2 onClick={this.toggleLeft}>left</h2>
        <h2 onClick={this.toggleRight}>right</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery.gallery,
    numOfPics: state.gallery.numOfPics,
  }
}

export default connect(mapStateToProps)(ThumbnailReel);