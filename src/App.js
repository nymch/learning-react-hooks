import React, { Component } from 'react';
import Count from './Count';
import './App.css';
import CarListContainer from './containers/CarListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Count />
        <CarListContainer />
      </div>
    );
  }
}

export default App;
