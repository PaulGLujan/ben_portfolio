import React from 'react';
import ProgressiveImage from 'react-progressive-image';

export default (props)=>{
  const {imgLg, imgSm, alt} = props;
  return(  
    <ProgressiveImage src={imgLg} placeholder={imgSm}>
      {src => <img src={src} alt={alt} />}
    </ProgressiveImage>
    )
}