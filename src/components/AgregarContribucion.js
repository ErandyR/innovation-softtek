import React, { Component } from 'react';
import { Col, Card, Modal, Button, Row } from 'react-materialize';

export default class AgregarContribucion extends Component {
    render(){
        return(
            <Row>
                <Col m={2} s={12}>
                  <Card className='blue-grey darken-1' title='Agregar idea'>
                    <Modal
                        header='Modal Header'
                        trigger={<Button floating large className='red' waves='light' icon='add' />}>
                        <PublicacionFormulario />
                    </Modal>
                  </Card>
                </Col>
                <Col m={2} s={12}>
                  <Card className='blue-grey darken-1' title='Agregar idea'>
                    
                  </Card>
                </Col>
            </Row>
        )
    }
}