const BASE_URL = 'https://api.iextrading.com/1.0';

const getAllStocks = () => {
  return fetch(`${BASE_URL}/stock/market/list/infocus`).then(response =>
    response.json()
  );
};

const getSingleStockDetails = symbol => {
  return fetch(`${BASE_URL}/stock/${symbol}/company`).then(response =>
    response.json()
  );
};

const getSingleStockQuote = symbol => {
  return fetch(`${BASE_URL}/stock/${symbol}/quote`).then(response =>
    response.json()
  );
};

export { getAllStocks, getSingleStockDetails, getSingleStockQuote };
