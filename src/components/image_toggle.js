import React, {Component} from 'react';
import { connect } from 'react-redux';

class ImageToggle extends Component {
  constructor(props){
    super(props);
    this.toggleLeft = this.toggleLeft.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
  }
  toggleLeft(){
    console.log('left', this.props.position);
  }
  toggleRight() {
    console.log('right', this.props.position);
  }
  render(){
    return(
      <div className="container col-4 row justify-content-between">
        <h3 onClick={this.toggleLeft}><i className="fas fa-caret-left"></i> Previous</h3>
        <h3 onClick={this.toggleRight}>Next <i className="fas fa-caret-right"></i></h3>
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