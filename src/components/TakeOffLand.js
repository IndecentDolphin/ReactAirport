import React from 'react';

export class TakeoffLand extends React.Component {
  constructor(props){
    super(props);
    this.state = {isTakenOff: false}; 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.isAirbourne = (this.isAirbourne ? false : true)
    this.setState( state => ({isTakenOff: !state.isTakenOff}))
  }

  render(){
    return(
      <button onClick={this.handleClick}>{this.state.isTakenOff ? 'Land' : 'Take Off'}</button>
    );
  }
}
