import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import StocksList from './components/StocksList';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StockDescription from './components/StockDescription';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('creates the dropdown list', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(StocksList).length).toBe(1);
});

it('does not show the details as no selection has been made yet', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(StockDescription).length).toBe(0);
});
