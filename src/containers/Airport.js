import React from 'react';
import './Airport.css';
import {Location} from './Location';
import Plane from '../components/Plane';
import {MenuBar} from '../components/MenuBar';

export class Airport extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {hangerCount: 0};
    this.changeName = this.changeName.bind(this);
    this.updateHanger = this.updateHanger.bind(this);
  }

  updateHanger(){
    console.log("Building Plane")
    const total = this.state.hangerCount;
    this.setState(
      { hangerCount: total + 1 }
    );
    return <Plane />
  }


  changeName(newName){
    this.setState({name : newName});
  }
  
  render(){
    console.log('rendering airport')
    return (
      <div>
        <div className='col-3'></div>
        <Location name={this.state.name} onChange={this.changeName} hangerCount={this.state.hangerCount} />
        <div className='col-3'></div>
        <div className='col-7'>
          <h2 className='content'> There are currently {this.state.hangerCount} planes available </h2>
        </div>
        <MenuBar onClick={this.updateHanger} />
      </div>
    );
  }
}


