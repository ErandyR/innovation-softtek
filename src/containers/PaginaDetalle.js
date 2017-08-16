import React, { Component } from 'react';
import { Col, Row, Card } from 'react-materialize';
import NavPrincipal from '../components/NavPrincipal';
import NavDetalle from  '../components/NavDetalle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContenidoDetalle from  '../components/ContenidoDetalle';
import AnalyticsLikes from  './AnalyticsLikes';
import AnalyticsMap from  './AnalyticsMap';
import "../css/PaginaDetalle.css";


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
                    <Col m={8} className="margenTopDetalle">
                        <Router>
                            <div>
                                <Route path="/detalles" component={ContenidoDetalle}/>
                                <Route path="/grafica" component={AnalyticsLikes}/>
                                <Route path="/mapa" component={AnalyticsMap}/>
                            </div>
                        </Router>
                    </Col>
                    <Col m={3} className="margenTopDetalle">
                        <Col m={12} s={12}>
		                    <Card className='blue-grey darken-1' textClassName='white-text' title='Equipo de trabajo' >
		                    Quienes han contribuido a este Reto.
		                    </Card>
                        </Col>
                    </Col>
                    <Col m={3} className="margenTopDetalle">
                        <Col m={12} s={12}>
		                    <Card className='blue-grey darken-1' textClassName='white-text' title='Organigrama'>
		                    Como funciona el equipo de trabajo
		                    </Card>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
}