import React, { useState } from "react";
import videojs from 'video.js';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {  Row, Col, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
//img

import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import 'videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels';
import 'videojs-seek-buttons';

import Video from "../pages/video";
import trailer from "../../../assets/images/movie-banner/1.jpg";
import start1 from "../../../assets/images/star/star1.jpg";
import start2 from "../../../assets/images/star/star2.jpg";
import upcoming1 from "../../../assets/images/upcoming/01.jpg";
import upcoming2 from "../../../assets/images/upcoming/02.jpg";
import upcoming3 from "../../../assets/images/upcoming/03.jpg";
import upcoming4 from "../../../assets/images/upcoming/04.jpg";
import upcoming5 from "../../../assets/images/upcoming/05.jpg";
import poster from "../../../assets/images/jpg2png/05.png";

import VideoJS from '../pages/video'
import video from '../../../assets/video/Minions.mp4'
import videoplayer from "video.js";
import { toast } from "react-toastify";

const ShowList = () => {
  const [activeTab, setActiveTab] = useState("episodes");
  const playerRef = React.useRef(null);
 


  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    poster : '../../../assets/images/jpg2png/05.png',
    fluid:  true,
    sources: [{
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      type: 'video/mp4'
    }],
    controlBar: {
      skipButtons: {
        forward: 10,
          backward: 10
      }
    },
  };
  
  
  

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const handleTabClick = (tabId) => {
  //   setActiveTab(tabId);
  // };

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

    toast.success("URL copied to clipboard: " + url);
  };
  return (
    <>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

      <div class="main-content">
        <div class="show-movie">
          <div class="container-fluid">
            {/* <div class="banner-wrapper overlay-wrapper iq-main-slider ">
                  <div class="banner-caption">
                     <div class="movie-detail">
                        <div class="row">
                           <div class="col-lg-12">
                              <div class="trending-info p-0">
                                 <h1 class="trending-text big-title text-uppercase mt-0">Zombie World</h1>
                                 <div class="slider-ratting d-flex align-items-center" data-animation-in="fadeInLeft">
                                    <ul
                                       class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                       <li>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </li>
                                       <li>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </li>
                                       <li>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </li>
                                       <li>
                                          <i class="fa fa-star-half" aria-hidden="true"></i>
                                       </li>
                                    </ul>
                                    <span class="text-white ml-3">4.5 (imdb)</span>
                                 </div>
                                 <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-content">
                                    <li class="trending-list"><a class="text-primary title" to='#'>Action</a></li>
                                    <li class="trending-list"><a class="text-primary title" to='#'>Adventure</a></li>
                                    <li class="trending-list"><a class="text-primary title" to='#'>Drama</a></li>
                              </ul>
                                 <div class="d-flex flex-wrap align-items-center text-white text-detail sesson-date">
                                    <span class="">
                                       2 Seasons </span>
                                    <span class="trending-year">Feb 2019</span>
                                 </div>
                                 <div class="trending-dec">
                                    <p class="m-0">The travels of a lone bounty hunter in the outer reaches of the galaxy,
                                       far from the
                                       authority of the New Republic.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="position-relative">
                        <a href="show-detail.html"
                           class="d-flex align-items-center">
                           <div class="play-button">
                              <i class="ri-play-fill"></i>
                           </div>
                           <h4 class="w-name text-white font-weight-700">Watch latest Episode</h4>
                        </a>
                     </div>
                     <div class="row">
                        <div class="col-12 mt-auto mb-auto">
                           <ul class="list-inline p-0 m-0 share-icons music-play-lists">
                              <li class="share mb-0">
                                 <span><i class="ri-share-fill"></i></span>
                                 <div class="share-box">
                                    <div class="d-flex align-items-center">
                                       <a href="#" class="share-ico"><i class="ri-facebook-fill"></i></a>
                                       <a href="#" class="share-ico"><i class="ri-twitter-fill"></i></a>
                                       <a href="#" class="share-ico"><i class="ri-links-fill"></i></a>
                                    </div>
                                 </div>
                              </li>
                              <li class="mb-0">
                                 <span><i class="ri-heart-fill"></i></span>
                              </li>
                              <li class="mb-0">
                                 <span><i class="ri-add-line"></i></span>
                              </li>
                           </ul>
                           <ul
                              class="p-0 list-inline d-flex flex-wrap align-items-center movie-content movie-space-action flex-wrap iq_tag-list">
                              <li class="text-primary text-lable"><i class="fa fa-tags font-Weight-900"
                                    aria-hidden="true"></i>TAGS:</li>
                              <li> <a class="tag-list" href="tags/brother.html">Brother,</a>
                              </li>
                              <li><a class="tag-list" href="tags/brother-relationship.html">Brother
                                    Relationship,</a></li>
                              <li> <a class="tag-list" href="tags/king.html">King,</a>
                              </li>
                              <li> <a class="tag-list" href="tags/kings.html">kings</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="trailor-video  text-sm-right p-3  col-md-3 col-12">
                     <a 
                        class="video-open playbtn block-images position-relative playbtn_thumbnail ">
                        <img width="1920" height="1080" src={trailer}
                           class="attachment-medium-large size-medium-large wp-post-image" alt=""  loading="lazy" /> <span class="content btn btn-transparant iq-button">
                           <i class=" mr-2"></i>
                           <span>Trailer Link</span>
                        </span>
                     </a>
                  </div>
               </div> */}
            <section className="show-movie-section">
              <div className="iq-custom-select d-inline-block sea-epi">
                <select name="cars" className="form-control season-select">
                  <option value="season1">Season 1</option>
                </select>
              </div>
              <div className="trending-custom-tab">
                <div className="tab-title-info position-relative">
                  {/* <ul className="trending-pills nav nav-pills text-center iq-ltr-direction" role="tablist">
                           <li className="nav-item">
                              <Link className="nav-link active show m-0 " data-toggle="pill" href="#episodes" role="tab"
                                 aria-selected="true" onClick={() => handleTabClick('episodes')}>Episodes</Link>
                                 
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link  m-0" data-toggle="pill" href="#feature-clips" role="tab"
                                 aria-selected="false" onClick={() => handleTabClick('feature-clips')}>FEATURED CLIPS</Link>
                                
                           </li>
                        </ul> */}

                  <ul
                    className="trending-pills nav nav-pills text-center iq-ltr-direction"
                    role="tablist"
                  >
                    <li
                      className={`nav-item ${
                        activeTab === "episodes" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link "
                        to="#episodes"
                        role="tab"
                        aria-selected={
                          activeTab === "episodes" ? "true" : "false"
                        }
                        onClick={() => handleTabClick("episodes")}
                      >
                        Episodes
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        activeTab === "feature-clips" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="#feature-clips"
                        role="tab"
                        aria-selected={
                          activeTab === "feature-clips" ? "true" : "false"
                        }
                        onClick={() => handleTabClick("feature-clips")}
                      >
                        FEATURED CLIPS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  {/* <div id="episodes" className=" tab-pane animated fadeInUp active show"> */}
                  <div
                    id="episodes"
                    className={`tab-pane animated fadeInUp ${
                      activeTab === "episodes" ? "active show" : ""
                    }`}
                  >
                    <div class="row episodes list-inline p-0 mb-0 iq-rtl-direction ">
                      <div class="e-item col-lg-3 col-sm-12 col-md-6">
                        <div class="block-image position-relative">
                          <a href="show-details.html">
                            <img
                              src={trailer}
                              class="img-fluid img-zoom"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div class="episode-number">S01E01</div>
                          <div class="episode-play-info">
                            <div class="episode-play">
                              <a href="show-detail.html">
                                <i class="ri-play-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="epi-desc p-3">
                          <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="text-white rel-date">
                              October 1, 2020
                            </span>
                            <span class="text-primary run-time">45min</span>
                          </div>
                          <a href="show-detail.html">
                            <h5 class="epi-name text-white mb-0">
                              The Reckless 1
                            </h5>
                          </a>
                        </div>
                      </div>
                      <div class="e-item col-lg-3 col-sm-12 col-md-6">
                        <div class="block-image position-relative">
                          <a href="show-details.html">
                            <img
                              src={trailer}
                              class="img-fluid img-zoom"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div class="episode-number">S01E02</div>
                          <div class="episode-play-info">
                            <div class="episode-play">
                              <a href="show-details.html" tabindex="0">
                                <i class="ri-play-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="epi-desc p-3">
                          <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="text-white rel-date">
                              October 8, 2020
                            </span>
                            <span class="text-primary run-time">35min</span>
                          </div>
                          <a href="show-detail.html">
                            <h5 class="epi-name text-white mb-0">
                              The Reckless 2
                            </h5>
                          </a>
                        </div>
                      </div>
                      <div class="e-item col-lg-3 col-sm-12 col-md-6">
                        <div class="block-image position-relative">
                          <a href="show-details.html">
                            <img
                              src={trailer}
                              class="img-fluid img-zoom"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div class="episode-number">S01E03</div>
                          <div class="episode-play-info">
                            <div class="episode-play">
                              <a href="show-details.html" tabindex="0">
                                <i class="ri-play-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="epi-desc p-3">
                          <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="text-white rel-date">
                              October 15, 2020
                            </span>
                            <span class="text-primary run-time">36min</span>
                          </div>
                          <a href="show-detail.html">
                            <h5 class="epi-name text-white mb-0">
                              The Reckless 3
                            </h5>
                          </a>
                        </div>
                      </div>
                      <div class="e-item col-lg-3 col-sm-12 col-md-6">
                        <div class="block-image position-relative">
                          <a href="show-details.html">
                            <img
                              src={trailer}
                              class="img-fluid img-zoom"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div class="episode-number">S01E04</div>
                          <div class="episode-play-info">
                            <div class="episode-play">
                              <a href="show-details.html" tabindex="0">
                                <i class="ri-play-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="epi-desc p-3">
                          <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="text-white rel-date">
                              October 22, 2020
                            </span>
                            <span class="text-primary run-time">41min</span>
                          </div>
                          <a href="show-detail.html">
                            <h5 class="epi-name text-white mb-0">
                              The Reckless 4
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div id="feature-clips" class="tab-pane animated fadeInUp"> */}
                  <div
                    id="feature-clips"
                    className={`tab-pane animated fadeInUp ${
                      activeTab === "feature-clips" ? "active show" : ""
                    }`}
                  >
                    <div class="row episodes list-inline p-0 mb-0 iq-rtl-direction">
                      <div class="e-item col-lg-3 col-sm-12 col-md-6">
                        <div class="block-image position-relative">
                          <a href="show-details.html">
                            <img
                              src={trailer}
                              class="img-fluid img-zoom"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div class="episode-number">S01E01</div>
                          <div class="episode-play-info">
                            <div class="episode-play">
                              <a href="show-detail.html">
                                <i class="ri-play-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="epi-desc p-3">
                          <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="text-white rel-date">
                              October 1, 2020
                            </span>
                            <span class="text-primary run-time">45min</span>
                          </div>
                          <a href="show-detail.html">
                            <h5 class="epi-name text-white mb-0">
                              The Reckless 1{" "}
                            </h5>
                          </a>
                        </div>
                      </div>
                      <div class="e-item col-lg-3 col-sm-12 col-md-6">
                        <div class="block-image position-relative">
                          <a href="show-details.html">
                            <img
                              src={trailer}
                              class="img-fluid img-zoom"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div class="episode-number">S01E02</div>
                          <div class="episode-play-info">
                            <div class="episode-play">
                              <a href="show-details.html" tabindex="0">
                                <i class="ri-play-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="epi-desc p-3">
                          <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="text-white rel-date">
                              October 8, 2020
                            </span>
                            <span class="text-primary run-time">35min</span>
                          </div>
                          <a href="show-detail.html">
                            <h5 class="epi-name text-white mb-0">
                              The Reckless 2{" "}
                            </h5>
                          </a>
                        </div>
                      </div>
                      <div class="e-item col-lg-3 col-sm-12 col-md-6">
                        <div class="block-image position-relative">
                          <a href="show-details.html">
                            <img
                              src={trailer}
                              class="img-fluid img-zoom"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div class="episode-number">S01E02</div>
                          <div class="episode-play-info">
                            <div class="episode-play">
                              <a href="show-details.html" tabindex="0">
                                <i class="ri-play-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="epi-desc p-3">
                          <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="text-white rel-date">
                              October 8, 2020
                            </span>
                            <span class="text-primary run-time">35min</span>
                          </div>
                          <a href="show-detail.html">
                            <h5 class="epi-name text-white mb-0">
                              The Reckless 2{" "}
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              id="iq-favorites"
              className="s-margin my-5 detail-cast-list iq-rtl-direction mt-0 starring"
            >
              <div className="row m-0">
                <div className="col-sm-12 overflow-hidden p-0">
                  <div className="iq-main-header d-flex align-items-center justify-content-between iq-ltr-direction">
                    <h4 className="main-title">Starring</h4>
                  </div>
                  <div className="favorites-contens iq-smovie-slider">
                    <ul className="inner-slider list-inline row p-0  iq-ltr-direction">
                      <li className=" slide-item iq-ltr-direction col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="cast-images position-relative row mx-0">
                          <div className="col-sm-4 col-12 img-box p-0">
                            <img src={start1} alt="image" loading="lazy" />
                          </div>
                          <div
                            className="col-sm-8 col-12 block-description starring-desc "
                            style={{
                              marginLeft: "90px",
                            }}
                          >
                            <h6 className="iq-title">
                              <a href="cast-karen-gilchrist.html" tabindex="0">
                                Karen gilchrist{" "}
                              </a>
                            </h6>
                            <div className="video-time  align-items-center my-2"  style={{textAlign: "center"}}>
                              <span className="text-white">As James</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className=" slide-item iq-ltr-direction col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="cast-images position-relative row mx-0">
                          <div className="col-sm-4 col-12 img-box p-0">
                            <img src={start2} alt="image" loading="lazy" />
                          </div>
                          <div
                            className="col-sm-8 col-12 block-description starring-desc "
                            style={{
                              marginLeft: "90px",
                            }}
                          >
                            <h6 className="iq-title">
                              <a href="cast-james-jones.html" tabindex="0">
                                James Chinlund{" "}
                              </a>
                            </h6>
                            <div className="video-time  align-items-center my-2"  style={{textAlign: "center"}}>
                              <span className="text-white">As James</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="iq-upcoming-movie" className="my-5">
            <Container fluid>
              <Row>
                <Col sm="12" className="overflow-hidden">
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className="main-title">Recommended Shows</h4>
                    <Link className="iq-view-all" to="/movie-category">
                      View All
                    </Link>
                  </div>
                  <div id="upcoming-contens">
                    <div
                      id="prev1"
                      className="swiper-button swiper-button-prev"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </div>
                    <div
                      id="next1"
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
                                <Link to="/movie-details">{item?.title}</Link>
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
                                  to="/movie-details"
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
                                  <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span onClick={()=>handleAddClick('Added Successfully !')}>
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

          <section id="iq-rtl-direction" className="my-5">
            <Container fluid>
              <Row>
                <Col sm="12" className="overflow-hidden">
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className="main-title">Related Shows</h4>
                    <Link className="iq-view-all" to="/movie-category">
                      View All
                    </Link>
                  </div>
                  <div id="upcoming-contens">
                    <div
                      id="prev2"
                      className="swiper-button swiper-button-prev"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </div>
                    <div
                      id="next2"
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
                                <Link to="/movie-details">{item?.title}</Link>
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
                                  to="/movie-details"
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
                                  <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span onClick={()=>handleAddClick('Added Successfully !')}>
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

          <section id="iq-rtl-direction" className="my-5">
            <Container fluid>
              <Row>
                <Col sm="12" className="overflow-hidden">
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className="main-title">Upcoming Shows</h4>
                    <Link className="iq-view-all" to="/movie-category">
                      View All
                    </Link>
                  </div>
                  <div id="upcoming-contens">
                    <div
                      id="prev3"
                      className="swiper-button swiper-button-prev"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </div>
                    <div
                      id="next3"
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
                                <Link to="/movie-details">{item?.title}</Link>
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
                                  to="/movie-details"
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
                                  <span onClick={()=>handleAddClick('Liked Successfully !')}>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span onClick={()=>handleAddClick('Added Successfully !')}>
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
        </div>
      </div>
    </>
  );
};
export default ShowList;
