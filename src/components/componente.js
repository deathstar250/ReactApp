import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Panel extends React.Component {
    render() {
      return (
        <div className="app">
          <Header/>
          <Components/>
          <Futher/>
        </div>
      );
    }
  }