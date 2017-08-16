import React , {Component} from 'react';
import {Col, } from 'react-materialize';
import TarjetaVerReto from '../components/TarjetaVerReto';

export default class ContenedorRetos extends Component {
  render(){
    return(
      <div>
      <Col m={4}>
        <Col m={12}>
          <h3 className='center'>Recientes</h3>
          <TarjetaVerReto
            titulo='Optimizacion'
            tipo='Retos' background='red'
            time='13 días'
            location='GDC Monterrey'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga accusantium maxime.'/>
        </Col>
      </Col>
      <Col m={4}>
        <Col m={12}>
          <h3 className='center'> Populares</h3>
          <TarjetaVerReto
            titulo='Optimizacion'
            tipo='Retos' background='red'
            time='13 días'
            location='GDC Monterrey'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga accusantium maxime.'/>
        </Col>
      </Col>
      <Col m={4}>
        <Col m={12}>
          <h3 className='center'>Sugerencias</h3>
          <TarjetaVerReto
            titulo='Optimizacion'
            tipo='Retos' background='red'
            time='13 días'
            location='GDC Monterrey'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga accusantium maxime.'/>
        </Col>
      </Col>
      </div>
    )
  }
}
