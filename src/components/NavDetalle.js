import React, { Component } from 'react';
import '../css/NavDetalle.css';
import {Icon} from 'react-materialize'; 

export default class NavDetalle extends Component {
    render(){
        return(
            <div className="sidebarDetalle" role="navigation">
                <div className="sidebar_nav_detalle">
                    <ul className="nav nav-stacked espacioNav">
                        <li className="espacio center"><a href="#"><Icon medium>web</Icon></a></li>
                        <li className="espacio center"><a href="#"><Icon medium>equalizer</Icon></a></li>
                        <li className="espacio center"><a href="#"><Icon medium>public</Icon></a></li>
                        <li className="espacio center"><a href="#"><Icon medium>attach_file</Icon></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}