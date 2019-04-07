import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

const StocksList = ({ stocks, onChange }) => {
  const options = stocks.map(stock => {
    return {
      value: stock.symbol,
      label: stock.companyName
    };
  });
  return <Select options={options} onChange={onChange} />;
};

StocksList.propTypes = {
  stocks: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default StocksList;
