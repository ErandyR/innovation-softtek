import React, {Component} from 'react';
import {Col, Row, SideNav, SideNavItem} from 'react-materialize';
import logo from '../softtek.png'
import '../css/NavPrincipal.css';

export default class NavPrincipal extends Component {
  render() {
    return (

      <nav className='nav--height'>
        <Row className="nav-wrapper white grey-text">
          <Col  s={1}>
            <div className='brand-logo ' to="/home"><img className='img-logo' src={logo} alt=""/></div>
          </Col>
          <Col s={1} offset='s5'>
            <i className='material-icons icon'>search</i>
          </Col>
          <Col s={2}>
            <input  type = "search" />
          </Col>
          <Col s={1}>
              <a href="" className='grey-text'><i className='material-icons icon'>comment</i></a>
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
