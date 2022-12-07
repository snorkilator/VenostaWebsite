import {
    Image,
  } from "react-bootstrap";
  
export default function SiteFooter(){
    return       <footer className="text-center text-lg-start bg-light text-muted">
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
            <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.027900889888!2d-76.02678348442885!3d45.870751379107865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1c99b7740bbcd%3A0xde32ef4ead69d9d8!2sBe%20and%20Become%20-%20Venosta%20Station!5e0!3m2!1sen!2sca!4v1670273065519!5m2!1sen!2sca"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              // allowFullscreen = {true}
            ></iframe>
          </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
}