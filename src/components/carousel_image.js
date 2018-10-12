import React from 'react';

export default (props)=>(
  <div>
    <img src={props.src} alt={props.alt} name={props.name} key={props.key} onClick={props.onClick}/>
  </div>
)