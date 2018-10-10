import React, {Component} from 'react';
import nepal from '../images/nepal.png';
import welding from '../images/welding.png';
import { Carousel } from 'react-responsive-carousel';

class ImageWindow extends Component {
  render(){
    return(
      <div className="container">
        <Carousel showIndicators={false} showThumbs={false}>
          <div>
            <img src={nepal}/>
          </div>
          <div>
            <img src={welding}/>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default ImageWindow;