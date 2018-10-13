import React from 'react';
import NavColumn from './nav_column';
import PictureShow from './picture_show';
import './App.css';

export default ()=>(
    <div className='container row'>
      <NavColumn />
      <PictureShow />
    </div>
)