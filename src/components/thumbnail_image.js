import React, {Component} from 'react';
import { updatePicPos } from '../actions/index';
import { connect } from 'react-redux';

class ThumbnailImage extends Component {
  constructor(props){
    super(props)
    this.clickPic = this.clickPic.bind(this);
  }
  clickPic(elm) {
    this.props.updatePicPos(elm);
  }
  render(){
    const {src, alt, name, key} = this.props;
    return(
      <div>
        {/* <img src={props.src} alt={props.alt} name={props.name} key={props.key} onClick={(e) => { this.clickPic(e.target.getAttribute('name')) }}/> */}
        <img src={src} alt={alt} name={name} key={key} onClick={(e) => { this.clickPic(e.target.getAttribute('name')) }}/>
      </div>
    )
  }
}

export default connect(null, { updatePicPos })(ThumbnailImage);