import React, {Component} from 'react';
import NavColumn from './nav_column';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class App extends Component {
  render(){
    const {mainComponent, galleryType} = this.props;
    return(
      <div className="container">
        <div className='container row'>
          <NavColumn />
          <Route path="/" component={mainComponent} />
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