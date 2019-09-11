import { shallow } from 'enzyme';
import Plane from './../Plane';
import React from 'react';

describe('Plane', () =>   {
  it('Renders with a default state of false(grounded)', () => {
    let mountedPlane = shallow(<Plane />);
    let planeStatus = mountedPlane.find('p');
    expect(planeStatus.text()).toBe('Status: Grounded');
  });
});