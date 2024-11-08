import React from "react";
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import HeroImage from "../assets/hero-group-image.svg";
import HeroImage2 from "../assets/hero-image-2.svg";
import HeroImage3 from "../assets/hero-image-3.svg";
import HeroImage4 from "../assets/hero-image-4.svg";
import HeroImage5 from "../assets/hero-image-5.svg";
import shape from "../assets/shape.svg";

const Home = () => {
  return (
    <div className="landing-section">
      <section className="hero-section-1 ">
        <img src={HeroImage} alt="Hero" className="hero-image d-block d-md-none" />
        <Row>
          <Col xs={12} sm={10} md={8} lg={6} className="text-section ">
            <h1 className="mb-3" style={{ color: "#091133" }}>
              Introduce Your Product Quickly & Effectively
            </h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus{" "}
            </h4>

            <h4>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim.
            </h4>
            <div className="d-flex gap-3 mt-4 mt-md-5">
              <Button>Purchase UI Kit</Button>
              <Button variant="outline-primary">Learn More</Button>
            </div>
          </Col>
          <Col xs={3} md={4} lg={6} className="image-wrapper">
            <img src={HeroImage} alt="Hero" className="hero-image" />
          </Col>
        </Row>
      </section>
      <div className="hero-sections">
        <section className="hero-section-2 position-relative">
          <Row className="d-flex gap-0 align-items-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              <h2 className="mb-3">Light, Fast & Powerful</h2>
              <h5 style={{ color: "#6F7CB2" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus{" "}
              </h5>
              <h5 style={{ color: "#6F7CB2" }}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </h5>
              <div className="d-flex gap-4 mt-3 mt-md-5">
                <div className="d-flex flex-column gap-2">
                  <img src={shape} alt="shape" className="shape" />
                  <h5 style={{ color: "#091133", fontWeight: "500" }} className="mb-0 pb-0">
                    Title Goes Here
                  </h5>
                  <p style={{ color: "#5D6970" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.{" "}
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <img src={shape} alt="shape" className="shape" />
                  <h5 style={{ color: "#091133", fontWeight: "500" }} className="mb-0 pb-0">
                    Title Goes Here
                  </h5>
                  <p style={{ color: "#5D6970" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={3} md={4} lg={6} className="d-none d-md-flex">
              <Image fluid src={HeroImage2} alt="hero-image-2" />
            </Col>
          </Row>
        </section>
        <section className=" hero-section-3 position-relative">
          <Row className="d-flex gap-xl-5 align-items-center">
            <img src={HeroImage3} alt="Hero" className="hero-image-2 d-block d-md-none" />
            <Col xs={3} md={4} lg={true} className="d-none d-md-flex pe-lg-5">
              <Image fluid src={HeroImage3} alt="hero-image-2" />
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={5} className="text-section">
              <h2 className="mb-3">Light, Fast & Powerful</h2>
              <h5 style={{ color: "#6F7CB2" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus{" "}
              </h5>
              <h5 style={{ color: "#6F7CB2" }}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </h5>
            </Col>
          </Row>
        </section>
        <section className=" hero-section-4 position-relative">
          <Row className="d-flex gap-xl-5 align-items-center ">
            <img src={HeroImage4} alt="Hero" className="hero-image-2 d-block d-md-none" />
            <Col xs={3} md={4} lg={true} className="d-none d-md-flex pe-lg-5">
              <Image fluid src={HeroImage4} alt="hero-image-2" />
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={5} className="text-section">
              <h2 className="mb-3">Light, Fast & Powerful</h2>
              <h5 style={{ color: "#6F7CB2" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus{" "}
              </h5>
              <h5 style={{ color: "#6F7CB2" }}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </h5>
            </Col>
          </Row>
        </section>
        <section className=" hero-section-5 position-relative">
          <Row className="d-flex gap-xl-5 align-items-center">
            <img src={HeroImage5} alt="Hero" className="hero-image-2 d-block d-md-none" />
            <Col xs={3} md={4} lg={true} className="d-none d-md-flex pe-lg-5">
              <Image fluid src={HeroImage5} alt="hero-image-2" />
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={5} className="text-section">
              <h2 className="mb-3">Light, Fast & Powerful</h2>
              <h5 style={{ color: "#6F7CB2" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus{" "}
              </h5>
              <h5 style={{ color: "#6F7CB2" }}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </h5>
              <Button className="mt-3">Purchase Now</Button>
            </Col>
          </Row>
        </section>
      </div>
      <section className="hero-section-6 mb-0 pb-0">
        <div className="curved-container mb-0 pb-0">
          <Card className="w-100" style={{ border: "none", borderRadius: "0px" }}>
            <div className="d-flex flex-column gap-4 gap-md-5 text-center w-100">
              <div>
                <h2 style={{ color: "#091133" }} className="mb-3">
                  A Price To Suit Everyone
                </h2>
                <h5 style={{ color: "#6F7CB2", maxWidth: "38rem" }} className="mx-auto">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus
                </h5>
              </div>
              <div>
                <h1 style={{ color: "#222F65" }} className="mb-1">
                  $40
                </h1>
                <h5 style={{ color: "#37447E" }}>UI Design Kit</h5>
              </div>
              <div>
                <h6 style={{ color: "#5D6970" }} className="mb-3">
                  See, One price. Simple.
                </h6>
                <Button>Purchase Now</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
