import React from 'react';
import ImageWindow from './image_window';
import Caption from './caption';
import ImageToggle from './image_toggle'
import ThumbnailReel from './thumbnail_reel';
import { Route } from 'react-router-dom';

export default (props)=>(
  <div className="container col-10 mt-3">
    <Route exact path='/monkeys' component={()=>(<h1>Monkeys</h1>)} />
    <ImageWindow {...props}/>
    <div className='row justify-content-between mt-1'>
      <Caption />
      <ImageToggle />
    </div>
    <ThumbnailReel/>
  </div>
)