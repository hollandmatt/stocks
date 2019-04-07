import React from 'react'
import PropTypes from 'prop-types'

const StockDescription = ({ details }) => {
  const { symbol, description, price } = details
  return (
    <div>
      <h3>Symbol</h3>
      <p>{symbol}</p>
      <h3>Current Stock Price</h3>
      <p>{price}</p>
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  )
}

StockDescription.propTypes = {
  description: PropTypes.string
}

export default StockDescription
