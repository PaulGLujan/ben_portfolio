import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updatePicPos } from '../actions';

class ImageToggle extends Component {
  constructor(props){
    super(props);
    this.toggleLeft = this.toggleLeft.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
  }
  toggleLeft(){
    let position = parseInt(this.props.position) - 1;
    this.props.updatePicPos(position);
  }
  toggleRight() {
    let position = parseInt(this.props.position) + 1;
    this.props.updatePicPos(position);
  }
  render(){
    return(
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 row justify-content-between">
        <h3 onClick={this.toggleLeft}><i className="fas fa-caret-left"></i> Previous</h3>
        <h3 onClick={this.toggleRight} className='mr-4'>Next <i className="fas fa-caret-right"></i></h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    position: state.picturePosition.position
  }
}

export default connect(mapStateToProps, {updatePicPos})(ImageToggle);