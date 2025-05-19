import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// images --------------
import img1 from "../../../../assets/images/trending/1.png";
import img2 from "../../../../assets/images/trending/2.png";
import img3 from "../../../../assets/images/trending/3.png";
import img5 from "../../../../assets/images/trending/5.png";
import img6 from "../../../../assets/images/trending/6.png";
import img7 from "../../../../assets/images/trending/7.png";
import img9 from "../../../../assets/images/trending/9.png";
import img10 from "../../../../assets/images/trending/10.png";
import img11 from "../../../../assets/images/trending/11.png";
import img32 from "../../../../assets/images/trending/32.png";
import img33 from "../../../../assets/images/trending/33.png";
import img34 from "../../../../assets/images/trending/34.png";
import img36 from "../../../../assets/images/trending/36.png";
import {
  UpdateUser,
  UpdateSubUser,
} from "../../../../store/redux/API/auth/Register";
import arrowPrevIcon from "../../../../assets/images/upcoming/left-arrow.png";
import arrowNextIcon from "../../../../assets/images/upcoming/next11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// thunk
import {
  UpdateSubUserThunk,
  UpdateSubUserProfileThunk,
} from "../../../../store/redux/SLICE/auth/Register";

//select
import Select from "react-select";
import { toast } from "react-toastify";
import user from "../../../../assets/images/user/user.jpeg";
import { useDispatch, useSelector } from "react-redux";
import MyContext from "../../../../useContext/Context";
import { MODE_ID, USERID } from "../../../../utils";

const imgStyle = {
  width: "100%",
  borderRadius: "50%",
  overflow: "hidden",
};

const containerStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
};

const selectedCategoryStyle = {
  border: "3px solid white",
  position: "relative",
  borderRadius: "50%",
  padding: "3px",
};

const tickStyle = {
  bottom: "2px",
  right: "2px",
  color: "#000",
  height: "30px",
  width: "30px",
  fontSize: "19px",
  position: "absolute",
  background: "#fff",
  borderRadius: "100px",
  display: "flex",
};

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
});

