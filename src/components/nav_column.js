import React, {Component} from 'react';

class NavColumn extends Component {
  render(){
    return(
      <div className="container col-2 align-self-end mb-5">
        <h3 className='mt-1'>Portraits</h3>
        <h3 className='mt-1'>Landscapes</h3>
        <h3 className='mt-1'>Contact</h3>
      </div>
    )
  }
}

export default NavColumn;