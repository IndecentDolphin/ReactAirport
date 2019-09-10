import React from 'react';

function Plane(){
  let isAirbourne = false;
  return (
    <div>
      <h2>Plane</h2>
      <p>Status: {isAirbourne ? "In-Air" : "Grounded"}</p>
      <TakeoffLand />
    </div>
  );
}

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

export default Plane;