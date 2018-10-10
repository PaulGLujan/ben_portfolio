import React, {Component} from 'react';
import nepal from '../images/nepal.png';

class ThumbnailReel extends Component {
  render(){
    return(
      <div className="container">
        <img src={nepal} alt="thumbnail" className='thumbnail img-thumbnail'/>
      </div>
    )
  }
}

export default ThumbnailReel;