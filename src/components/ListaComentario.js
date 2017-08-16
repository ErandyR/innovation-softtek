import React,{Component} from 'react';
import TarjetaComentario from './TarjetaComentario';

export default class ListaComentario extends Component{
		render (){
			const listaComentarios =this.props.comentarios;
				console.log(listaComentarios);

			return (
					<ul>
						{listaComentarios.map((coments,i)=>{
							return(
							<TarjetaComentario key={i}  comentarioS={coments}/>
							)})}

					</ul>
			)
		}
	}
