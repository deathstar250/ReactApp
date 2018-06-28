import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Futher from './components/Futher.js';
import Components from './components/Components.js';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header/>
          <Futher/>
          <Components/>
      </div>
    );
  }
}

export default App;
