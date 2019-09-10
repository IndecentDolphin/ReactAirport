import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import { Airport } from '../Airport';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('uses enzyme', () => {
  const mountedApp = shallow(<App />);
});

describe('App', () => {

  let mountedApp;

  beforeEach(() => {
    mountedApp  = shallow(<App />)
  })

  it('Renders a single airport', () => {
    let airport = mountedApp.find(Airport)
    expect(airport.length).toBe(1)  
  })

})