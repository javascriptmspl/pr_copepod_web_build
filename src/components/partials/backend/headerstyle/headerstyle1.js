import React, { useState, useEffect, useContext, useRef } from "react";

import {
  Container,
  Row,
  Col,
  Navbar,
  Dropdown,
  Form,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card";
import MyContext from "../../../../useContext/Context";

import CustomToggle from "../../../../components/dropdowns";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../../../assets/images/logo.png";
import thumb1 from "../../../../assets/images/notify/thumb-1.jpg";
import thumb2 from "../../../../assets/images/notify/thumb-2.jpg";
import thumb3 from "../../../../assets/images/notify/thumb-3.jpg";
import user from "../../../../assets/images/user/user.jpeg";
import notify01 from "../../../../assets/images/trending/notify01.jpg";
import notify02 from "../../../../assets/images/trending/notify02.jpg";
import notify03 from "../../../../assets/images/trending/notify03.jpg";

const HeaderStyle1 = (props) => {
  const store = useSelector((state) => state);
  const subUser = store && store?.user?.subuser;
  const LoginUser = store && store?.user?.user;
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);

  const { edituseData } = useContext(MyContext);
  // const handleLogout = () => {
  //   localStorage.removeItem("usertoken");
  //   localStorage.removeItem("authenticated");
  //   setLogin(false);
  //   window.location.href = "/";
  // };
  const handleCloseDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.click();
    }
  };

  const handleLogout = () => {
    Object.keys(localStorage).forEach((key) => {
      localStorage.removeItem(key);
    });
    localStorage.removeItem("LoginUser");
    setLogin(false);
    window.location.href = "/";
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  useEffect(() => {
    const userName = localStorage.getItem("usertoken");
    localStorage.getItem("authenticated");

    if (userName) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <>
      <header id="main-header">
        <div className="main-header">
          <Container fluid>
            <Row>
              <Col sm="12">
                <Navbar expand="lg" className="p-0">
                  <Navbar.Toggle className="c-toggler">
                    <div className="navbar-toggler-icon">
                      <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                    </div>
                  </Navbar.Toggle>
                  <Navbar.Brand className="navbar-brand" href="/">
                    <img className="img-fluid logo" src={logo} alt="copepod" />
                  </Navbar.Brand>
                  <Dropdown className="mobile-more-menu">
                    {/* <Dropdown.Toggle
                      to="#"
                      as={CustomToggle}
                      variant="more-toggle"
                    >
                      <i className="ri-more-line"></i>
                    </Dropdown.Toggle> */}
                    <Dropdown.Menu className="more-menu">
                      <div className="navbar-right position-relative">
                        <ul className="d-flex align-items-center justify-content-end list-inline m-0">
                          <Dropdown as="li" className="nav-item m-">
                            {/* <Dropdown.Toggle
                              href="#"
                              as={CustomToggle}
                              variant="search-toggle"
                            >
                              <i className="ri-search-line"></i>
                            </Dropdown.Toggle> */}
                            <Link to="/search-page">
                              <i className="ri-search-line"></i>
                            </Link>

                            <Dropdown.Menu className="search-box iq-search-bar d-search p-0 m-0 dropdown-menu-right">
                              <Form action="#" className="searchbox">
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="text search-input font-size-12"
                                    placeholder="type here to search..."
                                  />
                                  <i className="search-link ri-search-line"></i>
                                </div>
                              </Form>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown as="li" className="nav-item m-0">
                            <Dropdown.Toggle
                              href="#"
                              as={CustomToggle}
                              variant="search-toggle position-relative"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                                className="noti-svg"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                              </svg>
                              <span className="bg-danger dots"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="iq-sub-dropdown dropdown-menu dropdown-menu-right">
                              <Card className="iq-card shadow-none m-0">
                                <Card.Body className="iq-card-body">
                                  <Link to="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img
                                        src={thumb1}
                                        className="img-fluid mr-3"
                                        alt="copepod"
                                      />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">Boot Bitty</h6>
                                        <small className="font-size-12">
                                          {" "}
                                          just now
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link to="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img
                                        src={thumb2}
                                        className="img-fluid mr-3"
                                        alt="copepod"
                                      />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">
                                          The Last Breath
                                        </h6>
                                        <small className="font-size-12">
                                          15 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link to="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img
                                        src={thumb3}
                                        className="img-fluid mr-3"
                                        alt="copepod"
                                      />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">The Hero Camp</h6>
                                        <small className="font-size-12">
                                          1 hour ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </Card.Body>
                              </Card>
                            </Dropdown.Menu>
                          </Dropdown>
                        </ul>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Navbar.Collapse className="">
                    <div className="menu-main-menu-container">
                      <Nav as="ul" id="top-menu" className="ml-auto">
                        <li className="menu-item">
                          <Link to="/movie-category" onClick={handleLinkClick}>Movies</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/show-category" onClick={handleLinkClick}>Tv Shows</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/new-popular" onClick={handleLinkClick}>New&Popular</Link>
                        </li>
                        <li className="menu-item " >
                          <Link to="/live" className="text-danger-glow-perent" onClick={handleLinkClick}>
                            Live{" "}
                            <i class="fa fa-circle text-danger-glow blink"></i>
                          </Link>
                        </li>
                      </Nav>
                    </div>
                  </Navbar.Collapse>
                  <div className="navbar-right ">
                    <ul className="d-flex align-items-center list-inline m-0">
                      <Dropdown as="li" className="nav-item nav-icon">
                        <Link to="/search-page">
                          <i className="ri-search-line home-search"></i>
                        </Link>
                      </Dropdown>

                      <Dropdown as="li" className="nav-item menu-hover">
                        <Dropdown.Toggle
                          href="#"
                          as={CustomToggle}
                          variant="search-toggle position-relative"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            className="noti-svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                          </svg>
                          <span className="bg-danger dots"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="iq-sub-dropdown "
                          align="right"
                        >
                          <Card className="shadow-none m-0">
                            <Card.Body>
                              <Link to="/movie-details" className="iq-sub-card">
                                <div className="media align-items-center">
                                  <img
                                    src={notify03}
                                    className="img-fluid mr-3"
                                    alt="copepod"
                                  />
                                  <div className="media-body">
                                    <h6 className="mb-0 ">The Apartment</h6>
                                    <small className="font-size-12">
                                      {" "}
                                      just now
                                    </small>
                                  </div>
                                </div>
                              </Link>
                              <Link to="/movie-details" className="iq-sub-card">
                                <div className="media align-items-center">
                                  <img
                                    src={notify02}
                                    className="img-fluid mr-3"
                                    alt="copepod"
                                  />
                                  <div className="media-body">
                                    <h6 className="mb-0 ">The Fire Strom</h6>
                                    <small className="font-size-12">
                                      15 minutes ago
                                    </small>
                                  </div>
                                </div>
                              </Link>
                              <Link to="/movie-details" className="iq-sub-card">
                                <div className="media align-items-center">
                                  <img
                                    src={notify01}
                                    className="img-fluid mr-3"
                                    alt="copepod"
                                  />
                                  <div className="media-body">
                                    <h6 className="mb-0 ">The Hero Camp</h6>
                                    <small className="font-size-12">
                                      1 hour ago
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </Card.Body>
                          </Card>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown
                        as="li"
                        className="nav-item nav-icon"
                        ref={dropdownRef}
                      >
                        <Dropdown.Toggle
                          href="#"
                          as={CustomToggle}
                          variant="search-toggle"
                        >
                          <div
                            className="iq-user-dropdown search-toggle p-0 d-flex align-items-center active menu-hover"
                            data-toggle="search-toggle"
                          >
                            {login ? (
                              <></>
                            ) : (
                              <Link to="/login" style={{ cursor: "pointer" }}>
                                Login
                              </Link>
                            )}

                            {login && (
                              <Dropdown as="li" className="nav-item nav-icon">
                                <Dropdown.Toggle
                                  href="#"
                                  as={CustomToggle}
                                  variant="search-toggle"
                                >
                                  <div
                                    className="iq-user-dropdown search-toggle p-0 d-flex align-items-center active"
                                    data-toggle="search-toggle"
                                  >
                                    {login ? (
                                    
                                      <img
                                        src={subUser?.image || user}
                                      
                                        className="img-fluid avatar-40 rounded-circle"
                                        style={{ margin: "-20px 0px" }}
                                        alt="user"
                                      />
                                    ) : (
                                      // If user is not logged in, show a login text or button
                                      <Link
                                        to="/login"
                                        style={{
                                          cursor: "pointer",
                                        }}
                                      >
                                        Login
                                      </Link>
                                    )}

                                    {login && (
                                      // If user is logged in, show the dropdown menu with options like Manage Profile, Settings, etc.
                                      <Dropdown>
                                        {/* Your Dropdown content here */}
                                      </Dropdown>
                                    )}
                                  </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                  className="iq-sub-dropdown iq-user-dropdown"
                                  align="right"
                                >
                                  <Card className="shadow-none m-0">
                                    <Card.Body className="p-0 pl-3 pr-3">
                                      <Link
                                        to="/manage-user"
                                        className="iq-sub-card setting-dropdown"
                                        onClick={handleCloseDropdown}
                                      >
                                        <div className="media align-items-center">
                                          <div className="right-icon">
                                            <i className="ri-file-user-line text-primary"></i>
                                          </div>
                                          <div className="media-body ml-3">
                                            <h6 className="my-0 ">
                                              Manage Profile
                                            </h6>
                                          </div>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/settingPage"
                                        className="iq-sub-card setting-dropdown"
                                        onClick={() => {
                                          handleCloseDropdown();
                                          handleLinkClick();
                                        }}
                                        // onClick={handleLinkClick}
                                      >
                                        <div className="media align-items-center">
                                          <div className="right-icon">
                                            <i className="ri-settings-4-line text-primary"></i>
                                          </div>
                                          <div className="media-body ml-3">
                                            <h6 className="my-0 ">Settings</h6>
                                          </div>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/watchlist"
                                        className="iq-sub-card setting-dropdown"
                                        onClick={handleCloseDropdown}
                                      >
                                        <div className="media align-items-center">
                                          <div className="right-icon">
                                            <i className="ri-settings-4-line text-primary"></i>
                                          </div>
                                          <div className="media-body ml-3">
                                            <h6 className="my-0 ">Watchlist</h6>
                                          </div>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/pricing-plan-1"
                                        className="iq-sub-card setting-dropdown"
                                        onClick={handleCloseDropdown}
                                      >
                                        <div className="media align-items-center">
                                          <div className="right-icon">
                                            <i className="ri-settings-4-line text-primary"></i>
                                          </div>
                                          <div className="media-body ml-3">
                                            <h6 className="my-0 ">
                                              Subscribe Now
                                            </h6>
                                          </div>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/help-support"
                                        className="iq-sub-card setting-dropdown"
                                        onClick={handleCloseDropdown}
                                      >
                                        <div className="media align-items-center">
                                          <div className="right-icon">
                                            <i className="ri-settings-4-line text-primary"></i>
                                          </div>
                                          <div className="media-body ml-3">
                                            <h6 className="my-0 ">
                                              Help&Support
                                            </h6>
                                          </div>
                                        </div>
                                      </Link>
                                      <div
                                        onClick={handleLogout}
                                        className="iq-sub-card setting-dropdown"
                                      >
                                        <div className="media align-items-center">
                                          <div className="right-icon">
                                            <i className="ri-logout-circle-line text-primary"></i>
                                          </div>
                                          <div className="media-body ml-3">
                                            <h6 className="my-0 ">Logout</h6>
                                          </div>
                                        </div>
                                      </div>
                                    </Card.Body>
                                  </Card>
                                </Dropdown.Menu>
                              </Dropdown>
                            )}
                          </div>
                        </Dropdown.Toggle>
                      </Dropdown>
                    </ul>
                  </div>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
};

export default HeaderStyle1;
