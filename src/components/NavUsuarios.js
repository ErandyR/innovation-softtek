import React from "react";
import "../css/NavUsuarios.css";

export default class NavUsuarios extends React.Component {
  render(){
    return(
      <div id="sidebar-navUsuarios" role="navigation" className="col m2 s2 offset-m10 offset-s10">
        <div id="sidebar-nav-navUsuarios">
          <ul className="">
            <li className="bordeUsuario">
              <a>
                <img src="https://dummyimage.com/100x100/#fff/00ff5e.jpg" className="responsive-img radius" alt="fotoUsuario"/>
                <p>Nombre Usuario</p>
              </a>
            </li>
            <li className="bordeUsuario">
              <a>
                <img src="https://dummyimage.com/100x100/#fff/00ff5e.jpg" className="responsive-img radius" alt="fotoUsuario"/>
                <p>Nombre Usuario</p>
              </a>
            </li>
            <li className="bordeUsuario">
              <a>
                <img src="https://dummyimage.com/100x100/#fff/00ff5e.jpg" className="responsive-img radius" alt="fotoUsuario"/>
                <p>Nombre Usuario</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
