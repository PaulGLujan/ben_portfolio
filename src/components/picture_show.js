import React from 'react';
import ImageWindow from './image_window';
import Caption from './caption';
import ImageToggle from './image_toggle'
import ThumbnailReel from './thumbnail_reel';

export default ()=>(
  <div className="container col-10">
    <ImageWindow/>
    <div className='row justify-content-between mt-1'>
      <Caption />
      <ImageToggle />
    </div>
    <ThumbnailReel/>
  </div>
)