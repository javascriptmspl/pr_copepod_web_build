import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Form } from "react-bootstrap";

// import Choices from 'react-choices'

// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//select
import Select from "react-select";

import user from "../../../../assets/images/user/user.jpeg";

const UserProfile = () => {
  const [date, setDate] = useState(new Date());
  const handleChange3 = (date) => setDate(date);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handlePencilClick = () => {
    fileInputRef.current.click();
  };
  // const states = [
  //     { value: 'S' },
  //     { value: 'M' },
  //     { value: 'F' }
  //   ]
  const options1 = [
    {
      value: 1,
      label: "Female",
    },
    {
      value: 2,
      label: "Male",
    },
    {
      value: 3,
      label: "Other",
    },
  ];
  const data2 = [
    {
      value: 1,
      label: "English",
    },
    {
      value: 2,
      label: "Hindi",
    },
    {
      value: 3,
      label: "Gujarati",
    },
    {
      value: 4,
      label: "Bengali",
    },
    {
      value: 5,
      label: "Marathi",
    },
    {
      value: 6,
      label: "Tamil",
    },
    {
      value: 7,
      label: "Kannada",
    },
  ];
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleSave = () => {
    // Show a red color Toastify notification
    // toast.error("Data saved successfully!", {
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 3000,
    //     className: 'toast-error'
    // });
  };
  return (
    <>
      <section className="m-profile manage-p">
        <Container>
          <Row className="row align-items-center justify-content-center h-100">
            <Col lg="10">
              <div className="sign-user_card">
                <Row>
                  <Col lg="2">
                    {/* <div className="upload_profile d-inline-block">
                                            <img src={user} className="profile-pic avatar-130 rounded-circle img-fluid" alt="user"/>
                                            <div className="p-image">
                                                <i className="ri-pencil-line upload-button"></i>
                                                <input className="file-upload" type="file" accept="image/*"/>
                                            </div>
                                        </div> */}
                    <div className="upload_profile d-inline-block">
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
                  <Col lg="12" className="device-margin">
                    <div className="profile-from">
                      {/* <h4 className="mb-3">John Deo</h4>
                       <h5 className="">DOB </h5>
                         <p>07/11/1998</p>
                       <h5 className="">Gender </h5>
                         <p>Male</p> */}
                      <Form className="mt-4" action="#">
                        <Form.Group className="form-group">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control mb-0"
                            id="exampleInputl2"
                            placeholder="Enter Your Name"
                            autoComplete="off"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="form-group mb-4">
                          <Form.Label>Date of Birth</Form.Label>
                          <br />
                          <DatePicker
                            selected={date}
                            dateFormat="yyyy/MM/dd"
                            onChange={handleChange3}
                          />
                        </Form.Group>
                        <Form.Group className="form-group d-flex flex-md-row flex-column">
                          <div className="iq-custom-select  mr-3  mb-2">
                            <Select
                              className="iq-size w-100 "
                              id="f1"
                              placeholder="Select Gender"
                              options={options1}
                            />
                          </div>
                          <div className="w-50 form1">
                            <Select
                              className="bgcollor "
                              placeholder="Language Preference"
                              value={data2.filter((obj) =>
                                selectedValue.includes(obj.value)
                              )} // set selected values
                              options={data2} // set list of the data
                              onChange={handleChange} // assign onChange function
                              isMulti
                              isClearable
                            />
                          </div>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                          <Link
                            to="#"
                            onClick={handleSave}
                            className="btn btn-hover"
                          >
                            Save
                          </Link>
                          <Link to="#" className="btn btn-link">
                            Cancel
                          </Link>
                        </div>
                      </Form>
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
