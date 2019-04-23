import React from 'react';
import { shallow } from 'enzyme';
import Letter from './Letter';

it('renders Letter', () => {
  expect( shallow( <Letter number={1}/> )).toMatchSnapshot();
});