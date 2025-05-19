import React, { useState } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'; 

// import CustomToggle from '../../../components/dropdowns'

//img
import bg from "../../../../src/assets/images/bg.jpg";

const FAQ = () => {
  const [faq, setfaq] = useState("1");
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/'); // Navigate to the home page
  };

  return (
    <>
      <div
        className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="12">
              <nav
                aria-label="breadcrumb"
                className="text-center iq-breadcrumb-two"
              >
                <h2 className="title">FAQ</h2>
                 <Breadcrumb className="main-bg">
                   <Breadcrumb.Item onClick={handleHomeClick}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
                </Breadcrumb>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
      <main id="main" className="site-main">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-accordion iq-accordion-square">
                <div
                  className={`iq-accordion-block  1 ${
                    faq === "1" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("1");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      What is Copepod?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "1" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Copepod is a livestreaming and movies app that provides
                      users with access to a wide range of content, including
                      movies, TV shows, live events, and more.
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 2  ${
                    faq === "2" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("2");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      How do I download Copepod?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "2" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      You can download the Copepod app from the App Store (for
                      iOS devices) or Google Play Store (for Android devices).
                      Simply search for "Copepod" and follow the prompts to
                      download and install the app.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 3  ${
                    faq === "3" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("3");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Is Copepod free to use?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "3" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Copepod offers both free and premium subscription options.
                      With the free version, users can access a limited
                      selection of content with ads. Premium subscribers enjoy
                      an ad-free experience and access to a larger library of
                      content.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 4 ${
                    faq === "4" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("4");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      What types of content are available on Copepod?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "4" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Copepod offers a diverse range of content, including
                      movies, TV shows, live sports events, news broadcasts, and
                      more. Users can browse through various categories or use
                      the search feature to find specific titles.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 5 ${
                    faq === "5" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("5");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Can I watch live TV on Copepod?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "5" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Yes, Copepod offers live TV streaming, allowing users to
                      watch their favorite channels in real-time. Whether you're
                      interested in news, sports, or entertainment, you can tune
                      in to live broadcasts through the app.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 5 ${
                    faq === "6" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("6");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Can I download movies and shows to watch offline?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "6" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Yes, Copepod allows users to download select movies and TV
                      shows for offline viewing. This feature is available to
                      premium subscribers, who can download content to their
                      device and watch it without an internet connection.
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 5 ${
                    faq === "7" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("7");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      How many devices can I use with my Copepod account?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "7" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      The number of devices you can use with your Copepod
                      account depends on your subscription plan. Typically,
                      premium subscribers are allowed to stream content on
                      multiple devices simultaneously, while free users may be
                      limited to one device at a time.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 5 ${
                    faq === "8" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("8");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Is Copepod available in my country?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "8" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      Copepod's availability may vary depending on your
                      location. The app is often accessible in many countries,
                      but some content may be region-restricted due to licensing
                      agreements. You can check the app store or the Copepod
                      website for information on availability in your country.
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordion-block 5 ${
                    faq === "9" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("9");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      How do I cancel my Copepod subscription?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "9" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      If you wish to cancel your Copepod subscription, you can
                      usually do so through the app's settings or through the
                      subscription management page on the website. Follow the
                      prompts to cancel your subscription, and be sure to
                      confirm the cancellation to avoid any further charges.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default FAQ;
