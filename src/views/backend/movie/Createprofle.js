import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/trending/1.png";
import img2 from "../../../assets/images/trending/2.png";
import img3 from "../../../assets/images/trending/3.png";
import img5 from "../../../assets/images/trending/5.png";
import img6 from "../../../assets/images/trending/6.png";
import img7 from "../../../assets/images/trending/7.png";
import img9 from "../../../assets/images/trending/9.png";
import img10 from "../../../assets/images/trending/10.png";
import img11 from "../../../assets/images/trending/11.png";
import img32 from "../../../assets/images/trending/32.png";
import img33 from "../../../assets/images/trending/33.png";
import img34 from "../../../assets/images/trending/34.png";
import img36 from "../../../assets/images/trending/36.png";
import MyContext from "../../../useContext/Context";
import arrowPrevIcon from "../../../assets/images/upcoming/left-arrow.png";
import arrowNextIcon from "../../../assets/images/upcoming/next11.png";
import { useDispatch } from "react-redux";
import { CreateSubUserThunk, GetAllSubprofilebyuserIDThunk } from "../../../store/redux/SLICE/auth/Register";
import {MODE_ID, USERID} from '../../../utils';

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

function CreateProfile() {
  const dispatch =useDispatch()
  const [inputValue, setInputValue] = useState("Your Name");
  const [selectedCategory, setSelectedCategory] = useState(4);
  const [showForm, setShowForm] = useState(false);
  SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);
  const { addNewEntry } = useContext(MyContext);


  
  const [userobj, setUserObj] = useState({
    name: "",
    contentrated: "",
    selectContent: "",
    forKids: "",
    image:selectedCategory,
    mode : "65c9e868ef719d3c44940a9d",
    user : USERID,
  });

  SwiperCore.use([Navigation]);
  

  useEffect(() => {
     
    dispatch(GetAllSubprofilebyuserIDThunk());

     
  }, [dispatch]);


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

  const handleCategoryClick = (index) => {
    setSelectedCategory(selectedCategory === index ? null : index);
    setUserObj({ ...userobj, "image": categories[index].imageUrl });

  };

  const handleUserObjChange = (event) => {
    setShowForm(true);

    setUserObj({ ...userobj, [event.target.name]: event.target.value });
  };



  const SubmitProfile = async() => {
  await  dispatch(CreateSubUserThunk({value:{
      Name: userobj.name ,
      content_Rating: userobj.contentrated ,
      parental_Lock:userobj.selectContent === 'on' ? true : false ,
      forKids: userobj.forKids === 'on' ? true : false,
      image: userobj.image,
      mode : "65c9e868ef719d3c44940a9d",
      user : USERID
    }}))
 await   dispatch(GetAllSubprofilebyuserIDThunk());

  };
   
  return (
    <>
      <div className="custom-add-profile">
        <div className="container-fluid">
          <div className="row custm-row next">
            <div className="col-md-9">
              <h4 className="custom-profile select">Create Profiles</h4>
            </div>
            <div className="col-md-3 justify-content-end">
              <h5 className="custm-edit">
                <Link to="/add-profile">Cancel</Link>
              </h5>
            </div>
          </div>
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
                      <div style={imgStyle} className="category-image">
                        <img
                          src={category.imageUrl}
                          alt={category.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius:
                              selectedCategory === index ? "50%" : "0",
                          }}
                          className={`category-image ${
                            selectedCategory === index ? "" : ""
                          }`}
                        />
                        {selectedCategory === index && (
                          <div className="custom-tick" style={tickStyle}>
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

          <div className="col-md-6 mx-auto input-widthh">
            <input
              type="text"
              name="name"
              value={userobj.name}
              placeholder="Your Name"
              onChange={handleUserObjChange}
            />

            {showForm && (
              <div>
                <div className="duo_label_toggle_wrap">
                  <div className="duo_label">
                    <h6>Is this for Kids?</h6>
                    <label>Content rated U/A 7+ & below</label>
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customSwitch"
                      name="forKids"
                      data-toggle="toggle"
                      onChange={handleUserObjChange}
                    />
                    <label
                      class="custom-control-label"
                      for="customSwitch"
                    ></label>
                  </div>
                </div>
                <hr></hr>
                <div className="toBeFlexed">
                  <div className="duo_label">
                    <h6>select Content Rating</h6>
                    <label>You will see content rated up to</label>
                  </div>
                  <select
                    name="selectContent"
                    value={userobj.selectContent}
                    onChange={handleUserObjChange}
                    class="form-select"
                  >
                    <option>1U/A 7+</option>
                    <option>2U/A 7+</option>
                    <option>3U/A 7+</option>
                    <option>4U/A 7+</option>
                  </select>
                </div>
                <hr></hr>
                <div className="duo_label_toggle_wrap">
                  <div className="duo_label">
                    <h6>Set a Parental Lock ?</h6>
                    <label>Restrict access to adult profiles with a PIN</label>
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customSwitch1"
                      name="contentrated"
                      data-toggle="toggle"
                      onChange={handleUserObjChange}
                    />
                    <label
                      class="custom-control-label"
                      for="customSwitch1"
                    ></label>
                  </div>
                </div>
                <hr></hr>
                <Link to="/add-profile">
                  <button
                    className="btn btn-hover custom-color "
                    onClick={SubmitProfile}
                  >
                    Create Your Profile
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProfile;
