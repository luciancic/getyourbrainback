import React from 'react';
import { shallow } from 'enzyme';
import { Court } from './Court';
import { Redirect } from 'react-router-dom';

it('renders Court', () => {
  const wrapper = shallow(<Court positions={[]} letters={[]} />);
  expect( wrapper ).toMatchSnapshot();
  
  wrapper.setProps({ shouldRedirect: true });
  expect(wrapper.find( Redirect )).toHaveLength(1);
});
