import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContenidoDetalle from  './ContenidoDetalle';
import AnalyticsLikes from  '../containers/AnalyticsLikes';

export default class EnlacesDetalle extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" exact component={ContenidoDetalle}/>
                    <Route path="/grafica" component={AnalyticsLikes}/>
                </div>
            </Router>
        )
    }
}