import React, {Component} from 'react';
import NavColumn from './nav_column';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import PictureShow from './picture_show.js';
import Contact from './contact_section';
import Portraits from '../assets/images/portraits/portraits'
import Landscapes from '../assets/images/landscapes/landscapes'

class App extends Component {
  render(){
    const {mainComponent, galleryType} = this.props;
    return(
      <div className="container">
        <div className='container row'>
          <NavColumn />
          <Route exact path='/' component={mainComponent} />
          <Route path="/:content/:gallery/:position" component={PictureShow} />
          <Route path="/portraits/:portrait_id" component={()=><PictureShow photos={Portraits}/>} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mainComponent: state.mainContent.mainComponent,
    contentType: state.mainContent.contentType,
    galleryType: state.gallery.galleryType,
  }
}

export default connect(mapStateToProps)(App);