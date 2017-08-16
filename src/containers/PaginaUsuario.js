import React,{Component} from 'react';
import NavPrincipal from '../components/NavPrincipal';
import TarjetaPublicacion from '../components/TarjetaPublicacion';
import '../css/PaginaUsuario.css';
import {Col,Row,Icon,Button} from 'react-materialize';


export default class PaginaUsuario extends Component{
  render(){
    return(
        <div>
        <Row>
          <NavPrincipal/>
        </Row>
        <Row>
            <Col m={10} offset="m1">
                <h4 className="col m10">Omar <Icon medium className="iconoUsuario">person</Icon></h4>
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
