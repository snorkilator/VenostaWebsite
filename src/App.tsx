import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Container,
  Col,
  Button,
  Dropdown,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Image,
} from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <header> */}
      <Navbar className="navbar navbar-expand-lg bg-secondary justify-content-center">
        <Nav >
          <Nav.Link  href="#1"><h3>about</h3></Nav.Link>
          <Nav.Link href="#2"><h3>contact us</h3></Nav.Link>
          <Nav.Link href="#3"><h3>pricing</h3></Nav.Link>
          <NavDropdown className="h3" title="Other services">
            <NavDropdown.Item className="h3" href="#4">Action1</NavDropdown.Item>
            <NavDropdown.Item className="h3" href="#5">Action2</NavDropdown.Item>
            <NavDropdown.Item className="h3" href="#6">Action3</NavDropdown.Item>
            <NavDropdown.Item className="h3" href="#7">Action4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      {/* </header> */}
      <main class="container">
        <Row className="g-3">
          <Col md={12}>
            <h1>Welcome to this website</h1>
            <p>
              Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
              optio vitae quos. Nostrum vel iusto porro distinctio. Possimus
              minus voluptatibus consequatur rerum qui enim quo. Quisquam sit
              qui expedita esse velit eius autem veniam. Facilis neque quam sint
              harum sit et quo omnis. Fugiat eius quam veniam quas vel
              reiciendis debitis. Autem aliquid id similique enim neque ut.
              Praesentium aut et ullam voluptatem placeat sunt. Omnis sunt omnis
              voluptatem. Maiores delectus itaque id vero excepturi. Expedita
              officiis et qui quia possimus praesentium et. Nihil porro
              consequatur quia hic. Esse omnis porro quia velit. Et sunt officia
              rerum velit minus sapiente molestiae. Delectus mollitia aspernatur
              nihil officiis commodi ab. Quis qui quia nihil autem iure. Rem aut
              est minima ab ad. Alias iure libero ab deserunt temporibus. Omnis
              inventore blanditiis beatae ut quia. Voluptatem numquam quo
              officia dolore.
            </p>
            <Button className="btn-light" href="https://www.google.com">
              Read more
            </Button>
          </Col>

          <Col md={6}>
            <h1>Events</h1>
            <p>
              Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
              optio vitae quos. Nostrum vel iusto porro distinctio. Possimus
              minus voluptatibus consequatur rerum qui enim quo. Quisquam sit
              qui expedita esse velit eius autem veniam. Facilis neque quam sint
              harum sit et quo omnis. Fugiat eius quam veniam quas vel
              reiciendis debitis. Autem aliquid id similique enim neque ut.
              Praesentium aut et ullam voluptatem placeat sunt. Omnis sunt omnis
              voluptatem. Maiores delectus itaque id vero excepturi. Expedita
              officiis et qui quia possimus praesentium et. Nihil porro
              consequatur quia hic. Esse omnis porro quia velit. Et sunt officia
              rerum velit minus sapiente molestiae. Delectus mollitia aspernatur
              nihil officiis commodi ab. Quis qui quia nihil autem iure. Rem aut
              est minima ab ad. Alias iure libero ab deserunt temporibus. Omnis
              inventore blanditiis beatae ut quia. Voluptatem numquam quo
              officia dolore.
            </p>
            <Button className=" btn-light" href="https://www.google.com">
              Read more
            </Button>
          </Col>
          <Col md={6}>
            <h1>Our history</h1>
            <p>
              Quod aspernatur temporibus quia. Cumque sunt qui alias possimus
              optio vitae quos. Nostrum vel iusto porro distinctio. Possimus
              minus voluptatibus consequatur rerum qui enim quo. Quisquam sit
              qui expedita esse velit eius autem veniam. Facilis neque quam sint
              harum sit et quo omnis. Fugiat eius quam veniam quas vel
              reiciendis debitis. Autem aliquid id similique enim neque ut.
              Praesentium aut et ullam voluptatem placeat sunt. Omnis sunt omnis
              voluptatem. Maiores delectus itaque id vero excepturi. Expedita
              officiis et qui quia possimus praesentium et. Nihil porro
              consequatur quia hic. Esse omnis porro quia velit. Et sunt officia
              rerum velit minus sapiente molestiae. Delectus mollitia aspernatur
              nihil officiis commodi ab. Quis qui quia nihil autem iure. Rem aut
              est minima ab ad. Alias iure libero ab deserunt temporibus. Omnis
              inventore blanditiis beatae ut quia. Voluptatem numquam quo
              officia dolore.
            </p>
            <Button className="btn btn-light">Read more</Button>
          </Col>
        </Row>
      </main>
      <footer className="container">
        <Row>
          <Col>
            <Nav className="flex-column">
              <Nav.Item>site map:</Nav.Item>
              <Nav.Link>about</Nav.Link>
              <Nav.Link>pricing</Nav.Link>
              <Nav.Link>contact us</Nav.Link>
            </Nav>
          </Col>
          <Col sm={6}>
            <Image
              fluid
              src="https://s1.cdn.autoevolution.com/images/news/google-maps-data-confirms-the-traffic-trends-everybody-expected-151897_1.jpg"
              alt="location on map"
            ></Image>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default App;
