import React from "react";
import "../css/TarjetaVerReto.css"
import {Row, Col, CardPanel, Button, Card} from "react-materialize";
import {Link} from 'react-router-dom';

export default class TarjetaVerReto extends React.Component {
  render() {
    let color = {
    background:this.props.background,

  }
    return (
      <div>
        <Card>
          <Row>
            <Col m={12}>
              <h4>{this.props.titulo}</h4>
            </Col>
          </Row>
          <Row>
            <Col m={5} offset='m7'>
              <p  className='center' style={{background:color.background}}>{this.props.tipo}</p>
            </Col>
          </Row>
          <Row>
            <Col m={5}>
              <i className='material-icons'>access_time</i> <small><span>{this.props.time}</span></small>
            </Col>
            <Col m={7}>
                <i className='material-icons red-text'>location_on</i> <small><span>{this.props.location}</span></small>
            </Col>
          </Row>
          <Row>
            <Col m={12}>
              <p>{this.props.descripcion}</p>
            </Col>
          </Row>
          <Row>
            <Col m={3}>
              <Link to='/paginaReto'><a  className="btn-tarjeta-reto btn-tarjeta-reto-margin btn">Contribuir</a></Link>  
            </Col>
            <Col m={6}>
              <a className="btn-tarjeta-reto btn">Link Post</a>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
