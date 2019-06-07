import React from 'react'
import { shallow } from 'enzyme'
import PositionCircle from './PositionCircle'

it('renders PositionCircle', () => {
  const wrapper = shallow( <PositionCircle active={false}/> )
  expect( wrapper.hasClass('lighten-4') ).toBeTruthy()

  wrapper.setProps( { active: true } )
  expect( wrapper.hasClass('lighten-4') ).toBeFalsy()
});