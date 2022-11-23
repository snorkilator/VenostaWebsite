import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <header>
      <Container>
        <Navbar className="navbar navbar-expand-xl navbar- justify-content-center border-bottom">
          <Nav className="row ">
          <Link
              className="nav-link col-auto "
              data-rr-ui-event-key=""
              to=""
            >
              <h3>Home</h3>
            </Link>
            <Link
              className="nav-link col-auto"
              data-rr-ui-event-key="about"
              to="about"
            >
              <h3>About</h3>
            </Link>
            <Link
              className="nav-link col-auto"
              data-rr-ui-event-key="coordinates"
              to="coordinates"
            >
              <h3>Contact Us</h3>
            </Link>
            <Link
              className="nav-link col-auto"
              data-rr-ui-event-key="calendar"
              to="calendar"
            >
              <h3>Calendar</h3>
            </Link>
            <Link
              className="nav-link col-auto"
              data-rr-ui-event-key="programs"
              to="programs"
            >
              <h3>Programs</h3>
            </Link>

            {/* <NavDropdown className="col-auto h3" title="Other services">
              <NavDropdown.Item className="h3" href="#4">
                Action1
              </NavDropdown.Item>
              <NavDropdown.Item className="h3" href="#5">
                Action2
              </NavDropdown.Item>
              <NavDropdown.Item className="h3" href="#6">
                Action3
              </NavDropdown.Item>
              <NavDropdown.Item className="h3" href="#7">
                Action4
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar>
      </Container>
      <br />
    </header>
  );
}
