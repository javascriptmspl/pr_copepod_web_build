import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { GetContentThunk } from "../../../store/redux/SLICE/auth/Content";
import { useDispatch, useSelector } from "react-redux";

//DATA
import { LiveMusicChannel, LiveNewsChannel, LiveSportsChannel } from "../dummyData/newAndPopularData";



// install Swiper modules
SwiperCore.use([Navigation]);

const Live = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetContentThunk());
  }, [dispatch]);

  const store = useSelector((state) => state);
  console.log(store, "Sub User store");

  const moviesContent = store && store?.contents?.contents;
  console.log(moviesContent, "moviesContent User store");

  return (
    <>
      <div className="main-content pb-5">
        {/* Live on copepod */}
        <section id="iq-live-news">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">Live News</h4>
                  <Link className="iq-view-all" to="/view-all">
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div
                    id="prev-live-news"
                    className="swiper-button swiper-button-prev"
                  >
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div
                    id="next-live-news"
                    className="swiper-button swiper-button-next"
                  >
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
                      prevEl: "#prev-live-news",
                      nextEl: "#next-live-news",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {LiveNewsChannel.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className="block-images position-relative">
                          <span  className="live-btn-glow-div">
                            <i class="fa fa-circle text-danger-glow-div blink-div"></i>{" "}
                            Live
                          </span>
                          <div className="img-box">
                            <img
                              src={item?.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6
                              className="iq-title"
                              style={{ textAlign: "left" }}
                            >
                              <Link to="/live-details">{item?.title}</Link>
                            </h6>
                            <div
                              className="hover-buttons"
                              style={{ marginBottom: "-50px" }}
                            >
                              <Link
                                to="/live-details"
                                role="button"
                                className="btn btn-hover"
                              >
                                <i
                                  className="fa fa-play mr-1"
                                  aria-hidden="true"
                                ></i>
                                Play Now
                              </Link>
                            </div>
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

          {/* Live Music on copepod */}
          <section id="iq-live-sports">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">Live Sports</h4>
                  <Link className="iq-view-all" to="/view-all">
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div
                    id="prev-live-sports"
                    className="swiper-button swiper-button-prev"
                  >
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div
                    id="next-live-sports"
                    className="swiper-button swiper-button-next"
                  >
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
                      prevEl: "#prev-live-sports",
                      nextEl: "#next-live-sports",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {LiveSportsChannel.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className="block-images position-relative">
                          <span to="/live" className="live-btn-glow-div">
                            <i class="fa fa-circle text-danger-glow-div blink-div"></i>{" "}
                            Live
                          </span>
                          <div className="img-box">
                            <img
                              src={item?.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6
                              className="iq-title"
                              style={{ textAlign: "left" }}
                            >
                              <Link to="/live-details">{item?.title}</Link>
                            </h6>
                            <div
                              className="hover-buttons"
                              style={{ marginBottom: "-50px" }}
                            >
                              <Link
                                to="/live-details"
                                role="button"
                                className="btn btn-hover"
                              >
                                <i
                                  className="fa fa-play mr-1"
                                  aria-hidden="true"
                                ></i>
                                Play Now
                              </Link>
                            </div>
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

         {/* Live Music on copepod */}
         <section id="iq-live-music">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">Live Music</h4>
                  <Link className="iq-view-all" to="/view-all">
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div
                    id="prev-live-music"
                    className="swiper-button swiper-button-prev"
                  >
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div
                    id="next-live-music"
                    className="swiper-button swiper-button-next"
                  >
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
                      prevEl: "#prev-live-music",
                      nextEl: "#next-live-music",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {LiveMusicChannel.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className="block-images position-relative">
                          <span to="/live" className="live-btn-glow-div">
                            <i class="fa fa-circle text-danger-glow-div blink-div"></i>{" "}
                            Live
                          </span>
                          <div className="img-box">
                            <img
                              src={item?.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6
                              className="iq-title"
                              style={{ textAlign: "left" }}
                            >
                              <Link to="/live-details">{item?.title}</Link>
                            </h6>
                            <div
                              className="hover-buttons"
                              style={{ marginBottom: "-50px" }}
                            >
                              <Link
                                to="/live-details"
                                role="button"
                                className="btn btn-hover"
                              >
                                <i
                                  className="fa fa-play mr-1"
                                  aria-hidden="true"
                                ></i>
                                Play Now
                              </Link>
                            </div>
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

       
      </div>
    </>
  );
};
export default Live;
