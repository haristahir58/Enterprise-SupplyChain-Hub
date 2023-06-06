import React from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Service() {
  return (
    <div>
      <>
        {/* <!-- Topbar Start --> */}
        <div className="container-fluid bg-dark">
          <TopBar />
        </div>
        {/* <!-- Topbar End -->} */}

        {/* <!-- Navbar Starts--> */}
        <div className="container-fluid p-0">
          <Navbar />
        </div>
        {/* <!-- Navbar Ends --> */}

        {/* <!-- Header Starts--> */}
        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Service</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0">
              <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
              <i className="fa fa-circle px-3"></i>
              <p className="m-0">Service</p>
            </div>
          </div>
        </div>

        {/* <!-- Header Ends--> */}

        {/* <!-- Services Starts--> */}

        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Our Services
              </h6>
              <h1 className="mb-4">Our Services</h1>
            </div>
            <div className="row pb-3">
              <div className="col-lg-3 col-md-6 text-center mb-5">
                <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                  <i className="fa fa-2x fa-box-open text-dark pr-3"></i>
                  <h6 className="text-white font-weight-medium m-0">
                    Packaging And Storage
                  </h6>
                </div>
                <p>
                  We provide safe and secure storage solutions for all your
                  products. Our packaging experts ensure that your goods are
                  packed efficiently and securely to minimize damage during
                  transportation.
                </p>
                <a className="border-bottom text-decoration-none" href="">
                  Read More
                </a>
              </div>
              <div className="col-lg-3 col-md-6 text-center mb-5">
                <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                  <i className="fa fa-2x fa-clock text-dark pr-3"></i>
                  <h6 className="text-white font-weight-medium m-0">
                    On-time Delivery
                  </h6>
                </div>
                <p>
                  Our commitment to timely delivery ensures that your products
                  reach their destination on time, every time. We work closely
                  with our logistics partners to optimize routes and minimize
                  delivery times.
                </p>
                <a className="border-bottom text-decoration-none" href="">
                  Read More
                </a>
              </div>
              <div className="col-lg-3 col-md-6 text-center mb-5">
                <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                  <i className="fa fa-2x fa-database text-dark pr-3"></i>
                  <h6 className="text-white font-weight-medium m-0">
                    Inventory Management:
                  </h6>
                </div>
                <p>
                  Our inventory management system helps you keep track of your
                  stock levels and ensure that you have the right amount of
                  inventory to meet customer demand. We provide real-time data
                  on inventory levels, allowing you to make informed decisions
                  about purchasing and production.
                </p>
                <a className="border-bottom text-decoration-none" href="">
                  Read More
                </a>
              </div>
              <div className="col-lg-3 col-md-6 text-center mb-5">
                <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                  <i className="fa fa-2x fa-chart-line text-dark pr-3"></i>
                  <h6 className="text-white font-weight-medium m-0">
                    Demand Planning
                  </h6>
                </div>
                <p>
                  Our demand planning services help you forecast future demand
                  for your products and adjust your inventory levels
                  accordingly. We use advanced algorithms and historical data to
                  provide accurate demand forecasts and help you stay ahead of
                  the competition.
                </p>
                <a className="border-bottom text-decoration-none" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Services Ends--> */}

        {/* <!-- Quotes Start--> */}

        <div className="container-fluid bg-secondary my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 py-5 py-lg-0">
                <h6 className="text-primary text-uppercase font-weight-bold">
                  Get A Quote
                </h6>
                <h1 className="mb-4">Request A Free Quote</h1>
                <p className="mb-4">
                  At Enterprise Supply Chain, we're dedicated to providing the
                  best possible service to our clients. That's why we offer free
                  quotes for all of our services, so you can get an accurate
                  idea of what to expect. Our team of experts will work with you
                  to understand your specific needs and provide a customized
                  solution that fits your budget. Whether you need help wih
                  transportation, or warehousing, we've got you covered. Contact
                  us today to request your free quote and take the first step
                  towards optimizing your supply chain
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <h1 className="text-primary mb-2" data-toggle="counter-up">
                      225
                    </h1>
                    <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                  </div>
                  <div className="col-sm-4">
                    <h1 className="text-primary mb-2" data-toggle="counter-up">
                      1050
                    </h1>
                    <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                  </div>
                  <div className="col-sm-4">
                    <h1 className="text-primary mb-2" data-toggle="counter-up">
                      2500
                    </h1>
                    <h6 className="font-weight-bold mb-4">Complete Projects</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="bg-primary py-5 px-4 px-sm-5">
                  <form className="py-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                      >
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 1</option>
                        <option value="3">Service 1</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-dark btn-block border-0 py-3"
                        type="submit"
                      >
                        Get A Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Quotes Ends--> */}

        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center pb-2">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Testimonial
              </h6>
              <h1 className="mb-4">Our Clients Say</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: "0" }}
                ></i>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/testimonial-1.jpg"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">
                      Muhammad Ali Sheikh
                    </h6>
                    <small>CEO, ABC Corporation</small>
                  </div>
                </div>
                <p className="m-0">
                  "The Enterprise Supply Chain Hub has revolutionized the way we
                  manage our global supply chain. The unified platform has
                  enabled us to track demand patterns and manage our sales teams
                  effectively, leading to improved productivity and
                  profitability."
                </p>
              </div>
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: "0" }}
                ></i>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/testimonial-2.jpg"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">John Smith</h6>
                    <small>Distributor, XYZ Inc.</small>
                  </div>
                </div>
                <p className="m-0">
                  "The location tracking feature has been a game-changer for our
                  sales team. We can now monitor their tasks and provide them
                  with the necessary support to close deals more efficiently.
                  The user-friendly web application has also made it easier for
                  them to manage their tasks and keep track of their progress."
                </p>
              </div>
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: "0" }}
                ></i>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/testimonial-3.jpg"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">Lee Son</h6>
                    <small>Owner, Lee's Furniture</small>
                  </div>
                </div>
                <p className="m-0">
                  "I have been using the Enterprise Supply Chain Hub for the
                  past six months and have been very impressed with the system's
                  accuracy in predicting in-demand products. The feedback
                  feature has also been useful in addressing any issues with the
                  products promptly. I highly recommend this platform to any
                  business looking to improve their supply chain management."
                </p>
              </div>
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: "0" }}
                ></i>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/testimonial-5.jpg"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">Sarah Lee</h6>
                    <small>COO, Lee's Fashion</small>
                  </div>
                </div>
                <p className="m-0">
                  "As a fashion retailer, it's critical for us to stay on top of
                  the latest trends and have the right products in stock at the
                  right time. The Enterprise Supply Chain Hub has helped us
                  streamline our inventory management and minimize stockouts.
                  The platform's real-time analytics and demand forecasting
                  capabilities have been instrumental in improving our supply
                  chain efficiency. I highly recommend this platform to any
                  fashion retailer looking to stay ahead of the competition."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Start --> */}
        <div className="Footer">
          <Footer />
        </div>
        {/* <!-- Footer End -->*/}
      </>
    </div>
  );
}
