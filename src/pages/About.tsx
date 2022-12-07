import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import Programs from "./Programs";

export default function About() {
  return (
    <Container>
      <h1 className="mission">Mission</h1>
      <p className="mission">
        Quod aspernatur temporibus quia. Cumque sunt qui alias possimus optio
        vitae quos. Nostrum vel iusto porro distinctio. Possimus minus
        voluptatibus consequatur rerum qui enim quo. Quisquam sit qui expedita
        esse velit eius autem veniam. Facilis neque quam sint harum sit et quo
        omnis.
      </p>
      <h1 className="departments">Departments</h1>
      <Programs />
      <h1 className="staff">Staff</h1>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <h5 className="Staff">Jon Doe - Coordinator</h5>
          <p className="staff-bio">
            Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
            optio vitae quos. Nostrum vel iusto porro distinctio. Possimus minus
            voluptatibus consequatur rerum qui enim quo. Quisquam sit qui
            expedita esse velit eius autem veniam. Facilis neque quam sint harum
            sit et quo
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="Staff">Jon Doe - Coordinator</h5>
          <p className="staff-bio">
            Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
            optio vitae quos. Nostrum vel iusto porro distinctio. Possimus minus
            voluptatibus consequatur rerum qui enim quo. Quisquam sit qui
            expedita esse velit eius autem veniam. Facilis neque quam sint harum
            sit et quo
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="Staff">Jon Doe - Coordinator</h5>
          <p className="staff-bio">
            Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
            optio vitae quos. Nostrum vel iusto porro distinctio. Possimus minus
            voluptatibus consequatur rerum qui enim quo. Quisquam sit qui
            expedita esse velit eius autem veniam. Facilis neque quam sint harum
            sit et quo
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="Staff">Jon Doe - Coordinator</h5>
          <p className="staff-bio">
            Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
            optio vitae quos. Nostrum vel iusto porro distinctio. Possimus minus
            voluptatibus consequatur rerum qui enim quo. Quisquam sit qui
            expedita esse velit eius autem veniam. Facilis neque quam sint harum
            sit et quo
          </p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="Staff">Jon Doe - Coordinator</h5>
          <p className="staff-bio">
            Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
            optio vitae quos. Nostrum vel iusto porro distinctio. Possimus minus
            voluptatibus consequatur rerum qui enim quo. Quisquam sit qui
            expedita esse velit eius autem veniam. Facilis neque quam sint harum
            sit et quo
          </p>
        </Col>
      </Row>
      <h1 className="history">History</h1>
      <p className="history">
        Quod aspernatur temporibus quia. Cumque sunt qui alias possimus optio
        vitae quos. Nostrum vel iusto porro distinctio. Possimus minus
        voluptatibus consequatur rerum qui enim quo. Quisquam sit qui expedita
        esse velit eius autem veniam. Facilis neque quam sint harum sit et quo
        omnis.
      </p>
      <h1 className="board">Board</h1>
      <Row>
        <Col>Treasurer - John Doe</Col>
        <Col>Treasurer - John Doe</Col>
      </Row>
      <Row>
        <Col>Treasurer - John Doe</Col>
        <Col>Treasurer - John Doe</Col>
      </Row>
      <Row>
        <Col>Treasurer - John Doe</Col>
        <Col>Treasurer - John Doe</Col>
      </Row>
      <Row>
        <Col>Treasurer - John Doe</Col>
        <Col>Treasurer - John Doe</Col>
      </Row>
      <Row>
        <Col>Treasurer - John Doe</Col>
        <Col>Treasurer - John Doe</Col>
      </Row>
    </Container>
  );
}
