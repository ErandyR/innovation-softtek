import React , {Component} from 'react';
import NavPrincipal from '../components/NavPrincipal';
import NavUsuarios from '../components/NavUsuarios';
import NavPublicacion from '../components/NavPublicacion';
import {Col, Row} from 'react-materialize';



export default class Home extends Component {
  render(){
    return(
      <div>
        <Row>
          <NavPrincipal/>
        </Row>
        <Row>
          <Col m={2}>
            <NavPublicacion/>
          </Col>
          <Col m={8}>
          </Col>
          <Col m={2}>
            <NavUsuarios/>
          </Col>
        </Row>



      </div>
    )
  }
}
