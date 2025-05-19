import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//img
import aboutus1 from "../../../../assets/images/bg.jpg";
import { useEffect } from "react";

const TermsOfUse = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/"); // Navigate to the home page
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
                <h2 className="title">Terms Of Use</h2>
                <Breadcrumb className="main-bg">
                  <Breadcrumb.Item onClick={handleHomeClick}>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Terms of Use</Breadcrumb.Item>
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
                  <h4 className="mb-3">Terms of Use </h4>
                  <h6 className="mb-3">Last updated: 2-3-2024</h6>
                  <p className="my-3">
                    Please read these Terms of Use carefully before using the
                    Copepod streaming service operated by Copepod .
                  </p>
                  <p className="my-3">
                    By accessing or using the Service, you agree to be bound by
                    these Terms. If you disagree with any part of the terms,
                    then you may not access the Service.
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">1. User Eligibility</h4>
                  <p className="mb-2">
                    By using the Service, you represent and warrant that you are
                    at least 18 years old or have parental or guardian consent.
                  </p>

                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">2. Account Information</h4>
                  <p className="">
                    You are responsible for maintaining the confidentiality of
                    your account and password. You agree to accept
                    responsibility for all activities that occur under your
                    account or password.
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">3. Use of the Service</h4>
                  <p className="">
                    a. You may use the Service for your personal, non-commercial
                    use only.
                  </p>
                  <p className="">
                    b. You agree not to reproduce, duplicate, copy, sell, resell
                    or exploit any portion of the Service, use of the Service,
                    or access to the Service without our express written
                    permission.
                  </p>
                  <br />
                </div>
                <div className="mb-0">
                  <h4 className="mb-3">4. User Content</h4>
                  <p className="mb-0">
                    a. Users may submit content, including but not limited to,
                    music, playlists, and comments. By submitting content, you
                    grant us a non-exclusive, transferable, sub-licensable,
                    royalty-free, worldwide license to use, store, display,
                    reproduce, save, modify, create derivative works, perform,
                    and distribute your content.
                  </p>
                  <p className="mb-0">
                    b. You retain ownership of your content and are solely
                    responsible for the content you submit.
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">5. Prohibited Activities</h4>
                  <p className="">
                  You agree not to engage in any of the following activities:
                  </p>
                  <p className="">
                  a. Violating laws or regulations.
                  </p>
                  <p className="">
                  b. Impersonating others.
                  </p>
                  <p className="">
                  c. Uploading malicious code or engaging in any activity that disrupts, interferes with, or harms the Service.
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">6. Termination</h4>
                  <p className="">
                  We reserve the right to terminate or suspend your account and access to the Service at our sole discretion, without notice, for any reason, including violation of these Terms.
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">7. Changes to Terms</h4>
                  <p className="">
                  We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">8. Contact Us</h4>
                  <p className="">
                  If you have any questions about these Terms, please contact us at (555) 777-1234.
                  </p>
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default TermsOfUse;
