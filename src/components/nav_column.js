import React, {Component} from 'react';

class NavColumn extends Component {
  render(){
    return(
      <div className="container">
        <h3 className='text-danger'>Portraits</h3>
        <h3>Landscapes</h3>
        <h3>Contact</h3>
      </div>
    )
  }
}

export default NavColumn;