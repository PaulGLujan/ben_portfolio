import React from 'react';

export default props => {

  return (
    <div className="form-group">
      <label className="row justify-content-end mr-2">{props.label}</label>
      <input {...props} className="form-control" />
    </div>
  )
}