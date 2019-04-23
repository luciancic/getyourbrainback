import React from 'react';
import { shallow } from 'enzyme';
import PositionCircle from './PositionCircle';

it('renders PositionCircle', () => {
  expect( shallow( <PositionCircle /> )).toMatchSnapshot();
});