import React , {Component} from 'react';
import {Col, Row} from 'react-materialize';
import TarjetaPublicacion from '../components/TarjetaPublicacion';

export default class ContenedorIdeas extends Component {
    constructor(props) {
        super(props);
    }
    
  render(){
    return(
      <div>
      <Col m={4}>
        <Col m={12}>
          <h3 className='center'>Recientes</h3>
            {this.props.tarjeta.map((elemento, i) => {
                    console.log(elemento);
                    return( <TarjetaPublicacion key={i} 
                        titulo={elemento.titulo} 
                        descripcion={elemento.descripcion}
                        idea={elemento.idea}
                        necesidad={elemento.necesidad}
                        tags={elemento.tags}/> 
                        )
                })}
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
      </div>
    )
  }
}