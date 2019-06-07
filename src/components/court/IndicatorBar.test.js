import React from 'react'
import { shallow } from 'enzyme'
import IndicatorBar from './IndicatorBar'

it('renders IndicatorBar', () => {
  const wrapper = shallow( <IndicatorBar maxRounds={20} currentRound={0} n={2} /> )
  expect( wrapper.find('span').length ).toBe(2)
  
  wrapper.setProps( { currentRound: 2 } )
  expect( wrapper.find('span').length ).toBe(0)
})