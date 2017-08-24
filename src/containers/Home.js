import React, {Component} from 'react';
import NavPrincipal from '../components/NavPrincipal';
import NavUsuarios from '../components/NavUsuarios';
import NavPublicacion from '../components/NavPublicacion';
import {Col, Row, Modal } from 'react-materialize';
import ContenedorIdeas from './ContenedorIdeas';
import ContenedorNecesidades from './ContenedorNecesidades';
import ContenedorRetos from './ContenedorRetos';
import '../css/NavPrincipal.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import logo from '../softtek.png'
import PublicacionFormulario from '../components/PublicacionFormulario';
import CrearReto from '../components/CrearReto';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          tarjetas: []  
        };
        
        this.agregarTarjeta = this.agregarTarjeta.bind(this);
    }
    
    agregarTarjeta(tarjeta) {  
        let listaTarjetas = this.state.tarjetas; 
        listaTarjetas.push(tarjeta);
        this.setState({
            tarjetas: listaTarjetas
        });
    }

    
    
  render() {
    return (
      <div>
        <Row>
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
                  <PublicacionFormulario agregar={this.agregarTarjeta} />
                </Modal>
              </Col>
              <Col s={1}>
                <i className='material-icons icon'>notifications</i>
              </Col>
              <Col s={1}>
                <Link to='/paginaUsuario'><img className='foto-perfil responsive-img' src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt=""/></Link>
              </Col>
            </Row>
          </nav>

        </Row>
        <Row>
          <Col m={1}>
            <NavPublicacion/>
          </Col>
          <Col m={10} className='col-margin'>
            <Switch>
              <Route path="/home/ideas" tarjetas={this.state.tarjetas} component={ContenedorIdeas}/>
              <Route path="/home/necesidades" component={ContenedorNecesidades}/>
              <Route path="/home/retos" component={ContenedorRetos}/>
            </Switch>
          </Col>
          <Col m={1}>
            <NavUsuarios/>
          </Col>
        </Row>

      </div>
    )
  }
}