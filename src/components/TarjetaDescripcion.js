import React, { Component } from 'react';
import {Button, Icon, Strong} from 'react-materialize';
import imgDetalle from '../home.PNG';

export default class TarjetaDescripcion extends Component {
  render() {
    return (
      <div className='col s12'>
        <h2 id='tituloIdea' className='col s5'>Innotek</h2>
        <a href='#' id='editar' className='col s1'>[Editar Idea]</a>
        <Button waves='light' className='red col s2 offset-s4 right'>MICROSERVICIOS</Button>

        <p id='fechaPublicacion'>Creado en Julio 02 2015 por <Strong id='usuario'>Gilberto Antonio</Strong></p>
        <Button waves='light' className='green right'>Seguir</Button>
        <Button waves='light' className='green right'>Unirse a la lista</Button>
        <img src={imgDetalle} alt=""/>
        <p>Aplicacion en la que se puedan proponer ideas de mejora de productos o procesos internos. Otros usuarios califican y comentan la propuesta antes de aprobarla. Se muestran reportes con gráficas.</p>
        <p><Icon>location_on</Icon>GDC Monterrey <Icon>attach_file</Icon> 2 Attachment 8 Comments</p>
        <Icon>local_offer</Icon> aqui van las etiquetas 
      </div>
    );
  }
}


