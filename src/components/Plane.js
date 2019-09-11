import React from 'react';
import {TakeOffLand} from './TakeOffLand'
import { useState } from 'react';

function Plane(){
  const [isAirbourne, setStatus] = useState(false);
  return (
    <div className='content col-3'>
      <h2>Plane</h2>
      <p>Status: {isAirbourne ? "In-Air" : "Grounded"}</p>
      <TakeOffLand handleClick={() => setStatus(true)} status={isAirbourne} />
    </div>
  );
}

export default Plane;