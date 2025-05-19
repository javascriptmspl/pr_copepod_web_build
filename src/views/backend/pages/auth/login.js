import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
// rtl
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { rtlModeAction, getRtlMode } from "../../../../store/mode/rtlmode";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

// slice
import {
  loginThunk,
  phoneLoginThunk,
} from "../../../../store/redux/SLICE/auth/Register";
import { getAllModes } from "../../../../store/redux/SLICE/auth/ModeSlice";
import { LOCAL_USER } from "../../utils/Auth-utils";
import { userProfileGetAll } from "../../../../store//redux/SLICE/auth/Register";
import HeaderStyle1 from "../../../../components/partials/backend/headerstyle/headerstyle1";
import Footerstyle from "../../../../components/partials/backend/footerstyle/footerstyle";
import logo from "../../../../assets/images/logo.png";

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

const Login = () => {
  const [show] = useState(false);
  const ModeID = JSON.parse(localStorage.getItem("ModeDynmic"));

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    phone_numbers: "",
  });
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({});
  const [password, setPassword] = useState("");
  const [loginMethod, setLoginMethod] = useState("email", "phone");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    const rememberMeChecked = Cookies.get("rememberMe") === "true";
    setRememberMe(rememberMeChecked);
    if (rememberMeChecked) {
      const savedEmail = Cookies.get("email");
      const savedPassword = Cookies.get("password");
      setLoginData({
        ...loginData,
        email: savedEmail,
        password: savedPassword,
      });
    }
  }, []);

  useEffect(() => {
    const rememberMeChecked = Cookies.get("rememberMe") === "true";
    setRememberMe(rememberMeChecked);
    if (rememberMeChecked) {
      const savedPhone = Cookies.get("phone_number");
      const savedPassword = Cookies.get("password");
      setLoginData({
        ...loginData,
        phone_numbers: savedPhone,
        password: savedPassword,
      });
    }
  }, []);

  const handleSignIn = async () => {
    try {
      if (loginMethod === "phone") {
        await dispatch(
          phoneLoginThunk({
            mode: ModeID,
            phone_number: loginData.phone_numbers,
            password: loginData.password,
          })
        );
      } else {
        await dispatch(
          loginThunk({
            mode: ModeID,
            email: loginData.email,
            password: loginData.password,
          })
        );
      }

      if (loginData.phone_numbers || loginData.email || loginData.password) {
        setLoginData({
          email: "",
          password: "",
        });

        const usertoken = localStorage.getItem("LoginUser");

        if (rememberMe) {
          Cookies.set("email", loginData.email);
          Cookies.set("password", loginData.password);
          Cookies.set("rememberMe", true, { expires: 28 });
        } else {
          Cookies.remove("email");
          Cookies.remove("password");
          Cookies.remove("rememberMe");
        }
        console.log(rememberMe, "remember");

        if (usertoken) {
          history.push("/select-profile");
          toast.success("Successfully logged in!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          window.location.reload();
        } else {
          toast.error("Invalid email or password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
        }
      }
    } catch (error) {
      toast.error("Error during login. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      console.log(error, "error");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSignIn();
    }
  };

  const handleChange = (e) => {
    console.log(e, "event");
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const GetAllMode = () => {
    dispatch(getAllModes());
  };

  useEffect(() => {
    GetAllMode();
  }, []);

  return (
    <>
      {/* <HeaderStyle1/> */}
      {/* <div className={`rtl-box ${show === true ? "show" : ""}`}>
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="false"
              onClick={() => {
                // props.rtlModeAction("ltl");
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
                // props.rtlModeAction("rtl");
              }}
              data-value="rtl"
            >
              <Link to="#">RTL</Link>
            </li>
          </ul>
        </div>
      </div> */}
      <section className="sign-in-page">
        <Navbar.Brand className="navbar-brand1" href="/">
          <img className="img-fluid logo" src={logo} alt="copepod" />
        </Navbar.Brand>

        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <Link
                      to="/select-profile"
                      className="mb-3 text-center"
                      onClick={handleSignIn}
                    >
                      Sign in
                    </Link>

                    <Form className="mt-4">
                      <Form.Group>
                        {loginMethod === "email" ? (
                          <Form.Control
                            type="email"
                            name="email"
                            className="form-control mb-0"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                            autoComplete="on"
                            value={loginData.email}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <Form.Control
                            type="text"
                            name="phone_numbers"
                            className="form-control mb-0"
                            id="exampleInputEmail1"
                            placeholder="Enter phone number"
                            autoComplete="on"
                            value={loginData.phone_numbers}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type={showPassword ? "text" : "password"} 
                          name="password"
                          className="form-control mb-0 password-input"
                          id="exampleInputPassword2"
                          placeholder="Password"
                          autoComplete="on"
                          value={loginData.password}
                          onKeyDown={handleKeyDown}
                          onChange={handleChange}
                          required
                        />
                       <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
          {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
        </span>
                      </Form.Group>

                      <div className="custom-control custom-checkbox d-inline-block">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                          checked={rememberMe}
                          onChange={handleRememberMeChange}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                      <div className="mb-2 d-flex justify-content-end links">
                        {loginMethod === "email" ? (
                          <p
                            className="f-link"
                            style={{ fontSize: "15px" }}
                            onClick={() => setLoginMethod("phone")}
                          >
                            Login with Phone Number
                          </p>
                        ) : (
                          <p
                            className="f-link"
                            onClick={() => setLoginMethod("email")}
                          >
                            Login with Email
                          </p>
                        )}
                      </div>
                      <Button
                        className="btn btn-hover btn-primary1"
                        onClick={handleSignIn}
                      >
                        {loginMethod === "phone"
                          ? "Sign in with Phone"
                          : "Sign in"}
                      </Button>
                    </Form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?
                    <Link to="/pages/sign-up" className="text-primary ml-2">
                      Sign Up
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link to="/pages/recover-pswd" className="f-link">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Footerstyle/> */}
    </>
  );
};

export default Login;
