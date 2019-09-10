import React from 'react';
import '../containers/App.css';

export class MenuBar extends  React.Component {
  
  render (){
    return (
      <div className='col-12'>
        <ul>
          <li><button onClick={this.props.updateHanger}>Build Plane</button></li>
          <li></li>      
        </ul>
      </div>
    );
  }
}