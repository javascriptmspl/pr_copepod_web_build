import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

import img4 from "../../../assets/images/upcoming/newadd.jpg";
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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { Link } from "react-router-dom";
import MyContext from "../../../useContext/Context";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllSubprofilebyuserIDThunk,
  GetAllUserIdThunk,
  deleteSubUserThunk,
  GetSubUserByIdThunk,
} from "../../../store/redux/SLICE/auth/Register";
import { CreateSubUserThunk } from "../../../store/redux/SLICE/auth/Register";
// import {userProfileGetAll} from "../../../../store//redux/SLICE/auth/Register";

const imgStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden",
  marginRight: "20px",
};

const containerStyle = {
  display: "flex",
  // justifyContent: "space-between",
};

function AddProfile() {
  const { id } = useParams();

  const { edituseData } = useContext(MyContext);
  const { userdata, editfunction } = useContext(MyContext);
  const [showedit, setShowedit] = useState(false);
  const [storedUserData, setStoredUserData] = useState(
    JSON.parse(localStorage.getItem("LoginUser")) || []
  );
  const token = localStorage.getItem("usertoken");
  console.log(token, "tokencheck");
  // const modeID =JSON.parsn(localStorage.getItem('ModeDynmic')
  // console.log(userdata,"userdata check");

  const dispatch = useDispatch();
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

  console.log(storedUserData);

  const toggleEdit = () => {
    setShowedit(!showedit);
  };

  // -----getall by mode id-----------------------------

  // ----------------getallby userid----------------------

  useEffect(() => {
    dispatch(GetAllSubprofilebyuserIDThunk());
  }, [dispatch]);

  // ------get subuserby subuserid-------------
  useEffect(() => {
    dispatch(GetSubUserByIdThunk());
    dispatch(GetAllSubprofilebyuserIDThunk());
  }, [dispatch]);

  const handleDeleteSubUser = async (id) => {
    await dispatch(deleteSubUserThunk({ id, token }));
    dispatch(GetAllSubprofilebyuserIDThunk());
    console.log(id, "checkdeleteid");
  };

  const store = useSelector((state) => state);
  const SUBUSERS = store?.user?.subuser;
  console.log(SUBUSERS, "SUBUSERSSSS");
  const USER = useSelector((state) => state?.user?.user);

  // const subUser = store && store?.user?.subuser
  // const  LoginUser = store?.user?.user[0] && store?.user?.user[0]

  return (
    <>
      <div className="custom-add-profile">
        <div className="container-fluid">
          <div className="row custm-row">
            <div className="col-md-9">
              <h4 className="custom-profile">
                {showedit ? "Edit Profile" : "Profiles"}
              </h4>
            </div>
            <div className="col-md-3 justify-content-end">
              <Link to="#" onClick={toggleEdit}>
                <h5 className="custm-edit d-flex">
                  {showedit ? null : <i className="fa fa-edit m-1 "></i>}
                  {showedit ? "Cancel" : "Edit"}
                </h5>
              </Link>
            </div>
          </div>
          <div
            className="custom-categty media_flex_wrap"
            style={containerStyle}
          >
            {userdata &&
              userdata?.map((item, index) => (
                <Link className="custom-visi-hide" to="/" key={index}>
                  <div className="category-item">
                    <div style={imgStyle} className="category-image custom-img">
                      <img
                        src={categories[item.image].imageUrl}
                        alt={categories[item.image].title}
                        style={{ width: "100%", height: "100%" }}
                      />
                      {/* {showedit && (
                        <Link
                          to="/edit-profile"
                          onClick={() => editfunction(item)}
                        >
                          <i className="fa fa-edit m-1 custom-fafa"></i>
                        </Link>
                      )} */}
                    </div>
                    <p className="catety-text">{item.name}</p>
                  </div>
                </Link>
              ))}
            {Array.isArray(SUBUSERS) &&
              SUBUSERS.length > 0 &&
              SUBUSERS?.map((item, index) => (
                <Link
                  className="custom-visi-hide"
                  // to={`/subuser-profile/${item?._id}`}
                  to="/"
                  key={index}
                >
                  <div className="category-item">
                    <div style={imgStyle} className="category-image custom-img">
                      <img
                        src={item.image}
                        style={{ width: "100%", height: "100%" }}
                        alt={item.Name}
                      />
                      {showedit && (
                        <Link to={`/subuser-profile/${item._id}`}>
                          <i
                            className="fa fa-edit m-3 custom-fafa"
                            onClick={() => editfunction(index)}
                          ></i>
                        </Link>
                      )}
                      {showedit && (
                        <Link
                          to="#"
                          onClick={() => handleDeleteSubUser(item?._id)}
                        >
                          
                        </Link>
                      )}
                    </div>
                    <p className="catety-text">{item.Name}</p>
                  </div>
                </Link>
              ))}

            {/* -----------------------edit profile---------------------------- */}
            {userdata.map((userDataItem, userIndex) => (
              <Link
                className="custom-visi-hide"
                to="/manage-user"
                key={userIndex}
              >
                <div className="category-item">
                  {userDataItem.data &&
                    userDataItem.data.map((item, dataIndex) => (
                      <React.Fragment key={dataIndex}>
                        <div
                          style={imgStyle}
                          className="category-image custom-img"
                        >
                          <img
                            src={categories.imageUrl}
                            alt={categories.title}
                            style={{ width: "100%", height: "100%" }}
                          />

                          {showedit && (
                            <Link
                              to="/edit-profile"
                              onClick={() => editfunction(item)}
                            >
                              <i className="fa fa-edit m-1 custom-fafa"></i>
                            </Link>
                          )}
                        </div>
                        <p className="catety-text">{item.content_Rating}</p>
                      </React.Fragment>
                    ))}
                </div>
              </Link>
            ))}

            {Array.isArray(SUBUSERS) &&
              SUBUSERS.length > 0 &&
              SUBUSERS?.map((userDataItem, userIndex) => (
                <Link
                  className="custom-visi-hide"
                  to="/manage-user"
                  key={userIndex}
                >
                  <div className="category-item">
                    {userDataItem.data &&
                      userDataItem.data.map((item, dataIndex) => (
                        <React.Fragment key={dataIndex}>
                          <div
                            style={imgStyle}
                            className="category-image custom-img"
                          >
                            <img
                              src={categories.imageUrl}
                              alt={categories.title}
                              style={{ width: "100%", height: "100%" }}
                            />

                            {showedit && (
                              <Link
                                to={`/subuser-profile/${item._id}`}
                                onClick={() => editfunction(userIndex)}
                              >
                                <i className="fa fa-edit m-3 custom-fafa"></i>
                              </Link>
                            )}
                            {/* {showedit && (
                              <Link
                                to="/"
                                onclick={() => handleDeleteSubUser(id)}
                              >
                                <i className="fa fa-trash m-3 custom-fafas"></i>
                              </Link>
                            )} */}
                          </div>
                          <p className="catety-text">{item.content_Rating}</p>
                        </React.Fragment>
                      ))}
                  </div>
                </Link>
              ))}

            <Link to="/creat-profile" className="category-link">
              <div style={imgStyle} className="category-image">
                <img
                  src={img4}
                  alt={"abcd"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p className="catety-text">{"Add"}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProfile;
