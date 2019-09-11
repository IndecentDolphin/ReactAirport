import React from 'react';

export class TakeOffLand extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.handleClick);
    return(
      <button onClick={this.props.handleClick}>{this.props.status ? 'Land' : 'Take Off'}</button>
    );
  }
}
