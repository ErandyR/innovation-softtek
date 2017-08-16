import React, {Component} from 'react';
import {Col, Row, Modal} from 'react-materialize';
import logo from '../softtek.png'
import '../css/NavPrincipal.css';
import PublicacionFormulario from './PublicacionFormulario';
import CrearReto from './CrearReto';
import {Link} from 'react-router-dom';

export default class NavPrincipal extends Component {
  render() {
    return (

      <nav className='nav--height'>
        <Row className="nav-wrapper white grey-text">
          <Col s={1}>
          <Link className='brand-logo ' to="/home/ideas"><img className='img-logo' src={logo} alt=""/></Link>
          </Col>
          <Col s={1} offset='s4'>
            <i className='material-icons icon'>search</i>
          </Col>
          <Col s={2}>
            <input type="search"/>
          </Col>
          <Col s={1}>
            <Modal header='Create a Challenge' trigger={< a  className=' btn btn-verde' >Reto< /a>}>
              <CrearReto />
              <button className="col s3 offset-s9 blue">Save Changes</button>
            </Modal>
          </Col>
          <Col s={1}>
            <Modal header='Idea' trigger={< a  className='grey-text' ><i className='material-icons icon-comment'>comment</i>< /a>}>
              <PublicacionFormulario/>
              <button className="col s3 offset-s9 blue">Guardar Cambios</button>
            </Modal>
          </Col>
          <Col s={1}>
            <i className='material-icons icon'>notifications</i>
          </Col>
          <Col s={1}>
            <img className='foto-perfil responsive-img' src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt=""/>
          </Col>
        </Row>
      </nav>

    )
  }
}
