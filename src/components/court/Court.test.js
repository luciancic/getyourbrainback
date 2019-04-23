import React from 'react';
import { shallow } from 'enzyme';
import { Court } from './Court';

it('renders Court', () => {
  expect( shallow( <Court positions={[]} letters={[]}/> )).toMatchSnapshot();
});
