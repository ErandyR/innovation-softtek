import React,{Component} from 'react';
import {Col,Button,Input,Icon} from 'react-materialize';

export default class ComentarioFormulario extends Component{
  render(){
    return(
      <Col s={12}>
          <Input placeholder="Comentario" s={9} m={10} label="Comentario" />
          <Button s={3} m={2} waves='light'>Agregar<Icon left>comment</Icon></Button>
      </ Col>

    )
  }
}
