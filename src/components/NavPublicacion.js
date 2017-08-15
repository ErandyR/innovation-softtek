import React, { Component } from 'react';
import '../css/NavPublicacion.css';

export default class NavPublicacion extends Component {
    render(){
        return(
            <div id="sidebar" role="navigation">
                <div id="sidebar-nav">
                    <ul class="nav nav-stacked">
                        <li className="texto-vertical espacioPorElemento1"><a href="#" className="fontSize">Idea</a></li>
                        <li className="texto-vertical espacioPorElemento"><a href="#" className="fontSize">Necesidad</a></li>
                        <li className="texto-vertical espacioPorElemento"><a href="#" className="fontSize"> Reto</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}