import React, {Component} from 'react'
import './App.css'
import CurrencyContainerComponent from './CurrencyContainerComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Currency Calculator</h1>
        <div className="add-currency-container-component">
          <CurrencyContainerComponent />
        </div>
      </div>
    )
  }
}

export default App
