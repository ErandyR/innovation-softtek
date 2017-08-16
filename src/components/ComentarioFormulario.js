import React,{Component} from 'react';
import {Col,Row,Button,Input,Icon} from 'react-materialize';
import '../css/Comentarios.css';

export default class ComentarioFormulario extends Component{
  render(){
    return(
      <Row>

          <Input id="input"placeholder="Comentario" s={12}  />
          <Button waves='light'>Agregar<Icon left>comment</Icon></Button>
      </ Row>

    )
  }
}
