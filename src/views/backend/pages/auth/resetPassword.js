import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Import your resetPassword function here
import { resetPassword } from "../../../../store/redux/API/auth/Register"; 

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      rtlModeAction: (mode) => ({ type: "SET_RTL_MODE", payload: mode }),
    },
    dispatch
  ),
});

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState(""); // New password field

  const history = useHistory();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleresetPassword = async () => {
    try {
      // Pass the new password to your resetPassword function
      const newPasswordData = newPassword;

      const isPasswordChanged = await resetPassword(newPasswordData);

      if (isPasswordChanged) {
        localStorage.removeItem('forgetemail')
        history.push("/pages/login");
      } else {
        toast.error("Failed to change password", {
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
                  <h3 className="mb-3 text-center">Change Password</h3>
                  <Form className="mt-4">
                    <Form.Group>
                      <Form.Control
                        type="password"
                        className="form-control mb-0"
                        id="exampleInputPassword"
                        placeholder="Enter New password"
                        autoComplete="off"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required
                      />
                    </Form.Group>

                    <Button
                      className="btn btn-hover btn-primary1"
                      onClick={handleresetPassword}
                    >
                      Change Password
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

export default connect(null, mapDispatchToProps)(ResetPassword);
