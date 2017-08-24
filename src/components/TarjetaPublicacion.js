import React, {Component} from 'react';
import {
  Card,
  Row,
  Col,
  Chip
} from 'react-materialize';
import {Link} from 'react-router-dom';

export default class TarjetaPublicacion extends Component {
    
  render() {
    let color = {
    background:this.props.background,

  }
    return (
      <Card actions={[<Link to='/pantallaDetalle/detalle'><a href='../pantallaDetalle/detalle'>Ver mas ...</a></Link>]}>
        <Row>
          <Col m={12}>
            <h4>{this.props.titulo}</h4>
          </Col>
        </Row>
        <Row>
          <Col m={5} offset='m7'>
            <p  className='center' style={{background:'rgb(71, 168, 199)'}}>{this.props.idea}</p>
          </Col>
        </Row>
        <Row>
          <Col m={5}>
            <i className='material-icons'>access_time</i> <small><span>13 días</span></small>
          </Col>
          <Col m={7}>
              <i className='material-icons red-text'>location_on</i> <small><span>GDC Monterrey</span></small>
          </Col>
        </Row>
        <Row>
          <Col m={12}>
            <p>{this.props.descripcion}</p>
          </Col>
        </Row>
        <Row>
          <Col m={12}>
            <Chip><Link className="black-text" to="/paginaTag" >{this.props.tag}</Link></Chip>
          </Col>
        </Row>
        <Row>
          <Col m={3}>
            <i className='material-icons'>comment</i><span class="new badge">0</span>
          </Col>
          <Col m={3}>
            <i className='material-icons red-text'>favorite_border</i><span class="new badge">1</span>
          </Col>
          <Col m={3}>
            <i className='material-icons blue-text'>attachment</i><span class="new badge">0</span>
          </Col>
        </Row>
      </Card>
    )
  }
}
