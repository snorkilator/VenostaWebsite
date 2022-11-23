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
}