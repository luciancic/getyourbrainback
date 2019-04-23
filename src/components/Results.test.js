import React from 'react';
import { shallow } from 'enzyme';
import { Results } from './Results';

it('renders Results', () => {
  expect( shallow( <Results /> )).toMatchSnapshot();
});