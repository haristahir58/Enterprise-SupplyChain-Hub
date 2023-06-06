import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Contact() {
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

        {/* <!-- Header Starts-->} */}

        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Contact</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0">
              <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
              <i className="fa fa-circle px-3"></i>
              <p className="m-0">Contact</p>
            </div>
          </div>
        </div>

        {/* <!-- Header Ends-->} */}

        {/* Contact Start */}

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 pb-4 pb-lg-0">
                <div className="bg-primary text-dark text-center p-4">
                  <h4 className="m-0">
                    <i className="fa fa-map-marker-alt text-white mr-2"></i>
                    Islamabad Capital Territory, Pakistan
                  </h4>
                </div>
                <iframe
                  style={{ width: "100%", height: "470px", border: "0" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169129.4607743787!2d73.0348686811079!3d33.691498919808236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb8a9e0b18c19%3A0xb8d672c6fcf40c5a!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2sbd!4v1650276392629!5m2!1sen!2sbd"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>

              <div className="col-lg-7">
                <h6 className="text-primary text-uppercase font-weight-bold">
                  Contact Us
                </h6>
                <h1 className="mb-4">Contact For Any Queries</h1>
                <div
                  className="contact-form bg-secondary"
                  style={{ padding: "30px" }}
                >
                  <div id="success"></div>
                  <form name="sentMessage" id="contactForm" noValidate={true}>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        id="name"
                        placeholder="Your Name"
                        required={true}
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        id="email"
                        placeholder="Your Email"
                        required={true}
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        id="subject"
                        placeholder="Subject"
                        required={true}
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control border-0 py-3 px-4"
                        rows="3"
                        id="message"
                        placeholder="Message"
                        required={true}
                        data-validation-required-message="Please enter your message"
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Contact Ends--> */}

        {/* <!-- Footer Start --> */}
        <div className="Footer">
          <Footer />
        </div>
        {/* <!-- Footer End -->*/}
      </>
    </div>
  );
}
