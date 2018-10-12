import React, {Component} from 'react';
import { connect } from 'react-redux';

class ImageToggle extends Component {
  toggleLeft(){
    console.log(this.props.position);
  }
  render(){
    return(
      <div className="container col-4 row justify-content-between">
        <h3><i className="fas fa-caret-left"></i> Previous</h3>
        <h3>Next <i className="fas fa-caret-right"></i></h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    position: state.picturePosition.position
  }
}

export default connect(mapStateToProps)(ImageToggle);