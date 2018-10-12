import React, {Component} from 'react';

class NavColumn extends Component {
  constructor(props){
    super(props);
    this.portraitClick = this.portraitClick.bind(this);
  }
  portraitClick(){
    console.log('portrait click');
  }
  render(){
    return(
      <div className="container col-2 align-self-end mb-5">
        <h3 className='mt-1' onClick={this.portraitClick}>Portraits</h3>
        <h3 className='mt-1'>Landscapes</h3>
        <h3 className='mt-1'>Contact</h3>
      </div>
    )
  }
}

export default NavColumn;