import React,{Component} from 'react';
import {Col,Card} from 'react-materialize';

export default class TarjetaComentario extends Component{
  render(){
    return(
      <Col m={4} s={6}>

        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s3">
              <img src="http://compartimosunbrunch.com/wp-content/uploads/2012/04/torre-eiffel.jpg" alt="" className="circle responsive-img" />
            </div>
            <div className="col s9">
              <span className="black-text">
                Esté es un ejemplo de lo que que ingresa el usuario
              </span>
            </div>
          </div>
        </div>


      </Col>
    )
  }
}
