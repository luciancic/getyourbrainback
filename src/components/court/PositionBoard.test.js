import React from 'react';
import { shallow } from 'enzyme';
import PositionBoard from './PositionBoard';

it('renders PositionBoard', () => {
  expect( shallow( <PositionBoard /> )).toMatchSnapshot();
});