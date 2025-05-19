import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user from "../../../../assets/images/user/user.jpeg";
import {
  GetSubUserByIdThunk,
  getByIdUserThunk,
  updateUserThunk,
} from "../../../../store/redux/SLICE/auth/Register";
import {
  GetAllSubprofilebyuserIDThunk,
  deleteSubUserThunk,
} from "../../../../store/redux/SLICE/auth/Register";
import MyContext from "../../../../useContext/Context";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SubUserProfile = () => {
  const { id } = useParams();
  const { edituseData } = useContext(MyContext);

  const [selectedProfile, setSelectedProfile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    } else if (location.state && location.state.profileData) {
      setSelectedProfile(location.state.profileData);
    }
  }, [location]);

  const dispatch = useDispatch();

  const LoginUserlocal = JSON.parse(localStorage.getItem("LoginUser"));
  const history = useHistory();
  const token = localStorage.getItem("usertoken");
  const store = useSelector((state) => state);
  const subUser = store && store?.user?.subuser;
  const LoginUser = store && store?.user?.user;

  console.log(LoginUser, "testloginuser");
  console.log(subUser, "Sub User store");

  useEffect(() => {
    dispatch(getByIdUserThunk(LoginUserlocal?._id));

    dispatch(GetSubUserByIdThunk({ id }));
  }, [dispatch, id]);

  const onSave = (newUserData) => {
    history.push("/subUserProfile", { userData: newUserData });
  };

  const handleProfileClick = (selectedUser) => {
    setSelectedProfile(selectedUser);
  };

  const handleDeleteSubUser = async (id) => {
    await dispatch(deleteSubUserThunk({ id, token }));
    dispatch(GetAllSubprofilebyuserIDThunk());
    console.log(id, "checkdeleteid");
  };

  return (
    <>
      <section className="m-profile setting-wrapper">
        <Container>
          <h4 className="main-title mb-4">Account Setting</h4>
<h5 className="back "><a href="/add-profile" type="btn">Back</a></h5>
          <Row>
            {/* <Col lg="4" className="mb-3">
                    
               <div className="sign-user_card text-center" onClick={() => handleProfileClick()} >
                <img
                  src={user}
                  className="rounded-circle img-fluid d-block mx-auto mb-3"
                  alt="user"
                />
                <h4 className="mb-3">{LoginUser?.Name}</h4>
                <h6 className="mb-3"><span></span> Admin</h6>
                <h5 className="mb-3"></h5>
                <p>
                  John's cinematic
                  journey spans across genres, from thought-provoking dramas to
                  exhilarating action flicks.
                </p>
                
              </div> 
           

            </Col> */}

            <Col lg="4" className="mb-31">
              <div
                className="sign-user_card text-center"
                onClick={() => handleProfileClick()}
              >
                <img
                  src={subUser?.image}
                  className="rounded-circle img-fluid d-block mx-auto mb-3"
                  alt="user"
                />
                <h4 className="mb-3">{subUser?.Name}</h4>
                <h6 className="mb-3">
                  <span>
                    {" "}
                    <i
                      class="fa-solid fa-circle fa-sm"
                      style={{ color: " #73fb04" }}
                    ></i>
                  </span>{" "}
                  Active Profile
                </h6>
                <h5 className="mb-3"></h5>
                <p>
                  A passionate cinephile with an insatiable appetite for
                  captivating stories and mesmerizing visuals. Cinematic journey
                  spans across genres.
                </p>
                {/* <Col md="">
                 
                    <span className="text-light font-size-13"> Language Prefrence </span>
                    <p className="mb-0">{subUser?.Language}</p>
                  </Col> */}

                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
                <Link to="/editSubUser" className="edit-icon text-primary">
                  Edit
                </Link>
                <Link to="/add-profile" className="delete-icon text-primary" onClick={() => handleDeleteSubUser(id)}>
                  Delete
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SubUserProfile;
