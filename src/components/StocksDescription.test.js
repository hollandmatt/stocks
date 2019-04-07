import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StockDescription, { Logo } from './StockDescription';

Enzyme.configure({ adapter: new Adapter() });

const details = {
  symbol: 'AAPL',
  price: 123.45,
  description: 'Apple makes the iPhone and Mac'
};

describe('StockDescription', () => {
  it('shows the logo', () => {
    const wrapper = mount(<StockDescription details={details} />);
    expect(wrapper.find(Logo).length).toBe(1);
  });

  it('shows the symbol', () => {
    const wrapper = mount(<StockDescription details={details} />);
    expect(wrapper.text()).toMatch(details.symbol);
  });

  it('shows the price', () => {
    const wrapper = mount(<StockDescription details={details} />);
    expect(wrapper.text()).toMatch(String(details.price));
  });

  it('shows the description', () => {
    const wrapper = mount(<StockDescription details={details} />);
    expect(wrapper.text()).toMatch(details.description);
  });
});

describe('Logo', () => {
  it('creates the image element', () => {
    const wrapper = mount(<Logo symbol="AAPL" />);
    expect(wrapper.find('img').length).toBe(1);
    expect(
      wrapper
        .find('img')
        .first()
        .props().src
    ).toBe('https://storage.googleapis.com/iex/api/logos/AAPL.png');
  });
});
