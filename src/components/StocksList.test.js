import React from 'react';
import { mount } from 'enzyme';
import StocksList from './StocksList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from 'react-select';

Enzyme.configure({ adapter: new Adapter() });

const stocks = [
  {
    symbol: 'AAPL',
    companyName: 'Apple'
  },
  {
    symbol: 'GOOG',
    companyName: 'Google'
  }
];

it('shows the select component', () => {
  const wrapper = mount(<StocksList stocks={stocks} onChange={() => {}} />);
  expect(wrapper.find(Select).length).toBe(1);
});
