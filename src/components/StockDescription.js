import React from 'react';
import PropTypes from 'prop-types';

const StockDescription = ({ details, errorMessage }) => {
  if (details) {
    const { symbol, description, price } = details;
    return (
      <div>
        <Logo symbol={symbol} />
        <h3>Symbol</h3>
        <p>{symbol}</p>
        <h3>Current Stock Price</h3>
        <p>{price} USD</p>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    );
  } else {
    return (
      <div className="message">
        {errorMessage || 'Select a stock to start.'}
      </div>
    );
  }
};

StockDescription.propTypes = {
  details: PropTypes.object,
  errorMessage: PropTypes.string
};

const logoUrl = symbol =>
  `https://storage.googleapis.com/iex/api/logos/${symbol}.png`;

export const Logo = ({ symbol }) => (
  <img alt="company logo" className="logo" src={logoUrl(symbol)} />
);

Logo.propTypes = {
  symbol: PropTypes.string.isRequired
};

export default StockDescription;
