import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'; 

//img
import aboutus1 from "../../../../assets/images/bg.jpg";

const PrivacyPolicy = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/'); // Navigate to the home page
  };
  return (
    <>
      <div
        className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50"
        style={{ backgroundImage: `url(${aboutus1})` }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="12">
              <nav
                aria-label="breadcrumb"
                className="text-center iq-breadcrumb-two"
              >
                <h2 className="title">Privacy Policy</h2>
                <Breadcrumb className="main-bg">
                 <Breadcrumb.Item onClick={handleHomeClick}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Privacy Policy</Breadcrumb.Item>
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
              <div className="iq-privacy-policy">
                <div className="mb-3">
                  <h4 className="mb-3">
                    1. What Personal Information About Users Does copepod
                    Collect?
                  </h4>
                  <p className="my-3">
                    copepod collects various types of personal information from
                    its users, which may include but are not limited to:
                    <ul>
                      <li> Full name</li>
                      <li>Email address </li>
                      <li>
                        {" "}
                        Contact information (such as phone number, address)
                      </li>
                      <li> User preferences and settings </li>
                      <li> IP address and device information </li>
                      <li> Usage data and analytics </li>
                    </ul>
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">2. Cookies and Web Beacons</h4>
                  <p className="mb-2">
                    Cookies and web beacons are utilized by copepod to enhance
                    user experience and gather information such as:
                    <ul>
                      <li> User browsing behavior</li>
                      <li>Preferences and settings </li>
                      <li> Session data</li>
                      <li> Referral pages </li>
                    </ul>
                  </p>

                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">
                    3. Third Party Payment Gateway – Financial Information
                  </h4>
                  <p className="">
                    When users engage in transactions through copepod's
                    platform, financial information may be collected by
                    third-party payment gateways. copepod ensures the security
                    and confidentiality of such information, and it may include:
                    <ul>
                      <li> Credit/debit card details</li>
                      <li>Billing addresses </li>
                      <li> Transaction history</li>
                    </ul>
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">4. Disclosure Children’s Privacy</h4>
                  <p className="">
                    copepod is committed to protecting the privacy of children.
                    Our services are not intended for individuals under the age
                    of 13, and we do not knowingly collect personal information
                    from children without parental consent.
                  </p>
                  <br />
                </div>
                <div className="mb-0">
                  <h4 className="mb-3">
                    5. Data transfer, storage &amp; processing globally
                  </h4>
                  <p className="mb-0">
                    copepod may transfer, store, and process user data globally
                    in accordance with applicable laws and regulations. By using
                    our services, users consent to the transfer of their
                    personal information to various locations where copepod
                    operates or utilizes third-party service providers.
                  </p>
                  <br />
                  <p>
                    These policies are subject to copepod's Privacy Policy,
                    which users are encouraged to review for further details on
                    how their personal information is handled and protected.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default PrivacyPolicy;
