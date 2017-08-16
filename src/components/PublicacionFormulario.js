import React from "react";
import {Row, Input} from 'react-materialize'
import "../css/PublicacionFormulario.css";

export default class PublicacionFormulario extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <form className="col s6 offset-s3" >
            <div className="switch bold col s4 offset-s8">
              <label>
              Make private idea
              <input type="checkbox" />
              <span className="lever"></span>
              </label>
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Title</p>
              <input id="last_name" type="text" className="validate" />
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Description</p>
              <textarea id="textarea1" className="materialize-textarea"></textarea>
            </div>
            <Row className="col s5 offset-s1">
              <p className="center bold margin0">Idea</p>
              <Input s={10} type='select'>
                <option value='0'>Select</option>
                <option value='1'>Application</option>
                <option value='2'>POC</option>
                <option value='3'>Microservice</option>
                <option value='4'>Other</option>
              </Input>
            </Row>
            <Row className="col s5 offset-s1">
              <p className="center bold margin0">Need</p>
              <Input s={10} type='select'>
                <option value='0'>Select</option>
                <option value='1'>Application</option>
                <option value='2'>POC</option>
                <option value='3'>Microservice</option>
                <option value='4'>Other</option>
              </Input>
            </Row>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Tags (Enter tag and press enter)</p>
              <input id="last_name" type="text" className="validate" />
            </div>
            <div className="file-field input-field col s10 offset-s1">
              <div className="btn">
                <span>Elegir archivos</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
