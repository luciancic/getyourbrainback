import React from 'react';
import { shallow } from 'enzyme';
import { Tutorial } from './Tutorial';

it('renders Tutorial', () => {
  expect( shallow( <Tutorial tutorial={{}}/> )).toMatchSnapshot();
});