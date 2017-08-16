import React, { Component } from 'react';
import '../css/NavDetalle.css';
import {Icon} from 'react-materialize'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class NavDetalle extends Component {
    render(){
        return(
            <Router>
                <div className="sidebarDetalle" role="navigation">
                    <div className="sidebar_nav_detalle">
                        <ul className="nav nav-stacked espacioNav">
                            <li className="espacio center"><Link to="/"><Icon medium>web</Icon></Link></li>
                            <li className="espacio center"><Link to="/grafica"><Icon medium>equalizer</Icon></Link></li>
                            <li className="espacio center"><a href="#"><Icon medium>public</Icon></a></li>
                            <li className="espacio center"><a href="#"><Icon medium>attach_file</Icon></a></li>
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }
}