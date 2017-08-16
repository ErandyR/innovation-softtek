import React,{Component} from 'react';
import {Col,Row,Input,Button,Icon} from 'react-materialize';
import ComentarioFormulario from '../components/ComentarioFormulario';
import TarjetaComentario from '../components/TarjetaComentario';

export default class ContenedorComentario extends Component{
  render(){
    return(
      <Row>
      <ComentarioFormulario />
      <TarjetaComentario />
     </Row>


    )
  }
}
