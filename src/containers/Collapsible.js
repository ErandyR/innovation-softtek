import React, { Component } from 'react';
import ContenedorComentario from './ContenedorComentario';
import {Collapsible,CollapsibleItem} from 'react-materialize';

export default class PaginaReto extends Component {
  render() {
    return (
      <Collapsible accordion>
      	<CollapsibleItem header='Contribuciones...' icon='library_add'>
      		Lorem ipsum dolor sit amet.
      	</CollapsibleItem>
      	<CollapsibleItem header='Publicaciones Relacionadas' icon='library_books'>
      		Lorem ipsum dolor sit amet.
      	</CollapsibleItem>
        <CollapsibleItem header='Comentarios...' icon='comment'>
      		<ContenedorComentario />
      	</CollapsibleItem>
      </Collapsible>
    );
  }
}
