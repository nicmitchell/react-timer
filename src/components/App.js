import React, { Component } from 'react';
import Countdown from './countdown';
import logo from '../yellow-bumble-bee.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>BeeZee Timer</h2>
        </div>
        <Countdown />
      </div>
    );
  }
}

export default App;

