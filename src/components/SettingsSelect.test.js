import React from 'react';
import { shallow } from 'enzyme';
import { SettingsSelect } from './SettingsSelect';

it('renders SettingsSelect', () => {
  const options = { n: [ 2, 3, 4 ]};
  const settings = { n: 2 };
  const changeSettings = jest.fn();
  const wrapper = <SettingsSelect name="n" settings={settings} options={options} changeSettings={changeSettings} />;
  
  expect( shallow( wrapper )).toMatchSnapshot();
});