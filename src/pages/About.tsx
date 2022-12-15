import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import Programs from "./Programs";

export default function About() {
  return (
    <Container>
      <h1 className="mission">Mission</h1>
      <p className="mission">
        Increase youth-community connections by developing and supporting
        community-based activities that encourage youth engagement and
        leadership and empower youth to act on their own development. In
        collaboration with regional partners Be and Become supports and promotes
        engagement of “youth” aged 12-34 in our communities.
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
        Since 2012, Be and Become has been operating as a Committee of Kazabazua
        cultural, social and seniors association (ACSADK), a not-for-profit
        organization in Kazabazua. In 2018, to meet the needs of this region, Be
        and Become was established as a registered non-profit organization to
        pursue a regional strategy for youth engagement in the southern sector
        of the La Vallée-de-la-Gatineau RCM. We were donated the Venosta train
        station. Renovation of the interior is finished, and the facility now
        operating as a Regional Youth Resource Center, supporting: a drop-in
        facility connecting youth of the region; new media facility to support
        programming that includes: Valley Youth Voices, open-mic events, music,
        visuals, community events. Renovation in 2023 aims to finish the
        exterior – basement drainage, the exterior walls, decks, and parking
        lots. With renovations completed, a Café can open to the public: users
        of the Véloroute des Draveurs, daily travellers, vacationers, and
        tourists. Ongoing donations are welcome.
      </p>
      <h1 className="board">Board</h1>
      <Row>
        <Col>Charles Kealey – Accounting</Col>
        <Col>Charles Kealey – Accounting</Col>
      </Row>
      <Row>
        <Col>Sandra Shean – Secretary</Col>
        <Col>Maureen McEvoy – Board member</Col>
      </Row>
      <Row>
        <Col>Angèle Gagon – Board member</Col>
        <Col>Tara Shippers – Board member</Col>
      </Row>
      <Row>
        <Col>Krystal Koch – Board member</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
