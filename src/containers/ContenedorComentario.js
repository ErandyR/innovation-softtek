import React,{Component} from 'react';
import {Col,Row,Input,Button,Icon} from 'react-materialize';
import firebase from 'firebase'
import ComentarioFormulario from '../components/ComentarioFormulario';
import ListaComentario from '../components/ListaComentario';

export default class ContenedorComentario extends Component{
  constructor(props){
		super(props);
		this.state={
			listaactual:[]
		};
	}

	componentDidMount(){
		const config = {
      apiKey: "AIzaSyCy-ft_wt4baliR_W5DK8BhHMV2v231_Sg",
      authDomain: "softtek-16f76.firebaseapp.com",
      databaseURL: "https://softtek-16f76.firebaseio.com",
      projectId: "softtek-16f76",
      storageBucket: "",
      messagingSenderId: "920399509628"
	    };


	const app= firebase.initializeApp(config);
	this.database = app.database();
	console.log(this.database);

const comentariosBaseDatos = this.database.ref('listaFinal');
	comentariosBaseDatos.on('value',(respuesta)=> {

	const listaComent = respuesta.val();
			this.setState({
			listaactual:listaComent.comentarios
		})

	});
	}

	guardarLista(comentarios){
		const comentariosBaseDatos = this.database.ref('listaFinal');
	//escribe en la base de datos
		comentariosBaseDatos.set({
			comentarios:comentarios
		});
	}


	agregarComentario = (comentario)=>{
		let listaComentario = this.state.listaactual;
		listaComentario.unshift(comentario);
		this.setState({
			listaactual:listaComentario
		});
		this.guardarLista(listaComentario);
	}

  render() {
	  const comentarios = this.state.listaactual;

    return(
      <Row>
      <ComentarioFormulario agregarComentario={this.agregarComentario.bind(this)}/>
      <ListaComentario comentarios = {comentarios}/>

     </Row>

    )
  }
}
