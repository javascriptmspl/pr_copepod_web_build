import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
  import {
  LatestMovies,
  upcomingData,
} from "./../dummyData/homeDummyData";

SwiperCore.use([Navigation]);

const Watchlist = () => {
  const location = useLocation();
  const [activetab, setActiveTab] = useState("watchlist")
  const [content, setContent] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const storedWatchList = localStorage.getItem('watchList');
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }
  }, []);
  
  const handleChange = (tab) => {
    setActiveTab(tab);
    // const queryParams = new URLSearchParams(window.location.search);
    // queryParams.set("tab", tab);
    // window.history.replaceState({}, "", `${window.location.pathname}?${queryParams}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab");
    if (tab === "favourite" || tab === "watchlist") {
      setActiveTab(tab);
    }
  }, [location.search]);

  useEffect(() => {
    if (activetab === "watchlist") {
      // Set LatestMovies for watchlist
      setContent(LatestMovies);
    } else if (activetab === "favourite") {
      // Set upcomingData for favorites
      setContent(upcomingData);
    }
  }, [activetab]);

  return (
    <>
      <div className="main-content ">
        <section id="iq-favorites">
          <Container fluid>
            <Row>
              <div
                className="d-flex align-items-center "
                style={{ marginTop: "30px" }}
              >
                <button
                  className={`btn ${
                    activetab === "watchlist" ? "btn-active" : "btn-inactive"
                  } ${activetab === "watchlist" ? "button-active" : ""}`}
                  onClick={() => handleChange("watchlist")}
                  style={{
                    background: "transparent",
                    color: "white",
                    outline: "none",
                    marginBottom: "30px",
                    fontSize: "25px",
                  }}
                >
                  Watchlist
                </button>
                <button
                  className={`btn ${
                    activetab === "favourite" ? "btn-active" : "btn-inactive"
                  } ${activetab === "favourite" ? "button-active" : ""}`}
                  onClick={() => handleChange("favourite")}
                  style={{
                    background: "transparent",
                    color: "white",
                    marginLeft: "10px",
                    marginBottom: "30px",
                    outline: "none",
                    fontSize: "25px",
                  }}
                >
                  Favourites
                </button>
              </div>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">{activetab === "watchlist" ? "Watchlist" : "Favorites"}</h4>
                  <Link className="iq-view-all" to="/view-all">
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div id="prev" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    navigation={{
                      prevEl: "#prev",
                      nextEl: "#next",
                    }}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {content.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className=" block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item?.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to="/show-details">{item?.title}</Link>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item?.ageRating}
                              </div>
                              <span className="text-white">
                                {item?.duration}
                              </span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to="/show-details"
                                role="button"
                                className="btn btn-hover iq-button"
                              >
                                <i
                                  className="fa fa-play mr-1"
                                  aria-hidden="true"
                                ></i>
                                Play Now
                              </Link>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                      herf="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      herf="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                      herf="#"
                                      data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="ri-add-line"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section id="iq-upcoming-movie">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="main-title">Favorites</h4>
                  <Link className="iq-view-all" to="/view-all">
                    View All
                  </Link>
                </div>
                <div id="upcoming-contens">
                  <div id="prev1" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next1" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    navigation={{
                      prevEl: "#prev1",
                      nextEl: "#next1",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {upcomingData.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className=" block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item?.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to="/show-details">{item?.title}</Link>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item?.ageRating}
                              </div>
                              <span className="text-white">
                                {item?.duration}
                              </span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to="/show-details"
                                role="button"
                                className="btn btn-hover iq-button"
                              >
                                <i
                                  className="fa fa-play mr-1"
                                  aria-hidden="true"
                                ></i>
                                Play Now
                              </Link>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                      herf="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      herf="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                      herf="#"
                                      data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="ri-add-line"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* <section id="iq-suggestede" className="s-margin">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Recommended</h4>
                  <Link className="iq-view-all" to="/view-all">
                    View All
                  </Link>
                </div>
                <div id="suggestede-contens">
                  <div id="prev2" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="prev2" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      prevEl: "#prev2",
                      nextEl: "#next2",
                    }}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    loop={true}
                    as="ul"
                    className="list-inline favorites-slider row p-0 m-0 iq-rtl-direction"
                  >
                    {Suggested.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className=" block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item?.image}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to="/show-details">{item?.title}</Link>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item?.ageRating}
                              </div>
                              <span className="text-white">
                                {item?.duration}
                              </span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to="/show-details"
                                role="button"
                                className="btn btn-hover iq-button"
                              >
                                <i
                                  className="fa fa-play mr-1"
                                  aria-hidden="true"
                                ></i>
                                Play Now
                              </Link>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                      herf="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      herf="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                      herf="#"
                                      data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="ri-add-line"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
      </div>
    </>
  );
};
export default Watchlist;
