import React from 'react';
import { shallow } from 'enzyme';
import PositionBoard from './PositionBoard';
import PositionCircle from './PositionCircle';

it('renders PositionBoard', () => {
  const wrapper = shallow(<PositionBoard active={true} currentPosition={2} />);
  const circles = wrapper.find(PositionCircle);

  expect( wrapper ).toMatchSnapshot();
  expect( circles ).toHaveLength(9);
  expect( wrapper.find({ active: false }) ).toHaveLength(8);
  expect( circles.at(1).prop('active') ).toBeTruthy();
});