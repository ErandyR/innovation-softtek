import React from "react";
import "../css/TarjetaVerReto.css"
import { Row, Col, CardPanel, Button } from "react-materialize";

export default class TarjetaVerReto extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <Col s={12} m={5}>
              <CardPanel className="black-text">
                <h5>How To Build A Community For ITIS</h5>
                <div className="col s6">
                  <i className="tiny material-icons">access_time</i>
                  <span >a mounth ago</span>
                </div>
                <div className="col s6">
                  <i className="tiny material-icons">location_on</i>
                  <span >GDC Monterrey</span>
                </div>
                <p className="">Improving CoEs, Services and Practice areas through sharing best practices.</p>
                <Button className="btn-tarjeta-reto btn-tarjeta-reto-margin" >Contribute</Button>
                <Button className="btn-tarjeta-reto">Link Post</Button>
                <div className="division center blue-text">
                  <p>See Challenge</p>
                </div>

              </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}
