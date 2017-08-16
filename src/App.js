import React, { Component } from 'react';
import Home from './containers/Home';
import NavDetalle from './components/NavDetalle';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>
      <div>
        <Route exact path='/home' component={Home}/>
        <Route  path='/detalle' component={NavDetalle}/>
      </div>
    </Router>
      </div>
    )
  }
}

export default App;
