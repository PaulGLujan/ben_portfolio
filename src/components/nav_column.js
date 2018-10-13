import React, {Component} from 'react';
import {changeGallery} from '../actions/index';
import {connect} from 'react-redux';
import portraits from '../assets/images/portraits/portraits';
import landscapes from '../assets/images/landscapes/landscapes';

class NavColumn extends Component {
  constructor(props){
    super(props);
    this.portraitClick = this.portraitClick.bind(this);
    this.landscapesClick = this.landscapesClick.bind(this);
  }
  portraitClick(){
    this.props.changeGallery(portraits);
  }
  landscapesClick(){
    this.props.changeGallery(landscapes);
  }
  render(){
    return(
      <div className="col-2 flex-column justify-content-between d-flex">
        <div className="text-center mt-5">
          <h1 className="">Benjamin</h1>
          <h1>L.</h1>
          <h1>Nguyen</h1>
        </div>
        <div className="mb-5 ml-5">
          <h3 className='mt-1 pointer-cursor' onClick={this.landscapesClick}>Landscapes</h3>
          <h3 className='mt-1 pointer-cursor' onClick={this.portraitClick}>Portraits</h3>
          <h3 className='mt-1 pointer-cursor'>Contact</h3>
        </div>
      </div>
    )
  }
}

export default connect(null, {changeGallery})(NavColumn);