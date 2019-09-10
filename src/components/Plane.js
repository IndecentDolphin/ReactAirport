import React from 'react';
import {TakeoffLand} from './TakeOffLand'

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

export default Plane;