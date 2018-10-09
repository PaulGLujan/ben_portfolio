import React, {Component} from 'react';

class ImageToggle extends Component {
  render(){
    return(
      <div className="container col-4 row justify-content-between">
        <h3><i class="fas fa-caret-left"></i> Previous</h3>
        <h3>Next <i class="fas fa-caret-right"></i></h3>
      </div>
    )
  }
}

export default ImageToggle;