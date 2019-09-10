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

    describe('generatePlanes', () =>  {
        it('is initialised with 0 planes', () => {
            let mountedAirport = shallow(<Airport />);
            const planes = mountedAirport.find('Plane')
            expect(planes.length).toBe(0);
        });

        it('Handles a plane', () => {
            let mountedAirport = shallow(<Airport />);
            mountedAirport.setState({hangerCount : 1});
            const planes = mountedAirport.find('Plane')
            expect(planes.length).toBe(1);
        });
    });
});