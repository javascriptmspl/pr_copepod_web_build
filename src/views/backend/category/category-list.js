import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import banner1 from "../../../assets/images/shows-banner/show-1.jpg";
import banner2 from "../../../assets/images/shows-banner/show-2.jpg";
import banner3 from "../../../assets/images/shows-banner/show-3.jpg";

import {
  popularshows,
  tvshows,
  BestInternationalShows,
  Recommend,
  contentDetail,
} from "../dummyData/categoryDummyData";
import { toast } from "react-toastify";
import { useState } from "react";

SwiperCore.use([Navigation]);

const CategoryList = () => {
  
  const handleAddClick = (Data) => {
    toast.success(Data, {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const copyURL = () => {
    const url = window.location.href;
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = url;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    toast.success("URL copied to clipboard: " + url)
   
  };

  const addToWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };
  
  return (
    <>
      <section id="tvshow" className="iq-main-slider p-0">
        <div id="prev" className="swiper-button swiper-button-prev">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div id="next" className="swiper-button swiper-button-next">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <Swiper
          slidesPerView={2}
          navigation={{
            prevEl: "#prev",
            nextEl: "#next",
          }}
          loop={true}
          centeredSlides={true}
          id="tvshows-slider"
          className="iq-rtl-direction"
        >
          <SwiperSlide>
            <Link to="/show-details">
              <div className="shows-img">
                <img src={banner1} className="w-100" alt="" />
                <div className="shows-content">
                  <h4 className="text-white mb-1">The Hero Camp</h4>
                  <div className="movie-time d-flex align-items-center">
                    <div className="badge badge-secondary p-1 mr-2">18+</div>
                    <span className="text-white">3 Seasons</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/show-details">
              <div className="shows-img">
                <img src={banner2} className="w-100" alt="" />
                <div className="shows-content">
                  <h4 className="text-white mb-1">The Appartment</h4>
                  <div className="movie-time d-flex align-items-center">
                    <div className="badge badge-secondary p-1 mr-2">17+</div>
                    <span className="text-white">1 Season</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/show-details">
              <div className="shows-img">
                <img src={banner3} className="w-100" alt="" />
                <div className="shows-content">
                  <h4 className="text-white mb-1">The Marshal King</h4>
                  <div className="movie-time d-flex align-items-center">
                    <div className="badge badge-secondary p-1 mr-2">11+</div>
                    <span className="text-white">3 Seasons</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
        <Dropdown className="genres-box">
          <Dropdown.Toggle as={Button} variant="secondary" className="">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu className="three-column">
            <Dropdown.Item href="#">Hindi</Dropdown.Item>
            <Dropdown.Item href="#">Tamil</Dropdown.Item>
            <Dropdown.Item href="#">Punjabi</Dropdown.Item>
            <Dropdown.Item href="#">English</Dropdown.Item>
            <Dropdown.Item href="#">Comedies</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Romance</Dropdown.Item>
            <Dropdown.Item href="#">Dramas</Dropdown.Item>
            <Dropdown.Item href="#">Bollywood</Dropdown.Item>
            <Dropdown.Item href="#">Hollywood</Dropdown.Item>
            <Dropdown.Item href="#">Children & Family</Dropdown.Item>
            <Dropdown.Item href="#">Award-Winning</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
      <div className="main-content">
        <section id="iq-favorites trending">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Trending Shows Banner</h4>
                  <Link className="iq-view-all" to="/view-all"  onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div id="prev1" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next1" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      prevEl: "#prev1",
                      nextEl: "#next1",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {popularshows.map((item, index) => (
                      <SwiperSlide key={index} className="slide-item">
                        <div className="block-images1 block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item.imgSrc}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to='/show-details'>{item.title}</Link>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item.ageRating}
                              </div>
                              <span className="text-white">{item.seasons}</span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to='/show-details'
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
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                            href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                    onClick={copyURL}
                                      href="#"
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">{item.likes}</span>
                              </li>
                              <li>
                                <span   onClick={()=>handleAddClick('Added Successfully !')}>
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
        <section id="iq-favorites tv-popular">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">TV Popular Shows</h4>
                  <Link className="iq-view-all" to="/view-all"  onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div id="prev2" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next2" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      prevEl: "#prev2",
                      nextEl: "#next2",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {tvshows.map((item, index) => (
                      <SwiperSlide key={index} className="slide-item">
                        <div className="block-images1 block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item.imgSrc}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                            <Link to='/show-details'>{item.title}</Link>

                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item.ageRating}
                              </div>
                              <span className="text-white">{item.seasons}</span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to='/show-details'
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
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                            href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                     onClick={copyURL}
                                      
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">{item.likes}</span>
                              </li>
                              <li>
                                <span   onClick={()=>handleAddClick('Added Successfully !')}>
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
        <section id="iq-favorites international-shows">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Best of International Shows</h4>
                  <Link className="iq-view-all" to="/view-all"  onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div id="prev3" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next3" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      prevEl: "#prev3",
                      nextEl: "#next3",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {BestInternationalShows.map((item, index) => (
                      <SwiperSlide key={index} className="slide-item">
                        <div className="block-images1 block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item.imgSrc}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to='/show-details'>{item.title}</Link>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item.ageRating}
                              </div>
                              <span className="text-white">{item.seasons}</span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to='/show-details'
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
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                      href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                    onClick={copyURL}
                                      
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">{item.likes}</span>
                              </li>
                              <li>
                                <span   onClick={()=>handleAddClick('Added Successfully !')}>
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
        <section id="iq-upcoming-movie">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Shows We Recommend</h4>
                  <Link className="iq-view-all" to="/view-all"  onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="upcoming-contens">
                  <div id="prev4" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next4" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      nextEl: "#next4",
                      prevEl: "#prev4",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {Recommend.map((item, index) => (
                      <SwiperSlide key={index} className="slide-item">
                        <div className="block-images1 block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item.imgSrc}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to='/show-details'>{item.title}</Link>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item.ageRating}
                              </div>
                              <span className="text-white">{item.seasons}</span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to='/show-details'
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
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                            href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                    onClick={copyURL}
                                      
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">{item.likes}</span>
                              </li>
                              <li >
                                <span   onClick={()=>handleAddClick('Added Successfully !')}>
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
              </div>
            </div>
          </div>
        </section>
        <section id="iq-suggestede">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Content Detail Screen</h4>
                  <Link className="iq-view-all" to="/view-all"  onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="suggestede-contens">
                  <div id="prev5" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next5" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      prevEl: "#prev5",
                      nextEl: "#next5",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {contentDetail.map((item, index) => (
                      <SwiperSlide key={index} className="slide-item">
                        <div className="block-images1 block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item.imgSrc}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to='/show-details'>{item.title}</Link>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                {item.ageRating}
                              </div>
                              <span className="text-white">{item.seasons}</span>
                            </div>
                            <div className="hover-buttons">
                              <Link
                                to='/show-details'
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
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="ri-share-fill"></i>
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a
                                      href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="share-ico"
                                      tabIndex="0"
                                    >
                                      <i className="ri-twitter-fill"></i>
                                    </a>
                                    <a
                                    onClick={copyURL}
                                      
                                      className="share-ico iq-copy-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-links-fill"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">{item.likes}</span>
                              </li>
                              <li  >
                                <span  onClick={()=>handleAddClick('Added Successfully !')}>
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CategoryList;
