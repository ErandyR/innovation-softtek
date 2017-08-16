import React, { Component } from 'react';
import TarjetaDescripcion from '../components/TarjetaDescripcion';
import ContenedorComentario from './ContenedorComentario';
import {Col,Row} from 'react-materialize';
import NavPrincipal from '../components/NavPrincipal';
import Collapsible from './Collapsible';

export default class PaginaReto extends Component {
  render() {
    return (
      <div>
      <NavPrincipal />
      <Row>

      	<Col s={10} offset='s1' className='grid-example'>
            <TarjetaDescripcion />
            <Collapsible />
        </Col>


      </Row>


      </div>
    );
  }
}
