import React, { Component } from 'react';
import './App.css';
import StocksList from './components/StocksList';
import StockDescription from './components/StockDescription';
import { getAllStocks, getSingleStockDetails } from './api/Api';

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
        this.setState({
          currentSelectionDetails: {
            symbol: option.value,
            price: 0,
            description: details.description
          }
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
        {currentSelectionDetails && (
          <StockDescription details={currentSelectionDetails} />
        )}
      </div>
    );
  }
}

export default App;
