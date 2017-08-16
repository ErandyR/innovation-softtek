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
      <Card actions={[<Link to='/detalle'><a href='../detalle'>Ver mas ...</a></Link>]}>
        <Row>
          <Col m={12}>
            <h4>{this.props.titulo}</h4>
          </Col>
        </Row>
        <Row>
          <Col m={3} offset='m9'>
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
          <Col m={12}>
            <Chip>hola</Chip>
          </Col>
        </Row>
        <Row>
          <Col m={3}>
            <i className='material-icons blue-text'>thumb_up</i><span class="new badge">1</span>
          </Col>
          <Col m={3} offset='m6'>
              <i className='material-icons red-text'>thumb_down</i><span class="new badge">1</span>
          </Col>
        </Row>
      </Card>
    )
  }
}
