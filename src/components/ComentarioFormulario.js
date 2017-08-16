import React,{Component} from 'react';
import {Col,Row,Button,Input,Icon} from 'react-materialize';

export default class ComentarioFormulario extends Component{
  render(){
    return(
      <Row>

          <Input placeholder="Comentario" s={12}  />
          <Button waves='light'>Agregar<Icon left>comment</Icon></Button>
      </ Row>

    )
  }
}
