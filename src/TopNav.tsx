import { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

export default function TopNav(){
return <header>
<Container>
  <Navbar className="navbar navbar-expand-xl navbar- justify-content-center border-bottom">
    <Nav className="row">
      <Nav.Link className="col-auto" href="#1">
        <h3>about</h3>
      </Nav.Link>
      <Nav.Link className="col-auto" href="#2">
        <h3>contact us</h3>
      </Nav.Link>
      
      
      <Nav.Link className="col-auto" href="#3">
        <h3>pricing</h3>
      </Nav.Link >
      <NavDropdown className="col-auto h3" title="Other services">
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
      </NavDropdown>
    </Nav>
  </Navbar>
</Container>
<br />
</header>
}