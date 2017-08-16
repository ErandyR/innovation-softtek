import React, { Component } from 'react';
import TarjetaDescripcion from './TarjetaDescripcion';
import { Col } from 'react-materialize';

export default class ContenidoDetalle extends Component {
    render(){
        return(
            <Col m={12}>
                <div>
                   <TarjetaDescripcion />
                </div>
            </Col>
        )
    }
}