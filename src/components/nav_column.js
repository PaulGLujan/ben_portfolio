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
      <div className="container col-2 align-self-end mb-5">
        <h3 className='mt-1' onClick={this.landscapesClick}>Landscapes</h3>
        <h3 className='mt-1' onClick={this.portraitClick}>Portraits</h3>
        <h3 className='mt-1'>Contact</h3>
      </div>
    )
  }
}

export default connect(null, {changeGallery})(NavColumn);