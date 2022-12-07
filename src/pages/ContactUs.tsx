import { useState } from "react";
import { Container, Row, Col, Form, FormLabel, Button } from "react-bootstrap";
// import key from "../apikeys/maps.apikey"

export default function Coordinates() {
  return (
    <Container className="text-center">
      <Row>
        <Col sm={12} md={6}>
          <h5>Address:</h5>
          <address>8 Chem. de la Station, Venosta, QC J0X 3E0</address>
          <h5>Email:</h5> <address>venostastation+web@gmail.com</address>
          <h5>Phone:</h5> <address>(XXX) XXX XXXX</address>
          <h5>Opening hours:</h5>
          <p>
            5pm-8pm Friday <br /> 4pm-6pm Monday-Thursday
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Form className="row justify-content-center">
            <h3>Send us a message!</h3>
            <Row>
              <Col sm={6}>
                <FormLabel>Full name</FormLabel>
                <Form.Control type="name"></Form.Control>
              </Col>
              <Col sm={6}>
                <FormLabel>Email</FormLabel>
                <Form.Control type="email"></Form.Control>
              </Col>
            </Row>
            <Row>
              <FormLabel>Message:</FormLabel>
              <Form.Control as="textarea" rows={2}></Form.Control>
            </Row>
            <Row>
              <Col>
                <Button className="btn-secondary">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
