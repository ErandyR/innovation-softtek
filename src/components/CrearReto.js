import React from "react";
import "../css/CrearReto.css";

export default class CrearReto extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <form className="col s12 " >
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Title of your Challenge</p>
              <input id="last_name" type="text" className="validate" />
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">What is your challenge about?</p>
              <textarea id="textarea1" className="materialize-textarea"></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
