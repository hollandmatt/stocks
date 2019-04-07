import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Creatable from 'react-select/lib/Creatable';

const StocksList = ({ stocks, onChange }) => {
  const options = _.sortBy(
    stocks.map(stock => {
      return {
        value: stock.symbol,
        label: stock.companyName
      };
    }),
    o => o.label
  );
  return (
    <Creatable
      options={options}
      placeholder="Select or enter a stock symbol..."
      formatCreateLabel={input => `Load details for ${input}`}
      onChange={onChange}
    />
  );
};

StocksList.propTypes = {
  stocks: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default StocksList;
