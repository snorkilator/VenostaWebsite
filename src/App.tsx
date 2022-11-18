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
  ButtonToolbar,
} from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navbar className="navbar navbar-expand-xl justify-content-center border-bottom">
          <Nav>
            <Nav.Link href="#1">
              <h3>about</h3>
            </Nav.Link>
            <Nav.Link href="#2">
              <h3>contact us</h3>
            </Nav.Link>
            <Nav.Link href="#3">
              <h3>pricing</h3>
            </Nav.Link>
            <NavDropdown className="h3" title="Other services">
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
        <br />
      </header>
      <main className="container">
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
            <br />
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
            <br />
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
            <br />
          </Col>
        </Row>
        <br />
      </main>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-md-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              icon
            </a>
            <a href="" className="me-4 text-reset">
              icon
            </a>
            <a href="" className="me-4 text-reset">
              icon
            </a>
            <a href="" className="me-4 text-reset">
              icon
            </a>
            <a href="" className="me-4 text-reset">
              icon
            </a>

            <a href="" className="me-4 text-reset">
              icon
            </a>
          </div>
        </section>

        <section className="pb-4">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Find us</h6>
                <Image
                  fluid
                  src="https://s1.cdn.autoevolution.com/images/news/google-maps-data-confirms-the-traffic-trends-everybody-expected-151897_1.jpg"
                  alt="location on map"
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
