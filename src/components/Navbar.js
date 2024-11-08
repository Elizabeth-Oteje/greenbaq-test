import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function GuestNavbar() {
  const [expanded, setExpanded] = useState(false);
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };
  return (
    <Navbar expand="sm" expanded={expanded} className="px-3 px-lg-5 d-flex align-items-center">
      <Container className="px-lg-5">
        <Navbar.Brand href="/" className="d-flex d-sm-none">
          <h3 className="my-auto" style={{ color: "#37447E" }}>
            Landing
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" gap-1 gap-md-3 gap-lg-5" onClick={closeNavbar}>
            <NavLink to="/" className="nav-link" activeclassname="active">
              Home
            </NavLink>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          <Nav className="d-none d-sm-flex mx-auto">
            <h3 className="" style={{ color: "#37447E" }}>
              Landing
            </h3>
          </Nav>
          <Nav className="mt-2 mt-sm-0" onClick={closeNavbar}>
            <Button className="" style={{ width: "160px" }}>
              Buy Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GuestNavbar;
