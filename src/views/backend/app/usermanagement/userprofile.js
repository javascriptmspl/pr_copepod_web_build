import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UpdateUser } from "../../../../store/redux/API/auth/Register";
// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// thunk
import { getByIdUserThunk } from "../../../../store/redux/SLICE/auth/Register";

//select
import Select from "react-select";

import { toast } from 'react-toastify';

import user from "../../../../assets/images/user/user.jpeg";
import { useDispatch,useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
});

const UserProfile = ({ onSave}) => {
  const [date, setDate] = useState(new Date());
  const handleChange3 = (date) => setDate(date);




  
  const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));


  const LoginUser22 = useSelector((state)=>state.user) 
 
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [userDetails, setUserDetails] = useState(null);
  const savedToken = localStorage.getItem("accessToken");

  const dispatch = useDispatch();

  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSave = async (values) => {

    try {
      const response = await UpdateUser({
        value: values,
        userID: LoginUser?._id,
      });
       dispatch(getByIdUserThunk(LoginUser?._id))
  
      if (response) {
        toast.success('Data successfully saved!');
        // window.location.reload();
     
   
      }
      
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error('An error occurred while saving data.');
    }
  };
 

  useEffect(() => {
    // Fetch user information using the saved token
    const fetchUserInfo = async () => {
      if (savedToken) {
        try {
          const response = await fetch("YOUR_USER_INFO_API_ENDPOINT", {
            headers: {
              Authorization: `Bearer ${savedToken}`,
            },
          });

          if (response.ok) {
            const userData = await response.json();
            setUserDetails(userData);
          } else {
            // Handle unauthorized access or other errors here
            console.error(
              "Error fetching user information:",
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      }
    };

    fetchUserInfo();
  }, [savedToken]);

  const handlePencilClick = () => {
    fileInputRef.current.click();
  };
  const options1 = [
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];
  const data2 = [
    {
      value: "English",
      label: "English",
    },
    {
      value: "Hindi",
      label: "Hindi",
    },
    {
      value: "Gujarati",
      label: "Gujarati",
    },
    {
      value: "Bengali",
      label: "Bengali",
    },
    {
      value: "Marathi",
      label: "Marathi",
    },
    {
      value: "Tamil",
      label: "Tamil",
    },
    {
      value: "Kannada",
      label: "Kannada",
    },
  ];

  const [valuesGender, setValues] = useState({
    Gender: LoginUser?.Gender || "Male",
     
  });

  const handleChangeGender = (selectedOption) => {
    console.log(selectedOption.value);
    setValues({
      ...valuesGender,
      Gender: selectedOption.value,

      label: selectedOption.value, // Assuming selectedOption has a 'value' property

      // Assuming selectedOption has a 'value' property
    });
  };

  const [selectedValue, setSelectedValue] = useState({
    Language : LoginUser?.Language || "",
  });

  const handleChangeLan = (value) => {
    console.log(value,"valuelanguage");
  setSelectedValue({...selectedValue , Language : value});
    // setSelectedValue(Array.isArray(value) ? value.map((x) => x.value) : '');
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      // border: "none",
      // backgroundColor: "#333",
      // Dark background color
      color: "#ffffff", // Text color
      width: "100%",
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "#333", // Dark background color for options
      color: "#ffffff", // Text color for options
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#555" : "#333", // Selected and hover background color
      color: "#ffffff", // Text color for options
    }),
  };
 

 

  return (
    <>
      <section className="m-profile manage-p">
        <Container>
          <Row className="row align-items-center justify-content-center h-100">
            <Col lg="10">
              <div className="sign-user_card">
                <Row>
                  <Container>
                    <Row>
                      <Col lg="12">
                        <div className="upload_profile d-inline-block ml-5">
                          {selectedFile ? (
                            <img
                              src={URL.createObjectURL(selectedFile)}
                              className="profile-pic avatar-130 rounded-circle img-fluid"
                              alt="user"
                            />
                          ) : (
                            <img
                              src={user}
                              className="profile-pic avatar-130 rounded-circle img-fluid"
                              alt="user"
                            />
                          )}
                          <div className="p-image" onClick={handlePencilClick}>
                            <i className="ri-pencil-line upload-button"></i>
                          </div>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e.target.files)}
                            style={{ display: "none" }}
                          />
                        </div>
                      </Col>
                     
                    </Row>
                  </Container>
                  <Col lg="12" className="device-margin">
                    <div className="profile-from">
                      <Formik
                        initialValues={{
                          Name: LoginUser?.Name || "",

                          email: LoginUser?.email || "",
                          DOB: LoginUser?.DOB || "",
                          Language : LoginUser?.Language || "",
                          Gender: valuesGender.Gender || "",
                          phone_number: LoginUser?.phone_number || "",
                        }}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        onSubmit={handleSave}

                        // onSubmit={(values, { setSubmitting }) => {
                       
                      
                      >
                        {({
                          handleSubmit,
                          isSubmitting,
                          handleChange,
                          values,
                        }) => (
                          <Form className="mt-4" onSubmit={handleSubmit}>
                            <Row>
                              <Col
                                lg="6"
                                sm="12"
                                className="device-margin up-custom-name my-3"
                              >
                                <Form.Group className="form-group">
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    className="form-control "
                                    id="Name"
                                    value={values?.Name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                    name="Name" // Make sure the name attribute matches the key in initialValues
                                  />
                                  <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-light"
                                  />
                                </Form.Group>
                              </Col>
                              <Col
                                lg="6"
                                sm="12"
                                className="device-margin my-3"
                              >
                                <Form.Group className="form-group  ">
                                  <Form.Label>Date of Birth</Form.Label>
                                  <br />
                                 
                                  <Form.Control
                                    type="date"
                                    className="form-control "
                                    id="DOB"
                                    value={values?.DOB}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                    name="DOB" 
                                  />
                                  <ErrorMessage
                                    name="dateOfBirth"
                                    component="div"
                                    className="text-light"
                                  />
                                </Form.Group>
                              </Col>

                              <Col
                                lg="6"
                                sm="12"
                                className="device-margin up-custom-name my-3"
                              >
                                <Form.Group className="form-group">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control
                                    type="text"
                                    className="form-control "
                                    id="email"
                                    value={values?.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your email"
                                    autoComplete="off"
                                    name="email" // Make sure the name attribute matches the key in initialValues
                                  />
                                  <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-light"
                                  />
                                </Form.Group>
                              </Col>
                              <Col
                                lg="6"
                                sm="12"
                                className="device-margin my-3"
                              >
                                <Form.Group className="form-group  ">
                                  <Form.Label>Phone Number</Form.Label>
                                  <br />
                                  <Form.Control
                                    type="text"
                                    className="form-control "
                                    id="phone_number"
                                    value={values?.phone_number}
                                    onChange={handleChange}
                                    placeholder="Enter Your phone_number"
                                    autoComplete="off"
                                    name="phone_number" 
                                  />
                                  <ErrorMessage
                                    name="dateOfBirth"
                                    component="div"
                                    className="text-light"
                                  />
                                </Form.Group>
                              </Col>

                              <Form.Group className="form-group col-12">
                                <Row>
                                  <Col
                                    lg="6"
                                    sm="12"
                                    className="device-margin  "
                                  >
                                    <div className="iq-custom-select">
                                      <Form.Label>Gender</Form.Label>

                                      <Select
                                        className="iq-size w-100  "
                                        id="Gender"
                                        placeholder="Select Gender"
                                        options={options1}
                                        name="Gender"
                                        // value={'valuesGender?.Gender'}
                                        onChange={handleChangeGender}
                                        styles={customStyles}
                                      />
                                      <ErrorMessage
                                        name="gender"
                                        component="div"
                                        className="text-light"
                                      />
                                    </div>
                                  </Col>
                                  <Col
                                    lg="6"
                                    sm="12"
                                    className="device-margin "
                                  >
                                    <div className="form1">
                                      <Form.Label>
                                        Language Preference
                                      </Form.Label>

                                      <Select
                                        id="Language"
                                        className="bgcollor iq-size w-100"
                                        placeholder="Language Preference"
                                        // value={data2.filter((obj) =>
                                        //   selectedValue.includes(obj.value)
                                        // )}
                                        options={data2}
                                        onChange={handleChangeLan}
                                        styles={customStyles}
                                        isMulti
                                        isClearable
                                        name="Language"
                                      />
                                      
                                    </div>
                                  </Col>
                                </Row>
                              </Form.Group>
                            </Row>

                            <div className="d-flex justify-content-end ">
                             <Link to="/manage-user"> <button
                                type="submit"
                                // style={{zIndex:'-11'}}
                                className="btn btn-hover"
                                onClick={() => handleSave(values)}
                                // disabled={isSubmitting}
                              >
                                Save
                              </button></Link>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserProfile;
