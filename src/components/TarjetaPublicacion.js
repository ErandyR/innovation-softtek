import React, {Component} from 'react';
import {
  Card,
  Row,
  Col,
  Collection,
  CollectionItem,
  Button,
  Chip
} from 'react-materialize';

export default class TarjetaPublicacion extends Component {
  render() {
    let color = {
    background:this.props.background,

  }
    return (
      <Card actions={[< a href = '#' > Ver Detalle ...</a>]}>
        <Row>
          <Col m={12}>
            <h4>{this.props.titulo}</h4>
          </Col>
        </Row>
        <Row>
          <Col m={3} offset='m9'>
            <p style={{background:color.background}}>{this.props.tipo}</p>
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
            <i className='material-icons'>thumb_up</i>
          </Col>
          <Col m={3} offset='m6'>
              <i className='material-icons'>thumb_down</i>
          </Col>
        </Row>
      </Card>
    )
  }
}
