import React, { Component } from 'react';
import { Col, Row, Card, Icon } from 'react-materialize';
import NavPrincipal from '../components/NavPrincipal';
import '../css/NavDetalle.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
                        <Router>
                            <div className="sidebarDetalle" role="navigation">
                                <div className="sidebar_nav_detalle">
                                    <ul className="nav nav-stacked espacioNav">
                                        <li className="espacio center"><Link to="/pantallaDetalle/detalle"><Icon medium>web</Icon></Link></li>
                                        <li className="espacio center"><Link to="/grafica"><Icon medium>equalizer</Icon></Link></li>
                                        <li className="espacio center"><Link to="/mapa"><Icon medium>public</Icon></Link></li>
                                        <li className="espacio center"><a href="#"><Icon medium>attach_file</Icon></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Router>
                    </Col>
                    <Col m={8} className="margenTopDetalle">
                        <Router>
                            <div>
                                <Switch>
                                    <Route path="/pantallaDetalle/detalle" component={ContenidoDetalle}/>
                                    <Route path="/grafica" component={AnalyticsLikes}/>
                                    <Route path="/mapa" component={AnalyticsMap}/>
                                </Switch>
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