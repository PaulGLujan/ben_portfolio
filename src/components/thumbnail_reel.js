import React, {Component} from 'react';
import nepal from '../images/nepal.png';
import welding from '../images/welding.png';
import food from '../images/food.jpg';
import guitar from '../images/guitar.jpg';
import suit from '../images/suit.jpg';

class ThumbnailReel extends Component {
  render(){
    return(
      <div className="container row">
        <h1><i className="fas fa-caret-left mr-5"></i></h1>
        <div className="carouselWindow row">
          <img src={nepal} alt="thumbnail" className='thumbnail img-thumbnail'/>
          <img src={welding} alt="thumbnail" className='thumbnail img-thumbnail'/>
          <img src={food} alt="thumbnail" className='thumbnail img-thumbnail' />
          <img src={guitar} alt="thumbnail" className='thumbnail img-thumbnail' />
          <img src={suit} alt="thumbnail" className='thumbnail img-thumbnail' />
        </div>
        <h1><i className="fas fa-caret-right ml-5"></i></h1>
      </div>
    )
  }
}

export default ThumbnailReel;