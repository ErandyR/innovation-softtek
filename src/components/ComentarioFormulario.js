import React,{Component} from 'react';
import {Button,Input,Icon} from 'react-materialize';
import '../css/Comentarios.css';

export default class ComentarioFormulario extends Component{
  constructor(props){
		super(props);
		this.state={
			comentario:""
		};

	}
	handleSubmit(e){
		e.preventDefault();
		const comentario = this.state.comentario;
		this.props.agregarComentario(comentario)
	}

	updateState = (e)=>{
		const comentario = e.target.value;
    console.log(comentario);
		this.setState({
			comentario:comentario
		});

	}
	render (){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
          <Input id="input"placeholder="Comentario" s={12} type="text" onChange={this.updateState} />
          <Button type='submit' waves='light'>Agregar<Icon left>comment</Icon></Button>
      </ form>

    )
  }
}
