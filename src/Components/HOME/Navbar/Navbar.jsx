import React, { useState } from "react";
import { NavbarBrand } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavigationBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="sticky-top">
        <Navbar bg="light" variant="light" expand="lg">
          <NavbarBrand>
            <Link to="/">
              <img
                src="https://cdn.discordapp.com/attachments/1079650552830513222/1123228494839677028/Logo_Green.png"
                alt="Logo_Green.png"
                width={150}
                height={55}
                className="nav-logo"
              />
            </Link>
          </NavbarBrand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            id="navbarBtn"
            className="navbar-toggler d-lg-none toggler d-flex flex-column justify-content-around collapsed"
            onClick={handleNavToggle}
          >
            <Hamburger size={30} toggled={isNavOpen} toggle={setIsNavOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end align-items-center" id="navbarNav" in={isNavOpen}>
            <Nav>
              <Nav.Link as={Link} className="nav-item mt-md-3 mt-lg-0" to="/" onClick={handleNavClose}>Home</Nav.Link>
              <Nav.Link as={Link} className="nav-item mt-md-1 mt-lg-0" to="/about" onClick={handleNavClose}>About</Nav.Link>
              <Nav.Link as={Link} className="nav-item mt-md-1 mt-lg-0" to="/proker" onClick={handleNavClose} >Proker</Nav.Link>
              <Nav.Link as={Link} className="nav-item mt-md-1 mt-lg-0 last-item" to="/gallery" onClick={handleNavClose}>Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>

  );
}