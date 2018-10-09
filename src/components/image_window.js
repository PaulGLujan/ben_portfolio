import React, {Component} from 'react';
import nepal from '../images/nepal.png';

class ImageWindow extends Component {
  render(){
    return(
      <div className="container">
        <img src={nepal} alt="Nepal" className='col-12'/>
      </div>
    )
  }
}

export default ImageWindow;