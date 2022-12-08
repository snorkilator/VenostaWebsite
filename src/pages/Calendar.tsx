import { useState, useCallback, useMemo } from "react";
import { Container, Col, Modal, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Eventcalendar,
  toast,
  MbscEventClickEvent,
  EventcalendarBase,
  MbscCalendarEvent,
} from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   connectFirestoreEmulator,
// } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDlgO68_iznv5sVPgY5lNilnCpwAiRfhcA",

  authDomain: "todo-app-ec65a.firebaseapp.com",

  projectId: "todo-app-ec65a",

  storageBucket: "todo-app-ec65a.appspot.com",

  messagingSenderId: "822873561393",

  appId: "1:822873561393:web:b581313c15ad7c4202f810",

  measurementId: "G-BMS5NZ1W7Z",
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// connectFirestoreEmulator(db, "localhost", 8080);

export default function YouthCaledendar() {
  const [selectedEvent, setSelectedEvent] = useState(
    undefined as MbscCalendarEvent | undefined
  );

  let event: MbscCalendarEvent = {
    start: new Date(2022, 11, 6),
    end: new Date(2022, 11, 6),
    title: "A/V club",
    description:
      "Être et Devenir / Be and Become started up under ACSADK Assn. in Kazabazua in 2011 with a federal Skills Link project, an employment program for out of school and work youth, funded by Service Canada; now we exist as a not-for-profit organization.  With the need for a youth centre in this region, we were donated the train station in 2017. ",
    location: "The Station",
  };
  let eventTwo: MbscCalendarEvent = {
    start: new Date(2022, 11, 8),
    end: new Date(2022, 11, 8),
    title: "Youth circles",
    description:
      "Être et Devenir / Be and Become started up under ACSADK Assn. in Kazabazua in 2011 with a federal Skills Link project, an employment program for out of school and work youth, funded by Service Canada; now we exist as a not-for-profit organization.  With the need for a youth centre in this region, we were donated the train station in 2017. ",
    location: "The Station",
    formURL: "https://docs.google.com/forms/d/e/1FAIpQLSfMHXSw0v9JQFu9Qm-1YefcIv19LsgNc-YHcHyKAcEvJ5rMTw/viewform?embedded=true"
  };
  const [events, setEvents] = useState([
    event, eventTwo
  ]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const myView = useMemo(() => {
    return {
      calendar: { type: "month", labels: true },
      agenda: { type: "month" },
    };
  }, []);

  const onEventClick = (event: MbscCalendarEvent) => {
    console.log(event);
    handleShow();
    setSelectedEvent(event.event);
  };

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
      <EventModal show={show} handleClose={handleClose} event={selectedEvent} />
    </>
  );
}

function EventModal(props: {
  show: boolean;
  handleClose: () => void;
  event: MbscCalendarEvent | undefined;
}) {
  if (!props.event) {
    console.log("Event not loaded")
    return (
      <Modal>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h3>Loading...</h3>
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
    );
  }
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Row className="fluid">
          <Col sm={12}>
            {props.event.start && props.event.start.toDateString()} at
            {props.event.location}
          </Col>
          <Col sm={12}>
            <Modal.Title>{props.event.title}</Modal.Title>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        {props.event.description}
        <hr />
        <Button className="m-1" variant="secondary" onClick={() => {}}>
          Share
        </Button>
        <Button className="m-1" variant="secondary" onClick={() => {}}>
          Add to calendar
        </Button>
        {props.event.formURL && <GooglFormWrapper formURL={props.event.formURL}/>}
        {/* <Form>
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
        </Form> */}
      </Modal.Body>
      {/* <Modal.Footer>
      </Modal.Footer> */}
    </Modal>
  );
}

function GooglFormWrapper(props: {formURL: string}){
return <>
<h3 className="text-center">Sign up!</h3>
<iframe className="form" src={props.formURL} id="signupForm"  height="1200px" width="100%">Loading…</iframe>
</>
}