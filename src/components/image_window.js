import React, {Component} from 'react';
import nepal from '../images/nepal.png';
import welding from '../images/welding.png';
import food from '../images/food.jpg';
import guitar from '../images/guitar.jpg';
import { Carousel } from 'react-responsive-carousel';

class ImageWindow extends Component {
  render(){
    return(
      <div className="container">
        <Carousel showIndicators={false} showThumbs={false} selectedItem={0}>
          <div>
            <img src={nepal}/>
          </div>
          <div>
            <img src={welding}/>
          </div>
          <div>
            <img src={food} />
          </div>
          <div>
            <img src={guitar} />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default ImageWindow;