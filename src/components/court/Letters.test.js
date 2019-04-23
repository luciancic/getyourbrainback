import React from 'react';
import { shallow } from 'enzyme';
import Letters from './Letters';

it('renders Letters', () => {
  expect( shallow( <Letters /> )).toMatchSnapshot();
});