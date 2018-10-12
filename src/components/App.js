import React from 'react';
import NavColumn from './nav_column';
import PictureShow from './picture_show';
import './App.css';

export default ()=>(
  <div className="container">
    <h1>Ben L. Nguyen</h1>
    <div className='row'>
      <NavColumn />
      {/* <PictureShow /> */}
    </div>
  </div>
)