import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MyContext from "../../../useContext/Context";
import { useDispatch, useSelector } from "react-redux";

import {
  GetAllSubprofilebyuserIDThunk,
  GetAllUserIdThunk,
  GetSubUserByIdThunk,
} from "../../../store/redux/SLICE/auth/Register";


// images------
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
import { LOCAL_USER } from "../utils/Auth-utils";

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


function ChosseProfile() {
  const {edituseData}=useContext(MyContext)
  const [showedit, setShowedit] = useState(false);

  const userData=JSON.parse(localStorage.getItem("LoginUser"));
  const { userdata, editfunction } = useContext(MyContext);
  const history = useHistory();
  const dispatch = useDispatch();
console.log(userData);

  const categories = [
    {
      title: userData?.Name || "Admin",
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


  const handleProfileClick = (item) => {
    localStorage.setItem("selectedProfile", JSON.stringify(item));
   
    history.push({
      pathname: "/profile",
      state: { profileData: item },
    });
  };

  const toggleEdit = () => {
    setShowedit(!showedit);
  };

   // -----getall by mode id-----------------------------
  //  useEffect(() => {

  //   dispatch(GetAllUserIdThunk());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(GetSubUserByIdThunk())
  }, [dispatch]);

  // ----------------getallby userid----------------------
  // useEffect(() => {
  //   dispatch(GetAllSubprofilebyuserIDThunk(userData?._id));

  // }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(GetAllSubprofilebyuserIDThunk(userData?._id));
    };
    fetchData();
    return () => {
     
    };
  }, [dispatch, userData?._id]);
  



  const SUBUSERS = useSelector((state) => state?.user?.subuser);

  return (
    <>
    <div className="custom-add-profile">
      <div className="container-fluid">
        <div className="row custm-row">
          <div className="col-md-9">
            <h4 className="custom-profile">
               Profiles
            </h4>
          </div>
          <div className="col-md-3 justify-content-end">
            <Link to="#" onClick={toggleEdit}>
              <h5 className="custm-edit d-flex">
               
              
              </h5>
            </Link>
          </div>
        </div>
        <div
          className="custom-categty media_flex_wrap"
          style={containerStyle}
        >
          {userdata.map((item, index) => (
            <Link className="custom-visi-hide" to="/pages/interest" key={index}>
              <div className="category-item">
                <div style={imgStyle} className="category-image custom-img">
                  <img 
                    src={categories[item.image].imageUrl}
                    alt={categories[item.image].title}
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => handleProfileClick(item)}
                  />
                  {showedit && (
                    <Link
                      to="/edit-profile"
                      onClick={() => editfunction(index)}
                    >
                      <i className="fa fa-edit m-1 custom-fafa"></i>
                    </Link>
                  )}
                </div>
                <p className="catety-text">{userData?.Name}</p>
              </div>
            </Link>
          ))}
           {SUBUSERS && SUBUSERS.map((item, index) => (
              <Link className="custom-visi-hide" to="/pages/interest" key={index}>
                <div className="category-item">
                  <div style={imgStyle} className="category-image custom-img">
                    <img
                      src={item.image}
                      // alt={categories[item.image].title}
                      style={{ width: "100%", height: "100%" }}
                    />
                   
                   
                    {showedit && (
                      <Link
                        to="/edit-profile"
                        onClick={() => editfunction(index)}
                      >
                        <i className="fa fa-edit m-1 custom-fafa"></i>
                      </Link>
                    )}
                  </div>
                  <p className="catety-text">{item.Name}</p>
                  
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

export default ChosseProfile;
