import React, {Component} from 'react';
import NavColumn from './nav_column';
import './App.css';
import { Route } from 'react-router-dom';
import PictureShow from './picture_show.js';
import Contact from './contact_section';

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className='container row'>
          <NavColumn />
          <Route exact path='/' component={()=>(<h1>Landing Page</h1>)} />
          <Route path="/:content/:gallery/:position" component={PictureShow} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    )
  }
}

export default App;