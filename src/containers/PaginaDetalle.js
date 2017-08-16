import React, { Component } from 'react';
import { Col, Row, } from 'react-materialize';
import NavPrincipal from '../components/NavPrincipal';
import NavDetalle from  '../components/NavDetalle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EnlacesDetalle from  '../components/EnlacesDetalle';


export default class PaginaDetalle extends Component {
    render(){
        return(
            <div>
                <Row>
                    <NavPrincipal />
                </Row>
                <Row>
                    <Col m={1}>
                        <NavDetalle />
                    </Col>
                    <Col m={11}>
                        <EnlacesDetalle />
                    </Col>
                </Row>
            </div>
        )
    }
}