import React from 'react';
import { shallow, mount } from 'enzyme';
import IndicatorBar from './IndicatorBar';
import Indicator from './Indicator';

it('renders IndicatorBar', () => {
  const wrapper = shallow( <IndicatorBar maxRounds={20} remainingRounds={22} n={2} /> )
  expect( wrapper ).toMatchSnapshot();
  expect( wrapper.find('span') ).toHaveLength(2);
  
  wrapper.setProps( { remainingRounds: 20 } );
  expect( wrapper.find('span') ).toHaveLength(0);
});