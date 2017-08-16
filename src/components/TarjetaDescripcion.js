import React, { Component } from 'react';
import {Button, Carousel, Icon} from 'react-materialize';

export default class TarjetaDescripcion extends Component {
  render() {
    return (
      <div className='col s12'>
        <h2 id='tituloIdea' className='col s5'>Innotek</h2>
        <a href='#' id='editar' className='col s1'>[Edit Idea]</a>
        <Button waves='light' className='red col s2 offset-s4 right'>MICROSERVICES</Button>

        <p id='fechaPublicacion'>Created on Jul 02 2015 by <strong id='usuario'>Gilberto Antonio</strong></p>
        <Button waves='light' className='green right'>Follow</Button>
        <Button waves='light' className='green right'>Join Roster</Button>
        <Carousel options={{ fullWidth: true }} images={[
        'https://lorempixel.com/400/200/computer/1',
        'https://lorempixel.com/400/200//2'
        ]} />
        <p>Aplicacion en la que se puedan proponer ideas de mejora de productos o procesos internos. Otros usuarios califican y comentan la propuesta antes de aprobarla. Se muestran reportes con gráficas.</p>
        <p><Icon>location_on</Icon>GDC Monterrey <Icon>attach_file</Icon> 2 Attachment 8 Comments</p>
        <Icon>local_offer</Icon> aqui van las etiquetas 
      </div>
    );
  }
}


