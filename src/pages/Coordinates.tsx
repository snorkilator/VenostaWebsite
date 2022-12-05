import { useState } from "react";
import { Container, Row, Col, Form, FormLabel, Button } from "react-bootstrap";
// import key from "../apikeys/maps.apikey"

export default function Coordinates() {
  return (
    <Container className="text-center">
      <Row>
        <Col sm={12} lg={4} className="g-1">
          <h4>Venosta Station (Youth Center)</h4>
          <address>8 Chem. de la Station, Venosta, QC J0X 3E0</address>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.027900889888!2d-76.02678348442885!3d45.870751379107865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1c99b7740bbcd%3A0xde32ef4ead69d9d8!2sBe%20and%20Become%20-%20Venosta%20Station!5e0!3m2!1sen!2sca!4v1670273065519!5m2!1sen!2sca"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              // allowFullscreen = {true}
            ></iframe>
          </div>
        </Col>
        <Col sm={12} lg={4} className="g-1">
          <h4>Low Arena (Youth circles and A/V club)</h4>
          <address>342 Rte 105, Low, QC J0X 2C0</address>
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
        <Col sm={12} lg={4}>
          <Row>
            <h4>Contact us</h4>
            <Col sm={6}>
              <label>
                <h5>Address:</h5>
              </label>
              <address>8 Chem. de la Station, Venosta, QC J0X 3E0</address>
            </Col>
            <Col sm={6}>
              <label>
                <h5>Opening hours:</h5>
              </label>
              <address>8 Chem. de la Station, Venosta, QC J0X 3E0</address>
            </Col>
            <hr />
          </Row>
          <h5>Send us a message!</h5>
          <Form className="row">
            <Col sm={6}>
              <FormLabel>Full name</FormLabel>
              <Form.Control type="name"></Form.Control>
            </Col>
            <Col sm={6}>
              <FormLabel>Email</FormLabel>
              <Form.Control type="email"></Form.Control>
            </Col>
            <Row>
              <FormLabel>Message:</FormLabel>
              <Form.Control as="textarea" rows={2}>
                {" "}
              </Form.Control>
            </Row>
            <Row>
              <Col className="g-2">
                <Button className="btn-secondary">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
