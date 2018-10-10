import React, {Component} from 'react';
import nepal from '../images/nepal.png';
import welding from '../images/welding.png';
import { Carousel } from 'react-responsive-carousel';

class ImageWindow extends Component {
  render(){
    return(
      <div className="container">
        <Carousel showIndicators={false}>
          <div>
            <img src={nepal}/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={welding}/>
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
        <img src={nepal} alt="Nepal" className='col-12'/>
      </div>
    )
  }
}

export default ImageWindow;