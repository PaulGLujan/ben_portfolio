import React, {Component} from 'react';
import NavColumn from './nav_column';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="container">
        <div className='container row'>
          <NavColumn />
          <this.props.mainComponent />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mainComponent: state.mainContent.mainComponent,
    contentType: state.mainContent.contentType,
  }
}

export default connect(mapStateToProps)(App);