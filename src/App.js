import React, { Component } from 'react';
import './css/App.css';
import AgregarContribucion from './components/AgregarContribucion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AgregarContribucion />
      </div>
    );
  }
}

export default App;
