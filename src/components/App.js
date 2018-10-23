import React, {Component} from 'react';
import NavColumn from './nav_column';
import './App.css';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PictureShow from './picture_show';
import ContactSection from './contact_section';
import landscapes from '../assets/images/landscapes/landscapes';
import portraits from '../assets/images/portraits/portraits';

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className='container row'>
          <NavColumn />
          <Route exact path='/' component={PictureShow} />
          <Route path='/gallery/landscapes' 
            render={(props)=>(<PictureShow {...props} gallery={landscapes}/>)}
          />
          <Route path='/gallery/portraits' 
            render={(props) => (<PictureShow {...props} gallery={portraits} />)}
          />
          <Route path='/contact' component={ContactSection} />
          {/* <this.props.mainContent /> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mainContent: state.mainContent.mainContent,
  }
}

export default withRouter(connect(mapStateToProps)(App));