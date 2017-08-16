import React,{Component} from 'react';
import {Col} from 'react-materialize';

export default class TarjetaComentario extends Component{

  render(){
    const comentarioS=this.props.comentarioS;
    console.log("comentario", comentarioS);

    return(
      <Col m={4} s={6}>
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s3">
              <img src="http://compartimosunbrunch.com/wp-content/uploads/2012/04/torre-eiffel.jpg" alt="" className="circle responsive-img" />
            </div>
            <div className="col s9">
              <span className="black-text">
            {comentarioS}
                  </span>
            </div>
          </div>
        </div>


      </Col>
    )
  }
}
