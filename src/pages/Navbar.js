import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  
  return (
    <div>
    <>
    {/* !-- Navbar Start --> */}
     <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <NavLink to={"/"} className="navbar-brand ml-lg-3" activeClassName="active">
              <h3 className="m-0 display-5 text-uppercase text-primary">
                <i className="fa fa-truck mr-2"></i>
                <small>
                  {" "}
                  <b> Enterprise Supply Chain Hub </b>
                </small>
              </h3>
            </NavLink>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-lg-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav m-auto py-0">
                <NavLink to={"/"} className="nav-item nav-link" activeClassName="active">
                  Home
                </NavLink>
                <NavLink to={"/about"} className="nav-item nav-link" activeClassName="active">
                  About
                </NavLink>
                <NavLink to={"/service"} className="nav-item nav-link" activeClassName="active">
                  Service
                </NavLink>
                <NavLink to={"/contact"} className="nav-item nav-link" activeClassName="active">
                  Contact
                </NavLink>
                
                <div className="nav-item dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown" 
      >
        Login
      </a>
      
      <div
        className={`dropdown-menu rounded-0 m-0 ${isOpen ? "show" : ""}`}
        aria-labelledby="dropdownMenuButton" 
      >
        <NavLink to={"/admin/login"} className="dropdown-item" activeClassName="active">
          As Admin
        </NavLink>
        <NavLink to={"/soleDistributor/signin"} className="dropdown-item" activeClassName="active">
          As Sole Distributor
        </NavLink>
        <a href="single.html" className="dropdown-item">
          As Distributor
        </a>
        <a href="single.html" className="dropdown-item">
          As Sales team Member
        </a>
        <a href="single.html" className="dropdown-item">
          As Shopkeeper
        </a>
      </div>
    </div>


    <div className="nav-item dropdown"
      onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2}
    >
      <a
        href="#"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
      >
        Register
      </a>
      <div
        className={`dropdown-menu rounded-0 m-0 ${isOpen2 ? "show" : ""}`}
        aria-labelledby="dropdownMenuButton"
      >
        <NavLink to="/soleDistributor/register" className="dropdown-item" activeClassName="active">
          As Sole Distributor
        </NavLink>
        <a href="single.html" className="dropdown-item">
          As Distributor
        </a>
        <a href="single.html" className="dropdown-item">
          As Sales team Member
        </a>
        <a href="single.html" className="dropdown-item">
          As Shopkeeper
        </a>
      </div>
    </div>

              </div>
            </div>
          </nav>
      </>
    </div>
  )
}
