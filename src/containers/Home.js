import React , {Component} from 'react';
import NavPrincipal from '../components/NavPrincipal';
import NavUsuarios from '../components/NavUsuarios';
import NavPublicacion from '../components/NavPublicacion';
import {Col, Row} from 'react-materialize';
import TarjetaPublicacion from '../components/TarjetaPublicacion';
import '../css/NavPrincipal.css';



export default class Home extends Component {
  render(){
    return(
      <div>
        <Row>
          <NavPrincipal/>
        </Row>
        <Row>
          <Col m={1}>
            <NavPublicacion/>
          </Col>
          <Col m={10} className='col-margin'>
              <Col m={4}>
                <Col m={12}>
                  <h3 className='center'>Recientes</h3>
                  <TarjetaPublicacion
                    titulo='Optimizacion'
                    tipo='Idea' background='rgb(71, 168, 199)'
                    time='13 días'
                    location='GDC Monterrey'
                    descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga accusantium maxime.'/>
                </Col>
              </Col>
              <Col m={4}>
                <Col m={12}>
                  <h3 className='center'> Populares</h3>
                  <TarjetaPublicacion
                    titulo='Optimizacion'
                    tipo='Idea' background='rgb(71, 168, 199)'
                    time='13 días'
                    location='GDC Monterrey'
                    descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga accusantium maxime.'/>
                </Col>
              </Col>
              <Col m={4}>
                <Col m={12}>
                  <h3 className='center'>Sugerencias</h3>
                  <TarjetaPublicacion
                    titulo='Optimizacion'
                    tipo='Idea' background='rgb(71, 168, 199)'
                    time='13 días'
                    location='GDC Monterrey'
                    descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga accusantium maxime.'/>
                </Col>
              </Col>
          </Col>
          <Col m={1}>
            <NavUsuarios/>
          </Col>
        </Row>



      </div>
    )
  }
}
