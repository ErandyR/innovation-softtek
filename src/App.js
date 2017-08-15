import React, { Component } from 'react';
import './css/App.css';
import TarjetaComentario from './components/TarjetaComentario';
import ContenedorComentario from './containers/ContenedorComentario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ContenedorComentario />
      </div>
    );
  }
}

export default App;
