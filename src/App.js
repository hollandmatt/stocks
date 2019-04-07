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
    this.setState({
      currentSelection: option.value
    });
    if (option.value) {
      getSingleStockDetails(option.value).then(details => {
        getSingleStockQuote(option.value).then(quote => {
          this.setState({
            currentSelectionDetails: {
              symbol: option.value,
              price: quote.latestPrice,
              description: details.description
            }
          });
        });
      });
    }
  }

  render() {
    const { stocks, currentSelection, currentSelectionDetails } = this.state;
    return (
      <div className="App">
        <StocksList
          stocks={stocks}
          onChange={this.onChangeStockSelection}
          value={{ value: currentSelection }}
        />
        <StockDescription details={currentSelectionDetails} />
      </div>
    );
  }
}

export default App;
