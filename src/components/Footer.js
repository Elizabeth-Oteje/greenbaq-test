import React from "react";
import Button from "react-bootstrap/Button";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="d-block d-md-flex justify-content-between text-center text-md-start align-items-center pb-4"
        style={{ borderBottom: "1px solid #CDD1D4" }}
      >
        <h6 style={{ fontWeight: "500", color: "#939EA4" }}>&copy;2023 Yourcompany</h6>
        <h3 style={{ color: "#37447E" }}>Landing</h3>
        <Button style={{ width: "109px" }}>Purchase now</Button>
      </div>
      <div className="d-block d-md-flex justify-content-between align-items-center pt-3 pt-md-4">
        <div className=" d-flex gap-3 gap-md-5 mb-3 mb-md-0 justify-content-center justify-content-md-start">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </div>
        <div className="d-flex gap-4 align-items-center  justify-content-center justify-content-md-start">
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
