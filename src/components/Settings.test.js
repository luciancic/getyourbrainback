import React from 'react';
import { shallow } from 'enzyme';
import { Settings } from './Settings';

it('renders Settings', () => {
  expect( shallow( <Settings /> )).toMatchSnapshot();
});