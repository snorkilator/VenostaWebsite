import { Container, Col, Row } from "react-bootstrap";
export default function Locations() {
  return (
    <Container>
      <h4>Venosta Station (Youth Center)</h4>
      <address>8 Chem. de la Station, Venosta, QC J0X 3E0</address>
      <Row>
        <Col md={6}>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.027900889888!2d-76.02678348442885!3d45.870751379107865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1c99b7740bbcd%3A0xde32ef4ead69d9d8!2sBe%20and%20Become%20-%20Venosta%20Station!5e0!3m2!1sen!2sca!4v1670273065519!5m2!1sen!2sca"
              width="600"
              height="600"
              frameBorder="0"
              style={{ border: 0 }}
              // allowFullscreen = {true}
            ></iframe>
          </div>
        </Col>
        <Col md={6}>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1670435561669!6m8!1m7!1sYkQ_73Dfb0vwfaLL7zteGw!2m2!1d45.86927457835293!2d-76.02225559357015!3f291.5160947046295!4f-4.83694595696862!5f0.7820865974627469"
              width="600"
              height="600"
              style={{ border: 0 }}
              // allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
      <h4>Low Arena (Youth circles and A/V club)</h4>
      <address>342 Rte 105, Low, QC J0X 2C0</address>
      <Row>
        <Col md={6}>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.2665415049108!2d-75.95107601911526!3d45.80993325260893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1cf5a90f1141b%3A0x8e9cb9ee2aeab9c!2sGatineau%20Valley%20Arena!5e0!3m2!1sen!2sca!4v1670274275441!5m2!1sen!2sca"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              // allowFullscreen = {true}
            ></iframe>
          </div>
        </Col>
        <Col md={6}>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1670436280542!6m8!1m7!1symLr8R58hxfUftfIy89ULg!2m2!1d45.81012414092108!2d-75.95135602383274!3f101.04994473738954!4f-4.9813613815126985!5f0.7820865974627469"
              width="600"
              height="600"
              style={{ border: 0 }}
              //   allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
