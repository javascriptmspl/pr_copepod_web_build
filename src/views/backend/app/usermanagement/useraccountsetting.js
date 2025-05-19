import React, { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link ,useHistory,useLocation} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import user from "../../../../assets/images/user/user.jpeg";

import { GetSubUserByIdThunk, getByIdUserThunk, } from "../../../../store/redux/SLICE/auth/Register";


const UserAccountSetting = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    } else if (location.state && location.state.profileData) {
      setSelectedProfile(location.state.profileData);
      setUserData1(location.state.userData);
    }
  }, [location]);


  const dispatch = useDispatch();
  const [showProfileEditor, setShowProfileEditor] = useState(false); 
  const [userData1, setUserData1] = useState(JSON.parse(localStorage.getItem('LoginUser'))); 
  const LoginUserlocal =  JSON.parse(localStorage.getItem('LoginUser'))
  const history = useHistory();
  const [LoginUser,setLoginUser]=useState({})
  const Login = useSelector((state)=>state.user.user) 
  const userData=JSON.parse(localStorage.getItem("LoginUser"));



  useEffect(()=>{
if(Login){
  setLoginUser(Login[0])
}
  },[Login])

  useEffect(() => {
    dispatch(getByIdUserThunk(LoginUserlocal?._id))
  }, []);

  useEffect(() => {
    dispatch(GetSubUserByIdThunk())
    
  }, [dispatch]);
 
const onSave = (newUserData) => {
    setUserData1(newUserData); 
    setShowProfileEditor(false); 
    history.push('/manageuser',{ userData: newUserData });
  };



 
  const SUBUSERS = useSelector((state) => state?.user?.subuser);
 

  return (
    <>
      <section className="m-profile setting-wrapper">
        <Container>
          <h4 className="main-title mb-4">Account Setting</h4>
          <Row>
            <Col lg="4" className="mb-3">
              <div className="sign-user_card text-center" onClick={() => setShowProfileEditor(true)}>
                <img
                  src={user}
                  className="rounded-circle img-fluid d-block mx-auto mb-3"
                  alt="user"
                />
                <h4 className="mb-3">{LoginUser?.Name}</h4>
                <h6 className="mb-3"><span> <i class="fa-solid fa-circle fa-sm" style={{color:" #73fb04"}}></i></span> Active User</h6>
                <h5 className="mb-3"></h5>
                <p>
                  A passionate cinephile with an insatiable appetite for
                  captivating stories and mesmerizing visuals. John's cinematic
                  journey spans across genres, from thought-provoking dramas to
                  exhilarating action flicks.
                </p>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
                <Link to="/manage" className="edit-icon text-primary">
                  Edit
                </Link>
              </div>
           

            </Col>
            <Col lg="8">
            
              <div className="sign-user_card">
                <div className="row mb-3 pb-3 a-border">
                  <div className="col-6">
                    <h5 className="">Personal Details</h5>
                  </div>
                  <div className="col-6 ">
                    <Link
                      to="/add-profile"
                      style={{
                        position: "absolute",
                        right: "10px",
                      }}
                    >
                      Change profile
                    </Link>
                  </div>
                </div>
                <Row className="row align-items-center justify-content-between mb-3">
                  <Col md="8">
                  
                    <span className="text-light font-size-13">Email</span>
                    <p className="mb-0">{LoginUser?.email}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left">
                    <Link to="#" className="text-primary">
                      Read Only
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">Gender</span>
                    <p className="mb-0">{LoginUser?.Gender}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left">
                    <Link to="#" className="text-primary">
                      Read Only
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">
                      Date of Birth
                    </span>
                    <p className="mb-0">{LoginUser?.DOB}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left">
                    <Link to="#" className="text-primary">
                      Read Only
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-between">
                  <Col md="8">
                 
                    <span className="text-light font-size-13">Language</span>
                    <p className="mb-0">{LoginUser?.Language}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left">
                    <Link to="#" className="text-primary">
                      Read Only
                    </Link>
                  </Col>
                </Row>
                <h5 className="mb-3 mt-4 pb-3 a-border">Billing Details</h5>
                <Row className="justify-content-between mb-3">
                  <Col md="8" className="r-mb-15">
                    <p>
                      Your next billing date is..
                      {/* {date}-{month}-{year}. */}
                    </p>
                    <Link to="#" className="btn btn-hover">
                      Cancel Membership
                    </Link>
                  </Col>
                  <div className="col-md-4 text-md-right text-left">
                    <Link to="/pricing-plan-1" className="text-primary">
                      Update Payment info
                    </Link>
                  </div>
                </Row>
                <h5 className="mb-3 mt-4 pb-3 a-border">Plan Details</h5>
                <Row className="justify-content-between mb-3">
                  <Col md="8">
                    <p>Premium</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left">
                    <Link to="/pricing-plan-1" className="text-primary">
                      Change Plan
                    </Link>
                  </Col>
                </Row>
                <h5 className="mb-3 pb-3 mt-4 a-border">Setting</h5>
                <Row>
                  <div className="col-12 setting">
                    {/* <Link to="#" className="text-body d-block mb-1">Recent device streaming activity</Link> */}
                    <Link to="/" className="text-body d-block mb-1">
                      Sign out of all devices{" "}
                    </Link>
                    {/* <Link to="#" className="text-body d-block">Download your person information</Link> */}
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserAccountSetting;