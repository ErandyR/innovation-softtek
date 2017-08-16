import React from "react";
import "../css/CrearReto.css";

export default class CrearReto extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <form className="col s12 " >
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Título del reto</p>
              <input id="crearReto" type="text" className="validate" />
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Acerca de qué es tu reto?</p>
              <textarea id="reto-textarea" className="materialize-textarea"></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
