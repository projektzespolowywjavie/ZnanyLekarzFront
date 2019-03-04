import React, { Component } from 'react';
import Login from '../components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Znany lekarz</h2>
        <Login />
      </div>
    );
  }
}

export default App;
