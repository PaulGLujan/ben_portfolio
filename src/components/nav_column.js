import React, {Component} from 'react';
import {changeGallery, updateMainSection} from '../actions/index';
import {connect} from 'react-redux';
import portraits from '../assets/images/portraits/portraits';
import landscapes from '../assets/images/landscapes/landscapes';
import ContactSection from './contact_section';
import PictureShow from './picture_show';
import {Link} from 'react-router-dom';

class NavColumn extends Component {
  constructor(props){
    super(props);
    this.portraitClick = this.portraitClick.bind(this);
    this.landscapesClick = this.landscapesClick.bind(this);
    this.contactClick = this.contactClick.bind(this);
  }
  portraitClick(){
    this.props.updateMainSection(PictureShow);
    this.props.changeGallery(portraits);
  }
  landscapesClick(){
    this.props.updateMainSection(PictureShow);
    this.props.changeGallery(landscapes);
  }
  contactClick(){
    this.props.updateMainSection(ContactSection);
  }
  render(){
    const {landscapesClick, portraitClick, contactClick} = this;
    return(
      <div className="col-2 flex-column justify-content-between d-flex">
        <div className="text-center mt-5">
          <h1 className="">Benjamin</h1>
          <h1>L.</h1>
          <h1>Nguyen</h1>
          <hr/>
          <h1><i className="fas fa-camera-retro"></i></h1>
        </div>
        <div className="mb-5 ml-5">
          <h3 className='mt-1 pointer-cursor'>
            <Link to='/gallery/landscapes'>Landscapes</Link>
          </h3>
          <h3 className='mt-1 pointer-cursor'>
            <Link to='/gallery/portraits'>Portraits</Link>
          </h3>
          <h3 className='mt-1 pointer-cursor'>
            <Link to='/contact'>Contact</Link>
          </h3>
          <h3><a target='_blank' href="https://www.instagram.com/another.passenger/"><i className="fab fa-instagram"></i></a></h3>
        </div>
      </div>
    )
  }
}

export default connect(null, {changeGallery, updateMainSection})(NavColumn);