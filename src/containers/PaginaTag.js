import React,{Component} from 'react';
import NavPrincipal from '../components/NavPrincipal';
import TarjetaPublicacion from '../components/TarjetaPublicacion';
import '../css/PaginaUsuario.css';
import {Col,Row,Button} from 'react-materialize';


export default class PaginaTag extends Component{
  render(){
    return(
        <div>
        <Row>
          <NavPrincipal/>
        </Row>
        <Row>
            <Col m={10} offset="m1" className="espacioSuperior">
                <h4 className="col m10">Ideas Related to:<strong className="etiqueta">Aqui va la etiqueta</strong></h4> 
                <Button waves='light' className="col m1">Follow</Button>
            </Col>
        </Row>
        <Row>
          <Col m={4}>
            <TarjetaPublicacion/>
          </Col>
          <Col m={4}>
            <TarjetaPublicacion/>
          </Col>
          <Col m={4}>
            <TarjetaPublicacion/>
          </Col>
        </Row>
      </div>
    )
  }
}
