import React, {Component} from 'react';
import { connect } from 'react-redux';

class Caption extends Component {
  constructor(props){
    super(props);
    this.getCaption = this.getCaption.bind(this);
  }
  getCaption(){
    const {gallery, position} = this.props;
    return gallery[position]['caption']
  }
  render(){
    const caption = this.getCaption();
    console.log('Position: ', this.props.position);
    console.log('Gallery:', this.props.gallery);
    return(
      <div className="col-2">
        <h3 className="">{caption}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery.gallery,
    position: state.picturePosition.position,
  }
}

export default connect(mapStateToProps)(Caption);