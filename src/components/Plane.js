import React from 'react';
import {TakeoffLand} from './TakeOffLand'
import { useState } from 'react';

function Plane(){
  const [isAirbourne, setStatus] = useState(false);
  return (
    <div className='content col-3'>
      <h2>Plane</h2>
      <p>Status: {isAirbourne ? "In-Air" : "Grounded"}</p>
      <TakeoffLand />
    </div>
  );
}

export default Plane;