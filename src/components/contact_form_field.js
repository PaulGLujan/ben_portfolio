import React from 'react';
import TextValidator from './text_validator';

export default props => {

  return (
    // <div className="form-group">
    //   <label className="row justify-content-end mr-2">{props.label}</label>
    //   <input {...props} className="form-control" />
    // </div>

    <div className="form-group">
      <label className="row justify-content-end mr-2">{props.label}</label>
      <TextValidator
        onChange=''
        name="email"
        value=''
        validators={['required', 'isEmail']}
        errorMessages={['this field is required', 'email is not valid']}
      />
    </div>
  )
}