const EditSubUser = ({ onSave }) => {
  const [date, setDate] = useState(new Date());
  const handleChange3 = (date) => setDate(date);
  const { edituseData } = useContext(MyContext);
  const store = useSelector((state) => state);
  const subUser = store && store?.user?.subuser;
  const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));
  const [selectedValue, setSelectedValue] = useState("");
  const LoginUser22 = useSelector((state) => state.user);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(4);
  const savedToken = localStorage.getItem("accessToken");
  SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const [userobj, setUserObj] = useState({
    name: "",
    contentrated: "",
    selectContent: "",
    forKids: "",
    image: selectedCategory,
    mode: "65c9e868ef719d3c44940a9d",
    user: USERID,
  });

  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };
  

  const handleSave = async (values) => {
    try {
      const response = await dispatch(
        UpdateSubUserThunk({
          value: values,
          userID: subUser?._id,
        })
      );

      console.log(subUser, "checksubUser");

      if (response) {
        toast.success("Data successfully saved!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("An error occurred while saving data.");
    }
  };

  SwiperCore.use([Navigation]);

  const categories = [
    {
      title: "journey",
      imageUrl: img1,
    },
    {
      title: "Bitty",
      imageUrl: img2,
    },
    {
      title: "Land",
      imageUrl: img3,
    },

    {
      title: "journey",
      imageUrl: img5,
    },
    {
      title: "Bitty",
      imageUrl: img6,
    },
    {
      title: "Land",
      imageUrl: img7,
    },

    {
      title: "journey",
      imageUrl: img9,
    },
    {
      title: "Bitty",
      imageUrl: img10,
    },
    {
      title: "Unknown",
      imageUrl: img11,
    },

    {
      title: "Bitty",
      imageUrl: img32,
    },
    {
      title: "Unknown",
      imageUrl: img33,
    },
    {
      title: "journey",
      imageUrl: img34,
    },
    {
      title: "Unknown",
      imageUrl: img36,
    },
  ];

  // const handleCategoryClick = (index) => {
  //   setSelectedCategory(selectedCategory === index ? null : index);
  //   setUserObj({ ...userobj, image: categories[index].imageUrl.toString() });
  // };

  const handleCategoryClick = (index) => {
    setSelectedCategory(selectedCategory === index ? null : index);
    setSelectedFile(categories[index].imageUrl); 
    setUserObj({ ...userobj, image: categories[index].imageUrl.toString() });
};

  const handleUserObjChange = (event) => {
    setShowForm(true);

    setUserObj({ ...userobj, [event.target.name]: event.target.value });
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
                    <div
                      className="custom-categty parent-for-slider"
                      style={containerStyle}
                    >
                      <Swiper
                        navigation={{
                          prevEl: ".swiper-button-prev",
                          nextEl: ".swiper-button-next",
                        }}
                        breakpoints={{
                          320: { slidesPerView: 3 },
                          550: { slidesPerView: 4 },
                          991: { slidesPerView: 9 },
                          1400: { slidesPerView: 9 },
                        }}
                        loop={true}
                        slidesPerView={9}
                        spaceBetween={10}
                        as="ul"
                        className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                      >
                        {categories.map((category, index) => (
                          <SwiperSlide as="li" key={index}>
                            <div className="custom-categry">
                              <div
                                key={index}
                                className={`category-item ${
                                  selectedCategory === index ? "selected" : ""
                                }`}
                                onClick={() => {
                                  handleCategoryClick(index);
                                }}
                                style={
                                  selectedCategory === index
                                    ? { ...selectedCategoryStyle }
                                    : {}
                                }
                              >
                                <div
                                  style={imgStyle}
                                  className="category-image"
                                >
                                  <img
                                    src={category.imageUrl}
                                    alt={category.title}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      borderRadius:
                                        selectedCategory === index
                                          ? "50%"
                                          : "0",
                                    }}
                                    className={`category-image ${
                                      selectedCategory === index ? "" : ""
                                    }`}
                                  />
                                  {selectedCategory === index && (
                                    <div
                                      className="custom-tick"
                                      style={tickStyle}
                                    >
                                      &#10003;
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                        <div className="custom-prev-nxt">
                          <div className="swiper-button-prev">
                            <img
                              src={arrowPrevIcon}
                              className="rounded-imgg"
                              alt="Previous"
                            />
                          </div>
                          <div className="swiper-button-next">
                            <img
                              src={arrowNextIcon}
                              className="rounded-imgg"
                              alt="Next"
                            />
                          </div>
                        </div>
                      </Swiper>
                    </div>
                    <Row>
                      <Col lg="12">
                        <div className="upload_profile d-inline-block ml-51">
                          {selectedFile ? (
                            <img
                              src={selectedFile}
                              className="profile-pic avatar-130 rounded-circle img-fluid"
                              alt="user"
                            />
                          ) : (
                            <img
                              src={subUser?.image}
                              className="profile-pic avatar-130 rounded-circle img-fluid"
                              alt="user"
                            />
                          )}

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e.target.files)}
                            style={{ display: "none" }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <Col lg="12" className="device-margin ">
                    <div className="profile-from">
                      <Formik
                        initialValues={{
                          Name: subUser?.Name || "",
                          image: userobj?.image,
                        }}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        onSubmit={handleSave}
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
                                className="device-margin up-custom-name my-3 new123"
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
                                    name="Name"
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
                              ></Col>

                              <Col
                                lg="6"
                                sm="12"
                                className="device-margin up-custom-name my-3"
                              ></Col>
                              <Col
                                lg="6"
                                sm="12"
                                className="device-margin my-3"
                              ></Col>

                              <Form.Group className="form-group col-12">
                                <Row>
                                  <Col
                                    lg="6"
                                    sm="12"
                                    className="device-margin  "
                                  ></Col>
                                  <Col
                                    lg="6"
                                    sm="12"
                                    className="device-margin "
                                  ></Col>
                                </Row>
                              </Form.Group>
                            </Row>

                            <div className="d-flex justify-content-center ">
                              <Link to={`/subuser-profile/:id`}>
                                {" "}
                                <button
                                  type="submit"
                                  // style={{zIndex:'-11'}}
                                  className="btn btn-hover"
                                  onClick={() => handleSave(values)}
                                  // disabled={isSubmitting}
                                >
                                  Save
                                </button>
                              </Link>
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

export default EditSubUser;
