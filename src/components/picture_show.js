import React from 'react';
import ImageWindow from './image_window';
import Caption from './caption';
import ImageToggle from './image_toggle'
import ThumbnailReel from './thumbnail_reel';

export default ()=>(
  <div className="container">
    <h1>Picture show goes here.</h1>
    <ImageWindow/>
    <Caption/>
    <ImageToggle/>
    <ThumbnailReel/>
  </div>
)