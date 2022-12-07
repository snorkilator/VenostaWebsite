import { useState, useCallback, useMemo } from "react";
import { Container, Col, Modal, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Eventcalendar,
  toast,
  MbscEventClickEvent,
  MbscCalendarEvent,
  EventcalendarBase,
} from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

export default function YouthCaledendar() {
  const [events, setEvents] = useState([
    {
      start: new Date(2022, 10, 30),
      end: new Date(2022, 11, 1),
      title: "Event",
      description: "THis is an event",
      location: "location",
    },
    {
      start: new Date(2022, 11, 6),
      end: new Date(2022, 11, 6),
      title: "A/V club",
      description: "THis is an event",
      location: "location",
    },
  ]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let event = {
    start: new Date(2022, 11, 6),
    end: new Date(2022, 11, 6),
    title: "A/V club",
    description:
      "Être et Devenir / Be and Become started up under ACSADK Assn. in Kazabazua in 2011 with a federal Skills Link project, an employment program for out of school and work youth, funded by Service Canada; now we exist as a not-for-profit organization.  With the need for a youth centre in this region, we were donated the train station in 2017. ",
    location: "The Station",
  };

  const myView = useMemo(() => {
    return {
      calendar: { type: "month", labels: true },
      agenda: { type: "month" },
    };
  }, []);

  const onEventClick = useCallback(
    (event: MbscCalendarEvent, base: EventcalendarBase) => {
      handleShow();
    },
    []
  );

  return (
    <>
      <Container>
        <Eventcalendar
          data={events}
          theme="material"
          themeVariant="light"
          onEventClick={onEventClick}
          // renderEvent={renderEvent}
          view={myView as any}
        />
      </Container>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Row className="fluid">
              <Col sm={12}>
                {event.start.toDateString()} at {event.location}
              </Col>
              <Col sm={12}>
                <Modal.Title>{event.title}</Modal.Title>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body>
            {event.description}
            <hr />
            <Form>
              <h2>Signup for the event!</h2>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name of parent/gaurdian</Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Cell</Form.Label>
                <Form.Control type="tel" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name of youth</Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {}}>
              Share
            </Button>
            <Button variant="secondary" onClick={() => {}}>
              Add to calendar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
