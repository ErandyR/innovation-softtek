import React, { Component } from 'react';
import '../css/AgregarContribucion.css';
import { Col, Card, Modal, Button } from 'react-materialize';

export default class AgregarContribucion extends Component {
    render(){
        return(
            <div>
                <Col m={6} s={12}>
		            <Card className='blue-grey darken-1' title='Card title'>
                        <Modal
                            header='Modal Header'
                            trigger={<Button floating large className='red' waves='light' icon='add' />}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Modal>
		            </Card>
                </Col>
            </div>
        )
    }
}