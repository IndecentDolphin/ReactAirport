import React from 'react';
import { shallow } from 'enzyme';
import { Airport } from '../Airport';
import Plane from '../../components/Plane';

describe('Airport', () => {
    describe('updateHanger', () => {
        it('updates state.hangerCount by 1 when triggered', () => {
            let mountedAirport = shallow(<Airport />);
            mountedAirport.instance().updateHanger();
            expect(mountedAirport.instance().state.hangerCount).toBe(1);
        });
    });
});