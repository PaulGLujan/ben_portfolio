import React from 'react';
import ProgressiveImage from 'react-progressive-image';

export default (props)=>{
  const {imgLg, imgSm, alt} = props;
  console.log(imgLg, imgSm, alt);
  return(  
    <ProgressiveImage delay={3000}src={imgLg} placeholder={imgSm}>
      {src => <img src={src} alt={alt} />}
    </ProgressiveImage>
    )
}