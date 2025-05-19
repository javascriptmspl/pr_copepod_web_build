import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

// rtl
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rtlModeAction, getRtlMode } from '../../../../store/mode/rtlmode';
import { forgotPassword } from "../../../../store/redux/API/auth/Register";

const mapStateToProps = (state) => {
  return {
    rtlMode: getRtlMode(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      rtlModeAction,
    },
    dispatch
  ),
});

const RecoverPswd = (props) => {


  const [userEmail, setEmail] = useState("");

  let history = useHistory();
  const [show] = useState(false);



  const handleUserEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handlerest = async () => {
    try {
     const formData={
      email:userEmail
     }
      
     
      const isPasswordCorrect = await forgotPassword(formData);
  
      if (isPasswordCorrect) {
        history.push("/pages/verify-otp");
      } else {
        alert("Incorrect password or email");
      }
    } catch (error) {
      console.log(error, "error");
    }
  };


  useEffect(() => {
    const rtlMode = sessionStorage.getItem('rtl-mode');
    if (rtlMode === null) {
      props.rtlModeAction(props.rtlMode);
    } else {
      props.rtlModeAction(rtlMode);
    }
  }, [props]);

  return (
    <>
      <div className={`rtl-box ${show === true ? 'show' : ''}`}>
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="false"
              onClick={() => {
                props.rtlModeAction('ltl');
              }}
              data-value="ltr"
            >
              <Link to="#">LTR</Link>
            </li>
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="true"
              onClick={() => {
                props.rtlModeAction('rtl');
              }}
              data-value="rtl"
            >
              <Link to="#">RTL</Link>
            </li>
          </ul>
        </div>
      </div>
      <section className="sign-in-page">
        <Container>
          <Row className="row justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
            <div className="sign-user_card">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <Link to="/pages/login" className="back-arrow-link">
                      <span className="back-arrow">&#8592;</span> Back
                    </Link>
                    <h3 className="mb-3 text-center">Reset Password</h3>
                    <p className="text-body">
                      Enter your email address, and we'll send you an email with
                      instructions to reset your password.
                    </p>
                    <Form className="mt-4">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control mb-0"
                          id="exampleInputEmail2"
                          placeholder="Enter email"
                          autoComplete="off"
                          onChange={handleUserEmailChange}
                          required
                        />
                      </div>
                      <div className="sign-info">
                        <Button
                          className="btn btn-hover btn-primary1"
                          onClick={handlerest}
                        >
                          Reset
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPswd);
