import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function About() {
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

        {/* <!-- Header Starts --> */}
        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-white display-3">About</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0">
              <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
              <i className="fa fa-circle px-3"></i>
              <p className="m-0">About</p>
            </div>
          </div>
        </div>
        {/* <!-- Header Ends --> */}

        {/* <!-- About Starts --> */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 pb-4 pb-lg-0">
                <img
                  className="img-fluid w-100"
                  src="assets/img/about.jpg"
                  alt=""
                />
                <div className="bg-primary text-dark text-center p-4">
                  <h3 className="m-0">Automated Solution</h3>
                </div>
              </div>
              <div className="col-lg-7">
                <h6 className="text-primary text-uppercase font-weight-bold">
                  About Us
                </h6>
                <h1 className="mb-4">End-to-end supply chain solutions</h1>
                <p className="mb-4">
                  At Enterprise Supply Chain Hub, we specialize in providing
                  comprehensive supply chain solutions for businesses of all
                  sizes. With a team of experienced professionals and advanced
                  technology, we help our clients optimize their supply chain
                  processes and improve their bottom line. Our mission is to
                  provide reliable and efficient supply chain services that
                  enable businesses to focus on their core operations and
                  achieve their goals. We believe in building long-term
                  relationships with our clients based on trust, integrity, and
                  commitment to excellence. Whether you're a small startup or a
                  large corporation, we have the expertise and resources to meet
                  your unique supply chain needs. Contact us today to learn how
                  we can help you streamline your operations and achieve
                  success.
                </p>
                <a
                  href="/about.html"
                  className="btn btn-primary mt-3 py-2 px-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- About Ends --> */}

        {/* <!-- Mission-Vision start --> */}

        <section className="targets">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="box fadeInUp">
                  <div className="icon-wrapper">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="details">
                    <h4>Mission</h4>
                    <p>
                      Our mission is to provide reliable and efficient
                      end-to-end supply chain solutions that optimize
                      businesses' processes and improve their bottom line. We
                      aim to build long-term relationships with our clients
                      based on trust, integrity, and excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box fadeInUp" data-delay=".2s">
                  <div className="icon-wrapper">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="details">
                    <h4>Vision</h4>
                    <p>
                      Our vision is to become the global leader in providing
                      innovative and customized supply chain solutions. We
                      strive to be a trusted partner for businesses of all
                      sizes, helping them achieve success through streamlined
                      operations and optimized processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Mission-Vision ends --> */}

        {/* <!-- Portfolio starts --> */}

        <section className="team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Our Team</h2>
                  <h3>Expert Team Members</h3>
                </div>
                <div className="description">
                  <p>
                    At Enterprise Supply Chain Hub, we are proud to have a team
                    of highly skilled and experienced professionals who are
                    dedicated to providing top-notch supply chain solutions to
                    our clients.
                  </p>
                </div>
                <div className="team-members row">
                  <div className="col-md-6">
                    <div className="team-member">
                      <div className="image">
                        <img src="assets/haris.jpg" alt="Team member image" />
                      </div>
                      <div className="details">
                        <h4>Muhammad Haris Tahir</h4>
                        <span className="position">Front-end Developer</span>
                        <p>
                          Muhammad Haris is a skilled front-end developer with
                          expertise in React and MongoDB. He has a keen eye for
                          detail and a passion for creating intuitive and
                          user-friendly interfaces.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-member">
                      <div className="image">
                        <img src="assets/anis.jpg" alt="Team member image" />
                      </div>
                      <div className="details">
                        <h4>Muhammad Anis Sarwar</h4>
                        <span className="position">Back-end Developer</span>
                        <p>
                          Muhammad Anis Sarwar is a seasoned back-end developer
                          with proficiency in Node.js and Express. He has
                          extensive experience in building scalable and secure
                          APIs that power enterprise-level applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Portfolio ends --> */}

        {/* <!-- Feature11 start--> */}

        <div className="container-fluid bg-secondary my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  className="img-fluid w-100"
                  src="assets/img/feature.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-7 py-5 py-lg-0">
                <h6 className="text-primary text-uppercase font-weight-bold">
                  Why Choose Us
                </h6>
                <h1 className="mb-4">
                  Enterprise Supply Chain Hub, All-in-One Solution
                </h1>
                <p className="mb-4">
                  At Enterprise Supply Chain Hub, we provide an all-in-one
                  solution to address the challenges faced by global supply
                  chain management systems. Here are a few reasons why you
                  should choose us:
                </p>
                <ul className="list-inline">
                  <li>
                    <h6>
                      <i className="far fa-dot-circle text-primary mr-3"></i>
                      Global Service
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="far fa-dot-circle text-primary mr-3"></i>On
                      time Delivery
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="far fa-dot-circle text-primary mr-3"></i>
                      24/7 Customer Support
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="far fa-dot-circle text-primary mr-3"></i>
                      Integrated and Unified Platform
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="far fa-dot-circle text-primary mr-3"></i>
                      Cost-effective and Efficient
                    </h6>
                  </li>
                </ul>
                <a
                  href="/about.html"
                  className="btn btn-primary mt-3 py-2 px-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Features11 End -->*/}

        {/* <!-- Team Starts-->*/}
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Delivery Team
              </h6>
              <h1 className="mb-4">Meet Our Delivery Team</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team card position-relative overflow-hidden border-0 mb-5">
                  <img
                    className="card-img-top"
                    src="assets/img/team-1.jpg"
                    alt=""
                  />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                      <h5 className="font-weight-bold">John Smith</h5>
                      <span>Sole Distributor</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="btn btn-outline-dark btn-social" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team card position-relative overflow-hidden border-0 mb-5">
                  <img
                    className="card-img-top"
                    src="assets/img/team-2.jpg"
                    alt=""
                  />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                      <h5 className="font-weight-bold">Harry Victor</h5>
                      <span>Distributor</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="btn btn-outline-dark btn-social" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team card position-relative overflow-hidden border-0 mb-5">
                  <img
                    className="card-img-top"
                    src="assets/img/team-3.jpg"
                    alt=""
                  />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                      <h5 className="font-weight-bold">Sarah White</h5>
                      <span>Salesperson</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="btn btn-outline-dark btn-social" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team card position-relative overflow-hidden border-0 mb-5">
                  <img
                    className="card-img-top"
                    src="assets/img/team-4.jpg"
                    alt=""
                  />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                      <h5 className="font-weight-bold">Asad Naveed</h5>
                      <span>Salesman</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="btn btn-outline-dark btn-social" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End -->*/}

        {/* <!-- Footer Start --> */}
        <div className="Footer">
          <Footer />
        </div>
        {/* <!-- Footer End -->*/}
      </>
    </div>
  );
}
