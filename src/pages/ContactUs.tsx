import { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormLabel, Button } from "react-bootstrap";
import MarkDown from "../utilities/MarkDown";
// import key from "../apikeys/maps.apikey"

export default function Coordinates() {
  return (
    <Container className="text-center">
      <Row>
        <Col sm={12} md={6}>
          <MarkDown path="/markdown/contact_us" />
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
