import React, { Component } from 'react';
import TarjetaDescripcion from './TarjetaDescripcion';
import { Col,  Button } from 'react-materialize';
import AgregarContribucion from './AgregarContribucion';
import PaginaFiltro from '../containers/PaginaFiltro';

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