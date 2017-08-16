import React, { Component } from 'react';
import { Col, Card, Modal, Button, Row, Icon } from 'react-materialize';
import PublicacionFormularion from './PublicacionFormulario';

export default class AgregarContribucion extends Component {
    render(){
        return(
            <Row>
                <Col m={2} s={12}>
                  <Card className='blue-grey darken-1' title='Agregar idea'>
                    <Modal
                        header='Modal Header'
                        trigger={<Button floating large className='red' waves='light' icon='add' />}>
                        <PublicacionFormularion />
                    </Modal>
                  </Card>
                </Col>
                <Col m={2} s={12}>
                  <Card className='blue-grey darken-1' title='Nueva Idea'>
                    Esta es mi idea
                    <Icon small><i className="material-icons">&#xE87E;</i></Icon>
                    <Icon small><i className="material-icons">&#xE8AF;</i></Icon>
                  </Card>
                </Col>
            </Row>
        )
    }
}