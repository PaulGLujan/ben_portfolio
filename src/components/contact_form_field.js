import React from 'react';
import TextValidator from './text_validator';

export default (props) => {
  const {name, label, type, value, onChange, validators, errorMessages} = props;
  return (
    <div className="form-group">
      <label className="row justify-content-end mr-2">{label}</label>
      <TextValidator
        className='col-12'
        onChange={onChange}
        name={name}
        value={value}
        validators={validators}
        errorMessages={errorMessages}
      />
    </div>
  )
}