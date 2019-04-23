import React from 'react';
import { shallow } from 'enzyme';
import IndicatorBar from './IndicatorBar';

it('renders IndicatorBar', () => {
  expect( shallow( <IndicatorBar /> )).toMatchSnapshot();
});