import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { verifyOTP } from "../../../../store/redux/API/auth/Register"; 

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      rtlModeAction: (mode) => ({ type: "SET_RTL_MODE", payload: mode }),
    },
    dispatch
  ),
});

const VerifyOTP = () => {
  const [otp, setOTP] = useState("");

  const history = useHistory();

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleVerifyOTP = async () => {
    try {
      const otpData =  otp;

      const isOTPValid = await verifyOTP(otpData);

      if (isOTPValid) {
        history.push("/pages/resetpassword");
      } else {
    
        toast.error("Invalid OTP", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <section className="sign-in-page">
      <Container>
        <Row className="justify-content-center align-items-center height-self-center">
          <Col lg="5" md="12" className="align-self-center">
            <div className="sign-user_card ">
              <div className="sign-in-page-data">
                <div className="sign-in-from w-100 m-auto">
                  <h3 className="mb-3 text-center">Verify OTP</h3>
                  <Form className="mt-4">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        className="form-control mb-0"
                        id="exampleInputOTP"
                        placeholder="Enter OTP"
                        autoComplete="off"
                        value={otp}
                        onChange={handleOTPChange}
                        required
                      />
                    </Form.Group>

                    <Button
                      className="btn btn-hover btn-primary1"
                      onClick={handleVerifyOTP}
                    >
                      Verify OTP
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default connect(null, mapDispatchToProps)(VerifyOTP);
