import React, {Component} from 'react';
import NavColumn from './nav_column';
import PictureShow from './picture_show';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className='container row'>
          <NavColumn />
          <PictureShow />
        </div>
      </div>
    )
  }
}

export default App;