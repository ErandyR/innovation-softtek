import React from "react";
import {Row, Input} from 'react-materialize'
import "../css/PublicacionFormulario.css";

export default class PublicacionFormulario extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            tarjeta: {}
        }
        this.actualizarEstado = this.actualizarEstado.bind(this);
        this.agregarTarjeta = this.agregarTarjeta.bind(this);

    }
    actualizarEstado(e) {
        const nuevoValor = e.target.value;
        console.log(nuevoValor);
        const propiedad = e.target.dataset.target;
        let tarjeta = this.state.tarjeta;
        tarjeta[propiedad] = nuevoValor;
        this.setState({
            tarjeta: tarjeta
        })
        console.log(tarjeta)
    }
    
    
    agregarTarjeta(e) {
        e.preventDefault();
        const tarjeta = this.state.tarjeta;
        this.props.agregar(tarjeta);
        this.setState({
            tarjeta: {
                titulo: '',
                descripcion: '',
                idea: '',
                necesidad: '',
                tags: '',
            }
        });
        console.log("estoy dentro", tarjeta);
    }
  render(){
    return(
      <div>
        <div className="row">
          <form onSubmit={this.agregarTarjeta}>
            <div className="switch bold col s4 offset-s8">
              <label>
              Make private idea
              <input type="checkbox" />
              <span className="lever"></span>
              </label>
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Title</p>
              <input id="last_name" type="text" className="validate" data-target='titulo' value={this.state.tarjeta.titulo} onChange={this.actualizarEstado}/>
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Description</p>
              <textarea id="textarea1" className="materialize-textarea" data-target='descripcion' value={this.state.tarjeta.descripcion} onChange={this.actualizarEstado} ></textarea>
            </div>
            <Row className="col s5 offset-s1">
              <p className="center bold margin0">Idea</p>
              <Input s={10} type='select' data-target='idea' value={this.state.tarjeta.idea} onChange={this.actualizarEstado} >
                <option value='0'>Select</option>
                <option value='1'>Application</option>
                <option value='2'>POC</option>
                <option value='3'>Microservice</option>
                <option value='4'>Other</option>
              </Input>
            </Row>
            <Row className="col s5 offset-s1">
              <p className="center bold margin0">Need</p>
              <Input s={10} type='select' data-target='necesidad' value={this.state.tarjeta.necesidad} onChange={this.actualizarEstado} >
                <option value='0'>Select</option>
                <option value='1'>Application</option>
                <option value='2'>POC</option>
                <option value='3'>Microservice</option>
                <option value='4'>Other</option>
              </Input>
            </Row>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Tags (Enter tag and press enter)</p>
              <input id="last_name" type="text" className="validate" data-target='tags' value={this.state.tarjeta.tags} onChange={this.actualizarEstado} />
            </div>
            <div className="file-field input-field col s5 offset-s1">
              <div className="btn">
                <span>Elegir archivos</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
            </div>
            <button className="col s3 offset-s9 blue">Guardar Cambios</button>
          </form>
        </div>
      </div>

    );
  }
}

