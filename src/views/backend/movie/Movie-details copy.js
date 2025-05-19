import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import banner from "../../../assets/images/movie-banner/1.jpg";

import star1 from "../../../assets/images/star/star1.jpg";
import star2 from "../../../assets/images/star/star2.jpg";


// upcoming img
import upcoming1 from "../../../assets/images/upcoming/01.jpg";
import upcoming2 from "../../../assets/images/upcoming/02.jpg";
import upcoming3 from "../../../assets/images/upcoming/03.jpg";
import upcoming4 from "../../../assets/images/upcoming/04.jpg";
import upcoming5 from "../../../assets/images/upcoming/05.jpg";
import Video from "../pages/video";

const MovieDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  const upcomingData = [
    {
      title: "The Last Breath",
      imageUrl: upcoming1,  
      ageRating: "5+",
      duration: "2h 30m",
    },
    {
      title: "Shadow",
      imageUrl: upcoming2,   
      ageRating: "22+",
      duration: "2h 15m",
    },
    {
      title: "Another Danger",
      imageUrl: upcoming3,  
      ageRating: "25+",
      duration: "3h",
    },
    {
      title: "1980",
      imageUrl: upcoming4,  
      ageRating: "11+",
      duration: "2h 45m",
    },
    {
      title: "Vugotronic",
      imageUrl: upcoming5, 
      ageRating: "9+",
      duration: "2h 30m",
    },
  ];
  const related = [
    {
      title: "The Last Breath",
      imageUrl: upcoming1,  
      ageRating: "5+",
      duration: "2h 30m",
    },
    {
      title: "Shadow",
      imageUrl: upcoming2,   
      ageRating: "22+",
      duration: "2h 15m",
    },
    {
      title: "Another Danger",
      imageUrl: upcoming3,  
      ageRating: "25+",
      duration: "3h",
    },
    {
      title: "1980",
      imageUrl: upcoming4,  
      ageRating: "11+",
      duration: "2h 45m",
    },
    {
      title: "Vugotronic",
      imageUrl: upcoming5, 
      ageRating: "9+",
      duration: "2h 30m",
    },
  ];
  return (
    <div>
        <div>
            <Video />
        </div>
      <div className="main-content movi ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="trending-info mt-4 pt-0 pb-4">
                <div className="row">
                  <div className="col-md-9 col-12  mb-auto">
                    <div className="d-md-flex">
                      <h3
                        className="trending-text big-title text-uppercase mt-0 fadeInLeft animated"
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.6"
                        style={{
                          opacity: "1",
                          animationDelay: "0.6s",
                        }}
                      >
                        Zombie Island
                      </h3>
                      <div className="slider-ratting d-flex align-items-center ml-md-3 ml-0">
                        <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i
                              className="fa fa-star-half"
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ul>
                        <span className="text-white ml-2">3.5 (lmdb)</span>
                      </div>
                    </div>
                    <ul className="p-0 mt-2 list-inline d-flex flex-wrap movie-content">
                      <li className="trending-list">
                        <a
                          className="text-primary title"
                          href="tags/thriller.html"
                        >
                          Thriller
                        </a>
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
                      <span className="badge badge-secondary font-size-16">
                        G
                      </span>
                      <span className="ml-3 font-Weight-500 genres-info">
                        2hr : 42mins
                      </span>
                      <span className="trending-year trending-year-list font-Weight-500 genres-info">
                        Nov 2017
                      </span>
                      <span className="trending-year trending-year-list single-view-count font-Weight-500 genres-info">
                        <i className="fa fa-eye"></i>1449 views
                      </span>
                    </div>
                    <ul className="list-inline p-0 m-0 share-icons music-play-lists mb-1">
                      <li className="share">
                        <span>
                          <i className="ri-share-fill"></i>
                        </span>
                        <div className="share-box">
                          <div className="d-flex align-items-center">
                            <a href="#" className="share-ico">
                              <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="#" className="share-ico">
                              <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="#" className="share-ico">
                              <i className="ri-links-fill"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span>
                          <i className="ri-heart-fill"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ri-add-line"></i>
                        </span>
                      </li>
                    </ul>
                    <ul className="p-0 list-inline d-flex flex-wrap align-items-center mb-3 mt-4 iq_tag-list">
                      <li className="text-primary text-lable mr-3">
                        <i className="fa fa-tags" aria-hidden="true"></i>Tags:
                      </li>
                      <li className="trending-list mr-3">
                        <a className="title" href="tags/brother.html">
                          Adventure,
                        </a>
                      </li>
                      <li className="trending-list mr-3">
                        <a className="title" href="tags/comedy.html">
                          Comedy,
                        </a>
                      </li>
                      <li className="trending-list mr-3">
                        <a className="title" href="tags/thriller.html">
                          Thriller
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="trailor-video col-md-3 col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right">
                    <a
                      href="https://www.youtube.com/watch?v=QCGq1epI9pQ"
                      className="video-open playbtn block-images position-relative playbtn_thumbnail"
                    >
                      <img
                        width="1920"
                        height="1080"
                        src={banner}
                        className="attachment-medium-large size-medium-large wp-post-image"
                        alt=""
                        loading="lazy"
                        sizes="(min-width: 960px) 75vw, 100vw"
                      />
                      <span className="content btn btn-transparant iq-button">
                        <i className="fa fa-play mr-2"></i>
                        <span>Trailer Link</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="streamit-content-details trending-info g-border iq-rtl-direction">
                <ul
                  className="trending-pills-header d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "description" ? "active show" : ""
                      }`}
                      onClick={() => handleTabClick("description")}
                      data-toggle="pill"
                      href="#dectripton-1"
                      role="tab"
                      aria-selected={activeTab === "description"}
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "review" ? "active show" : ""
                      }`}
                      onClick={() => handleTabClick("review")}
                      data-toggle="pill"
                      href="#reviw-1"
                      role="tab"
                      aria-selected={activeTab === "review"}
                    >
                      Rate & Review
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "source" ? "active show" : ""
                      }`}
                      onClick={() => handleTabClick("source")}
                      data-toggle="pill"
                      href="#sourse-1"
                      role="tab"
                      aria-selected={activeTab === "source"}
                    >
                      Sources
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    id="dectripton-1"
                    className={`tab-pane fade ${
                      activeTab === "description" ? "active show" : ""
                    }`}
                    role="tabpanel"
                  >
                    <div className="description-content">
                      <p>
                        The most brutal emperor in the history of world.He was
                        the founder of the most contiguous empire of the world
                        i.e. the Mongol empire.He made an army by himself by
                        uniting some nomadic tribes and trained them.
                      </p>
                    </div>
                  </div>
                  <div
                    id="reviw-1"
                    className={`tab-pane fade ${
                      activeTab === "review" ? "active show" : ""
                    }`}
                    role="tabpanel"
                  >
                    <div id="reviews" className="streamit-reviews">
                      <div
                        id="comments"
                        className="comments-area validate-form"
                      >
                        <p className="masvideos-noreviews mt-3">
                          There are no reviews yet.
                        </p>
                      </div>
                      <div id="review_form_wrapper">
                        <div id="review_form">
                          <div id="respond" className="comment-respond">
                            <h3
                              id="reply-title"
                              className="comment-reply-title mt-0"
                            >
                              Be the first to review “Pirates of Sea”
                            </h3>
                            <form className="comment-form">
                              <p className="comment-notes">
                                <span id="email-notes">
                                  Your email address will not be published.
                                </span>
                                <span
                                  className="required-field-message"
                                  aria-hidden="true"
                                >
                                  Required fields are marked
                                  <span className="required" aria-hidden="true">
                                    *
                                  </span>
                                </span>
                              </p>
                              <div className="comment-form-rating">
                                <label for="rating">Your rating</label>
                                <div className="star ml-3">
                                  <span>
                                    <i className="ri-star-line"></i>
                                  </span>
                                  <span>
                                    <i className="ri-star-line"></i>
                                  </span>
                                  <span>
                                    <i className="ri-star-line"></i>
                                  </span>
                                  <span>
                                    <i className="ri-star-line"></i>
                                  </span>
                                  <span>
                                    <i className="ri-star-line"></i>
                                  </span>
                                </div>
                              </div>
                              <p className="comment-form-comment p-0 mb-3 mt-0">
                                <label for="comment">
                                  Your review&nbsp;
                                  <span className="required">*</span>
                                </label>
                                <textarea
                                  id="comment"
                                  name="comment"
                                  cols="45"
                                  rows="8"
                                  required=""
                                ></textarea>
                              </p>
                              <p className="comment-form-author mt-3 pr-lg-3 pr-0">
                                <label for="author">
                                  Name&nbsp;<span className="required">*</span>
                                </label>
                                <input
                                  id="author"
                                  name="author"
                                  type="text"
                                  value=""
                                  size="30"
                                  required=""
                                />
                              </p>
                              <p className="comment-form-email mt-3 pl-lg-3 pl-0">
                                <label for="email">
                                  Email&nbsp;<span className="required">*</span>
                                </label>
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value=""
                                  size="30"
                                  required=""
                                />
                              </p>
                              <p className="comment-form-cookies-consent">
                                <input
                                  id="coment-check"
                                  name="coment-check"
                                  type="checkbox"
                                  value="yes"
                                />
                                <label for="coment-check">
                                  Save my name, email, and website in this
                                  browser for the next time I comment.
                                </label>
                              </p>
                              <p className="form-submit">
                                <button
                                  name="submit"
                                  type="submit"
                                  id="submit"
                                  className="btn btn-hover iq-button"
                                  value="Submit"
                                >
                                  <span>
                                    <i className="ri-play-fill"></i>Submit
                                  </span>
                                </button>
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div
                    id="sourse-1"
                    className={`tab-pane fade ${
                      activeTab === "source" ? "active show" : ""
                    }`}
                    role="tabpanel"
                  >
                    <div className="source-list-content">
                      <table className="movie-sources sources-table">
                        <thead className="trending-pills">
                          <tr>
                            <th className="genres-table-heading">Links</th>
                            <th className="genres-table-heading">Quality</th>
                            <th className="genres-table-heading">Language</th>
                            <th className="genres-table-heading">Player</th>
                            <th className="genres-table-heading">Date Added</th>
                          </tr>
                        </thead>
                        <tbody className="trending-pills">
                          <tr>
                            <td>
                              <a
                                href="movie-details.html"
                                className="play-source movie-play-source btn-hover iq-button"
                              >
                                <i className="ri-play-fill"></i>
                                Play Now
                              </a>
                            </td>
                            <td>1080p</td>
                            <td>english</td>
                            <td>MediaMonkey</td>
                            <td>2021-12-04</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="movie-details.html"
                                className="play-source movie-play-source btn-hover iq-button"
                              >
                                <i className="ri-play-fill"></i>
                                Play Now
                              </a>
                            </td>
                            <td>800p</td>
                            <td>english</td>
                            <td>MusicBee</td>
                            <td>2021-12-02</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="movie-details.html"
                                className="play-source movie-play-source btn-hover iq-button"
                              >
                                <i className="ri-play-fill"></i>
                                Play Now
                              </a>
                            </td>
                            <td>720p</td>
                            <td>english</td>
                            <td>PotPlayer</td>
                            <td>2021-11-28</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="iq-favorites"
          className="s-margin detail-cast-list iq-rtl-direction starring"
        >
          <div className="container-fluid">
            <div className="row m-0">
              <div className="col-sm-12 overflow-hidden p-0">
                <div className="iq-main-header d-flex align-items-center justify-content-between iq-ltr-direction">
                  <h4 className="main-title">Starring</h4>
                </div>
              </div>
            </div>
            <ul className="inner-slider list-inline row p-0  iq-ltr-direction">
              <li className=" slide-item iq-ltr-direction col-xl-3 col-lg-4 col-md-4 col-6">
                <div className="cast-images position-relative row mx-0">
                  <div className="col-sm-4 col-12 img-box p-0">
                    <img
                      src={star1}
                      className="person__poster--image img-fluid"
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-sm-8 col-12 block-description starring-desc ">
                    <h6 className="iq-title">
                      <Link to="#" tabindex="0">
                        Karen Gilchrist{" "}
                      </Link>
                    </h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <span className="text-white">As James</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" slide-item iq-ltr-direction col-xl-3 col-lg-4 col-md-4 col-6">
                <div className="cast-images position-relative row mx-0">
                  <div className="col-sm-4 col-12 img-box p-0">
                    <img
                      src={star2}
                      className="person__poster--image"
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-sm-8 col-12 block-description starring-desc ">
                    <h6 className="iq-title">
                      <Link to="#" tabindex="0">
                        James Chinlund{" "}
                      </Link>
                    </h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <span className="text-white">As James</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section id="iq-upcoming-movie" className='my-5'>
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="main-title">Recommended Movies</h4>
                  <Link className="iq-view-all" to="/movie-category">
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
            <span><i className="ri-share-fill"></i></span>
            <div className="share-box">
               <div className="d-flex align-items-center">
                  <Link to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                  <Link to="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                  <Link to="#" data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
               </div>
            </div>
         </li>
                              <li>
                                <span>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li><span><i className="ri-add-line"></i></span></li>
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
      <section id="iq-rtl-direction" className='my-5'>
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="main-title">Related Movies</h4>
                  <Link className="iq-view-all" to="/movie-category">
                    View All
                  </Link>
                </div>
                <div id="upcoming-contens">
                  <div id="prev2" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next2" className="swiper-button swiper-button-next">
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
                      prevEl: "#prev2",
                      nextEl: "#next2",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {related.map((item, index) => (
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
            <span><i className="ri-share-fill"></i></span>
            <div className="share-box">
               <div className="d-flex align-items-center">
                  <Link to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                  <Link to="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                  <Link to="#" data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
               </div>
            </div>
         </li>
                              <li>
                                <span>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li><span><i className="ri-add-line"></i></span></li>
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
      <section id="iq-rtl-direction" className='my-5'>
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="main-title">Upcoming Movies</h4>
                  <Link className="iq-view-all" to="/movie-category">
                    View All
                  </Link>
                </div>
                <div id="upcoming-contens">
                  <div id="prev3" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next3" className="swiper-button swiper-button-next">
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
                      prevEl: "#prev3",
                      nextEl: "#next3",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {related.map((item, index) => (
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
            <span><i className="ri-share-fill"></i></span>
            <div className="share-box">
               <div className="d-flex align-items-center">
                  <Link to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                  <Link to="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                  <Link to="#" data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
               </div>
            </div>
         </li>
                              <li>
                                <span>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li><span><i className="ri-add-line"></i></span></li>
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
      {/* <section id="iq-related-movie">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="main-title">Upcoming Movies</h4>
                  <Link className="iq-view-all" to="/movie-category">
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
                    {related.map((item, index) => (
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
            <span><i className="ri-share-fill"></i></span>
            <div className="share-box">
               <div className="d-flex align-items-center">
                  <Link to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                  <Link to="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                  <Link to="#" data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
               </div>
            </div>
         </li>
                              <li>
                                <span>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li><span><i className="ri-add-line"></i></span></li>
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
     
      <div className="rtl-box">
        <button type="button" className="btn btn-light rtl-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="false"
              data-value="ltr"
            >
              <a href="#">LTR</a>
            </li>
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="true"
              data-value="rtl"
            >
              <a href="#">RTL</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
