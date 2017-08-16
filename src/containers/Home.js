import React, {Component} from 'react';
import NavPrincipal from '../components/NavPrincipal';
import NavUsuarios from '../components/NavUsuarios';
import NavPublicacion from '../components/NavPublicacion';
import {Col, Row} from 'react-materialize';
import ContenedorIdeas from '../containers/ContenedorIdeas';
import ContenedorNecesidades from '../containers/ContenedorNecesidades';
import ContenedorRetos from '../containers/ContenedorRetos';
import '../css/NavPrincipal.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <NavPrincipal/>
        </Row>
        <Row>
          <Col m={1}>
            <NavPublicacion/>
          </Col>
          <Col m={10} className='col-margin'>
            <Switch>
              <Route path="/home/ideas" component={ContenedorIdeas}/>
              <Route path="/home/necesidades" component={ContenedorNecesidades}/>
              <Route path="/home/retos" component={ContenedorRetos}/>
            </Switch>
          </Col>
          <Col m={1}>
            <NavUsuarios/>
          </Col>
        </Row>

      </div>
    )
  }
}
