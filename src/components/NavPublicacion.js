import React, { Component } from 'react';
import '../css/NavPublicacion.css';

export default class NavPublicacion extends Component {
    render(){
        return(
            <div id="sidebar-publicacion" role="navigation">
                <div id="sidebar-nav-publicacion">
                    <ul className="nav nav-stacked">
                        <li className="texto-vertical espacioPorElemento1"><a href="/home/idea" className="fontSize">Idea</a></li>
                        <li className="texto-vertical espacioPorElemento"><a href="#" className="fontSize">Necesidad</a></li>
                        <li className="texto-vertical espacioPorElemento"><a href="#" className="fontSize"> Reto</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
