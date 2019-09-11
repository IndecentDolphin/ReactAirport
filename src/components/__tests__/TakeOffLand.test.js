import React from 'react';
import { shallow } from 'enzyme';
import { TakeOffLand } from '../TakeOffLand';

describe('TakeOffLand', () => {

    it('should render without an error', () => {
        const mountedButton = shallow(<TakeOffLand />);
    }); 

    it('should call a callback function when pressed', () => {
        const callbackMock = jest.fn();
        const mountedButton = shallow(<TakeOffLand handleClick={callbackMock}/>);
        mountedButton.find('button').simulate('click');
        expect(callbackMock.mock.calls.length).toEqual(1); 
    }); 
});