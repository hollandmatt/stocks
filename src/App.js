import React, { Component } from 'react';
import './App.css';
import StocksList from './components/StocksList';
import StockDescription from './components/StockDescription';
import {
  getAllStocks,
  getSingleStockDetails,
  getSingleStockQuote
} from './api/Api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      currentSelection: undefined
    };
    this.onChangeStockSelection = this.onChangeStockSelection.bind(this);
  }

  componentDidMount() {
    getAllStocks().then(stocks => {
      this.setState({ stocks });
    });
  }

  onChangeStockSelection(option) {
    if (option.value) {
      const symbol = option.value.toUpperCase()
      this.setState({
        currentSelection: symbol
      });  
      getSingleStockDetails(symbol)
        .then(details => {
          getSingleStockQuote(symbol).then(quote => {
            this.setState({
              currentSelectionDetails: {
                symbol: symbol,
                price: quote.latestPrice,
                description: details.description
              },
              errorMessage: null
            });
          });
        })
        .catch(error => {
          this.setState({
            errorMessage: `${symbol} is not a valid stock symbol.`,
            currentSelectionDetails: null
          });
        });
    }
  }

  render() {
    const {
      stocks,
      currentSelection,
      currentSelectionDetails,
      errorMessage
    } = this.state;
    return (
      <div className="App">
        <StocksList
          stocks={stocks}
          onChange={this.onChangeStockSelection}
          value={{ value: currentSelection }}
        />
        <StockDescription
          details={currentSelectionDetails}
          errorMessage={errorMessage}
        />
      </div>
    );
  }
}

export default App;
