import {
  Container,
  Button,
  Row,
  Col,
  Form,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { rtlModeAction, getRtlMode } from "../../../../store/mode/rtlmode";
import { BASE_URL } from "../../API";
import { ToastContainer, toast } from "react-toastify";
// import { toast as hotToast } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import logo from "../../../../assets/images/logo.png";
import Select from "react-select";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-number-input";

// toast

// Now you can use showToast instead of toast

// slice
import { getAllModes } from "../../../../store/redux/SLICE/auth/ModeSlice";
import { createUserThunk } from "../../../../store/redux/SLICE/auth/Register";
import HeaderSignUp from "../../../../components/partials/backend/headerstyle/headersignup";
import HeaderStyle1 from "../../../../components/partials/backend/headerstyle/headerstyle1";
import Footerstyle from "../../../../components/partials/backend/footerstyle/footerstyle";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
  email: Yup.string().email("Enter valid email").required("Required"),
  DOB: Yup.string().required("Required"),

  phone: Yup.string()
    .test("is-valid-phone", "Invalid phone number", (value) => {
      const numericValue = value.replace(/\D/g, "");
      const pattern = /^\+?[1-9]\d{1,14}$/;
      return pattern.test(numericValue);
    })
    .required("required"),

  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be strong at least 8 characters"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

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

const SignUp = ({ handleChange }) => {
  const ModeID = JSON.parse(localStorage.getItem("ModeDynmic"));

  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const GetAllMode = () => {
    dispatch(getAllModes());
  };

  useEffect(() => {
    GetAllMode();
  }, []);

  const history = useHistory();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (values.password !== values.confirmPassword) {
        toast.error("Password and Confirm Password do not match");
        return;
      }

      const user = {
        mode: ModeID,
        Name: values.name,
        password: values.password,
        confirmPassword: values.confirmPassword,
        email: values.email,
        phone_number: values.phone,
        DOB: values.DOB,
        interest: values.interest,
      };

      setSubmitting(true); // Set submitting state to true before API call

      // Dispatch the createUserThunk action
      await dispatch(createUserThunk(user));

      // Handling success
      toast.success("User Successfully Created");
      setTimeout(() => {
        history.push("/login");
      }, 500);
    } catch (error) {
      toast.error("Failed to register. Please try again later.");
      console.error("Registration error:", error);
    } finally {
      setSubmitting(false); // Ensure setSubmitting(false) is called even in case of error
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleKeyDown = (event, handleSubmit) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptionToggle = (option) => {
    const isSelected = selectedOptions.includes(option.value);
    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== option.value)
      );
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
    handleChange("interest", selectedOptions); // Update form values
  };

  const options = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "thriller", label: "Thriller" },
    { value: "sci-fi", label: "Sci-Fi" },
    { value: "fantasy", label: "Fantasy" },
    { value: "crime", label: "Crime" },
    { value: "mystery", label: "Mystery" },
    { value: "war", label: "War" },
  ];

  const renderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="6">
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control mb-0"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Full Name"
              autoComplete="off"
              required
            />
            <Form.Text className="text-light">
              {errors.name && touched.name && errors.name}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <ReactPhoneInput
              className="new-input"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              country={"us"}
              value={values.phone}
              onChange={(phone) =>
                handleChange({ target: { name: "phone", value: phone } })
              }
              onBlur={handleBlur}
              placeholder="Enter phone number"
            />
            <Form.Text className="text-light">
              {errors.phone && touched.phone && errors.phone}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="Date"
              className="mb-0"
              name="DOB"
              value={values.DOB}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Date Of Birth"
              autoComplete="off"
              required
            />
            <Form.Text className="text-light">
              {errors.DOB && touched.DOB && errors.DOB}
            </Form.Text>
          </Form.Group>
        </Col>

        <Col md="6">
          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              className="mb-0"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter email"
              autoComplete="off"
              required
            />
            <Form.Text className="text-light">
              {errors.email && touched.email && errors.email}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control mb-0 password-input1"
              id="exampleInputPassword2"
              placeholder="Password"
              autoComplete="on"
              value={values.password}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle-icon1"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </span>
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="mb-0"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              required
            />
            <Form.Text className="text-light">
              {errors.password && touched.password && errors.password}
            </Form.Text>
          </Form.Group> */}
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              className="mb-0"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onKeyDown={(event) => handleKeyDown(event, handleSubmit)}
              onBlur={handleBlur}
              placeholder="Confirm Your Password"
              autoComplete="off"
              required
            />
            <Form.Text className="text-light">
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </Form.Text>
          </Form.Group>
        </Col>
        {/* <Col md="6">
          <Form.Group>
            <Form.Label>Interest</Form.Label>
            <Form.Control 
              type="text"
              className="mb-0"
              name="interest"
              value={values.interest}
              onChange={(selectedOption) => handleChange('interest', selectedOption)}
              onBlur={handleBlur}
              options={options}
              placeholder="Your Interest's"
              autoComplete="off"
              required
            />
            <div className="custom-dropdown">
          {options.map((option) => (
            <label key={option.value} className={selectedOptions.includes(option.value) ? 'selected' : ''}>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleOptionToggle(option)}
              />
              {option.label}
            </label>
          ))}
        </div>
            <Form.Text className="text-light">
              {errors.interest && touched.interest && errors.interest}
            </Form.Text>
          </Form.Group>
        </Col> */}
      </Row>
      <div className="custom-control custom-radio mt-2">
        {/* Radio buttons go here */}
      </div>
      <Button type="submit" className="btn btn-hover btn-primary1 my-2">
        Sign Up
      </Button>
    </Form>
  );

  return (
    <>
      {/* <HeaderStyle1/> */}
      <section className="sign-in-page">
        {/* <Navbar.Toggle className="c-toggler">
                    <div className="navbar-toggler-icon">
                      <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                    </div>
                  </Navbar.Toggle> */}
        <Navbar.Brand className="navbar-brand1" href="/">
          <img className="img-fluid logo" src={logo} alt="copepod" />
        </Navbar.Brand>

        <Container>
          <ToastContainer />

          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="7" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <h3 className="mb-3 text-center">Sign up</h3>
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        DOB: "",
                        phone: "+",
                        password: "",
                        confirmPassword: "",
                      }}
                      validationSchema={SignUpSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values, { setSubmitting });
                      }}
                    >
                      {renderForm}
                    </Formik>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Already have an account?
                    <Link to="/pages/login" className="text-primary ml-2">
                      Sign In
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
