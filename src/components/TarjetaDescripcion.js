import React, { Component } from 'react';
import {Button, Icon, Row} from 'react-materialize';
import imgDetalle from '../home.PNG';

export default class TarjetaDescripcion extends Component {
  render() {
    return (
      <div className='col s12'>
        <Row>
            <h2 id='tituloIdea' className='col s4'>Innotek</h2>
            <a href='#' id='editar' className='col s2 offset-1'>Editar Idea</a>
            <Button waves='light' className='red col s3 offset-s2 right'>MICROSERVICIOS</Button>
        </Row>
        <Row>
           <p id='fechaPublicacion' className="col s5">Creado en Julio 02 2015 por <b id='usuario'>Gilberto Antonio</b></p>
            <Button waves='light' className='green col s2 offset-s2'>Seguir</Button>
            <Button waves='light' className='green col s2 offset-s1'>Unirse</Button> 
        </Row>
        <img src={imgDetalle} alt="" className="responsive-img"/>
        <p>Aplicacion en la que se puedan proponer ideas de mejora de productos o procesos internos. Otros usuarios califican y comentan la propuesta antes de aprobarla. Se muestran reportes con gráficas.</p>
        <p><Icon>location_on</Icon>GDC Monterrey <Icon>attach_file</Icon> 2 Attachment 8 Comments</p>
        <Icon>local_offer</Icon> aqui van las etiquetas 
      </div>
    );
  }
}


