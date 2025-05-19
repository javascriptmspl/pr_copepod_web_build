import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import FsLightbox from "fslightbox-react";
import Select from "react-select";
import { useSelector } from "react-redux";

// img
import logo from "../../../assets/images/logo.png";
import icon from "../../../assets/video/trailer.mp4";

// favorite img

// parallax
import parallax3 from "../../../assets/images/parallax/p1.jpg";
import parallax4 from "../../../assets/images/parallax/parallax-logo.png";

// trending
import trending1 from "../../../assets/images/trending/01.jpg";
import trending01 from "../../../assets/images/trending/011.jpg";
import trending2 from "../../../assets/images/trending/02.jpg";
import tranding02 from "../../../assets/images/trending/trending013.jpg";
import trending3 from "../../../assets/images/trending/03.jpg";
import tranding03 from "../../../assets/images/trending/trending012.jpg";
import trending4 from "../../../assets/images/trending/04.jpg";
import trending5 from "../../../assets/images/trending/05.jpg";
import trending6 from "../../../assets/images/trending/06.jpg";
import trendinglabel from "../../../assets/images/trending/trending-label.png";
import tranding04 from "../../../assets/images/trending/tranding04.jpg";
import tranding05 from "../../../assets/images/trending/tranding05.jpg";

import smalllogo1 from "../../../assets/images/trending/72-72-01.jpg";
import smalllogo4 from "../../../assets/images/trending/72-72-04.jpg";
import smalllogo2 from "../../../assets/images/trending/72-72-02.jpg";
import smalllogo3 from "../../../assets/images/trending/72-72-03.jpg";
import smalllogo5 from "../../../assets/images/trending/72-72-05.jpg";

// episodes
import episodes1 from "../../../assets/images/episodes/01.jpg";
import episodes2 from "../../../assets/images/episodes/02.jpg";
import episodes3 from "../../../assets/images/episodes/03.jpg";
import episodes4 from "../../../assets/images/episodes/04.jpg";
import episodes5 from "../../../assets/images/episodes/05.jpg";

// slice
import { getAllModes } from "../../../store/redux/SLICE/auth/ModeSlice";

import { useDispatch } from "react-redux";

import {
  LatestMovies,
  upcomingData,
  Suggested,
  options1,
  options2,
  Recommended,
  familiarFavorites,
} from "./../dummyData/homeDummyData";

// swiper                                                                                                                                                                                                                                                                                                               c c v cv cv cvcvcvvcc vccvcvvcvc    ccv cv cvccvcvvvc   vcvc      cv                                                                          ccv
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Top10ShowsInUS } from "../dummyData/newAndPopularData";
import { toast } from "react-toastify";


SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

const gsapAnimate = {
  getData: (elem) => {
    const option = {
      opacity: 0,
      scale: 1,
      position: {
        x: 0,
        y: 0,
      },
      ease: "",
      duration: 1,
      delay: 0.4,
      rotate: 0,
    };
    if (elem !== undefined) {
      option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0);

      option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0);

      option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);

      option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);

      option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);

      option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);

      option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5);

      option.ease = gsapAnimate.validValue(elem.dataset.iqEase, "");

      const setOption = {
        opacity: option.opacity,
        scale: option.scale,
        x: option.position.x,
        y: option.position.y,
        ease: option.ease,
        rotate: option.rotate,
        duration: option.duration,
        delay: option.delay,
      };

      return setOption;
    } else {
      return { opacity: 0 };
    }
  },
  onStart: (elem) => {
    const setOption = gsapAnimate.getData(elem);

    gsap.from(elem, setOption);
  },

  onEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);

    gsap.to(elem, setOption);
  },

  onStartEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);

    const setEndOption = gsapAnimate.getData(elem);

    setEndOption.opacity = 1;

    setEndOption.x = 0;

    setEndOption.y = 0;

    setEndOption.rotate = 0;

    setEndOption.scale = 1;

    gsap.fromTo(elem, setOption, setEndOption);
  },
  validValue: (attr, defaultVal) => {
    if (attr !== undefined && attr !== null) {
      return Number(attr);
    }
    return Number(defaultVal);
  },
};

const Homepage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [toggler1] = useState(false);
  const [toggler2] = useState(false);
  const [toggler3] = useState(false);
  // const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const modedAta = useSelector((state) => state.modedAta);

  console.log(modedAta);

  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };
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
 


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle any errors that occur during playback
        console.error("Error playing video:", error);
      });
    }
  }, []);

  

  const animationInit = () => {
    if (
      document.querySelector(".swiper-container .swiper-slide-active") !== null
    ) {
      const gsapElem = document
        .querySelector(".swiper-container .swiper-slide-active")
        .querySelectorAll('[data-iq-gsap="onStart"]');

      Array.from(gsapElem, (elem) => {
        return gsapAnimate.onStartEnd(elem);
      });
    }
  };

  const dispatch = useDispatch();

  const GetAllMode = () => {
    dispatch(getAllModes());
  };

  useEffect(() => {
    GetAllMode();
  }, []);

  return (
    <>
      <FsLightbox
        toggler={toggler1}
        sources={[
          <iframe
            src={icon}
            title=" "
            width="100vw"
            height="100vh"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />,
        ]}
      />

      <FsLightbox
        toggler={toggler2}
        sources={[
          <iframe
            src={icon}
            title=" "
            width="500px"
            height="200px"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />,
        ]}
      />
      <FsLightbox
        toggler={toggler3}
        sources={[
          <iframe
            src={icon}
            title=" "
            width="500px"
            height="200px"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />,
        ]}
      />
      <section id="home" className="iq-main-slider p-0 iq-rtl-direction">
        <div id="prev5" className="swiper-button swiper-button-prev">
          <i className="fa fa-chevron-left"></i>
        </div>
        <div id="next5" className="swiper-button swiper-button-next">
          <i className="fa fa-chevron-right"></i>
        </div>
        <Swiper
          navigation={{
            prevEl: "#prev5",
            nextEl: "#next5",
          }}
          pagination={{
            clickable: true,
          }}
          onInit={() => {
            animationInit();
          }}
          onSlideChangeTransitionStart={() => animationInit()}
          loop={true}
          id="home-slider"
          className="slider m-0 p-0"
        >
          <SwiperSlide className="slide slick-bg s-bg-1">
            <video
              ref={videoRef}
              id="background-video"
              autoPlay
              loop
              volume={0.5}
            >
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <Container fluid className="position-relative h-100">
              <div className="slider-inner h-100">
                <Row className="align-items-center  iq-ltr-direction h-100 ">
                  <Col xl="6" lg="12" md="12">
                    {/* <Link to="#">
                      <div className="channel-logo" data-iq-delay="0.5">
                        <img src={logo} className="c-logo" alt="copepod" />
                      </div>
                    </Link> */}
                    <h1
                      className="slider-text big-title title text-uppercase"
                      data-iq-gsap="onStart"
                      data-iq-position-x="-200"
                    >
                      bushland
                    </h1>
                    {/* <!-- Add your video element here --> */}

                    <div className="d-flex flex-wrap align-items-center">
                      <div
                        className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                        data-iq-gsap="onStart"
                        data-iq-position-x="-200"
                        data-iq-delay="-0.5"
                      >
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
                        <span className="text-white ml-2">4.7(lmdb)</span>
                      </div>
                      <div
                        className="d-flex align-items-center mt-2 mt-md-3"
                        data-iq-gsap="onStart"
                        data-iq-position-x="-200"
                        data-iq-delay="-0.5"
                      >
                        <span className="badge badge-secondary p-2">18+</span>
                        <span className="ml-3">2 Seasons</span>
                      </div>
                      <p
                        data-iq-gsap="onStart"
                        data-iq-position-y="80"
                        data-iq-delay="0.8"
                      >
                        "Bushland" is an enchanting animated film that
                        transports viewers to the breathtaking landscapes of the
                        Australian outback. Follow the journey of a curious
                        young koala named Joey as he sets out on a quest to save
                        his beloved home from destruction. 
                      </p>
                    </div>
                    <div
                      className="trending-list"
                      data-wp_object-in="fadeInUp"
                      data-delay-in="1.2"
                    >
                      <div className="text-primary title starring">
                        Starring:{" "}
                        <span className="text-body">
                          Karen Gilchrist, James Earl Jones
                        </span>
                      </div>
                      <div className="text-primary title genres">
                        Genres: <span className="text-body">Action</span>
                      </div>
                      <div className="text-primary title tag">
                        Tag:{" "}
                        <span className="text-body">
                          Action, Adventure, Horror
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center r-mb-23"
                      data-iq-gsap="onStart"
                      data-iq-position-y="80"
                      data-iq-delay="0.8"
                    >
                      <Link
                        to="/show-details"
                        className="btn btn-hover iq-button"
                        onClick={handleLinkClick}
                      >
                        <i className="fa fa-play mr-2" aria-hidden="true"></i>
                        Play Now
                      </Link>
                      <Link to="/show-details" className="btn btn-link">
                        More details
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="main-content">
        {/* Top 10 movie in US */}
        <section id="iq-top-movies">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">Top 10 Movies</h4>
                  <Link className="iq-view-all" to="/view-all" onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div
                    id="prev-top-movies"
                    className="swiper-button swiper-button-prev"
                  >
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div
                    id="next-top-movies"
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
                      prevEl: "#prev-top-movies",
                      nextEl: "#next-top-movies",
                    }}
                    loop={true}
                    slidesPerView={4}
                      spaceBetween={10}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {Top10ShowsInUS.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className=" block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item?.topImg}
                              className="img-fluid img-top-10-number"
                              alt=""
                            />
                            <img
                              src={item?.imageUrl}
                              className="img-fluid img-top-10-image"
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
                                to="/show-details"
                                role="button"
                                className="btn btn-hover iq-button"
                                onClick={handleLinkClick}
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
                                <span  onClick={()=>handleAddClick('Liked Successfully !')}>
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

        <section id="iq-familiar-favorites">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">Familiar TV Favorites</h4>
                  <Link className="iq-view-all" to="/view-all" onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div
                    id="prev-family"
                    className="swiper-button swiper-button-prev"
                  >
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div
                    id="next-family"
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
                      prevEl: "#prev-family",
                      nextEl: "#next-family",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={10}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {familiarFavorites.map((item, index) => (
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
                                onClick={handleLinkClick}
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
                                <span  onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
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
              </Col>
            </Row>
          </Container>
        </section>

        <section id="iq-upcoming-movie">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="main-title">Upcoming Movies</h4>
                  <Link className="iq-view-all" to="/view-all" onClick={handleLinkClick}>
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
                    spaceBetween={10}
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
                                onClick={handleLinkClick}
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
                                <span   onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
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
              </Col>
            </Row>
          </Container>
        </section>

        <section id="iq-suggestede" className="s-margin">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Suggested For You</h4>
                  <Link className="iq-view-all" to="/view-all" onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="suggestede-contens">
                  <div id="prev3" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next3" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation={{
                      prevEl: "#prev3",
                      nextEl: "#next3",
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
                                onClick={handleLinkClick}
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
                                <span   onClick={()=>handleAddClick('Liked Successfully !')}>
                                  <i className="ri-heart-fill"></i>
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
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
              </Col>
            </Row>
          </Container>
        </section>

        <section id="parallex" className="parallax-window">
          <Container fluid className="h-100">
            <Row className="align-items-center justify-content-center h-100 parallaxt-details">
              <Col lg="4" className="r-mb-23">
                <div className="text-left">
                  <Link to="#">
                    <img src={parallax4} className="img-fluid" alt="bailey" />
                  </Link>
                  <div className="parallax-ratting d-flex align-items-center mt-3 mb-3">
                    <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <Link to="#" className="text-primary">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="pl-2 text-primary">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="pl-2 text-primary">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="pl-2 text-primary">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="pl-2 text-primary">
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                    <span className="text-white ml-3">9.2 (lmdb)</span>
                  </div>
                  <div className="movie-time d-flex align-items-center mb-3 iq-ltr-direction">
                    <div className="badge badge-secondary mr-3">13+</div>
                    <h6 className="text-white">2h 30m</h6>
                  </div>
                  <p>
                    "Bailey" is a heartwarming tale that follows the journey of
                    a spirited Labrador Retriever named Bailey as he embarks on
                    a series of adventures across different lifetimes. Through
                    reincarnation, Bailey learns valuable lessons about loyalty,
                    love, and the enduring bond between humans and their canine
                    companions.
                  </p>
                  <div className="parallax-buttons">
                    <Link to="/movie-details" className="btn btn-hover" onClick={handleLinkClick}>
                      Play Now
                    </Link>
                    <Link to="/movie-details" className="btn btn-link" onClick={handleLinkClick}>
                      More details
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="8">
                <div className="parallax-img">
                  <Link to="/movie-details">
                    <img
                      src={parallax3}
                      className="img-fluid w-100"
                      alt="bailey"
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
        <section id="iq-trending" className="s-margin" style={{height:"auto"}}>
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Trending</h4>
                </div>
                <div id="trending-contens">
                  <div id="prev4" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next4" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    as="ul"
                    thumbs={{ swiper: thumbsSwiper }}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    navigation={{
                      prevEl: "#prev4",
                      nextEl: "#next4",
                    }}
                    slidesPerView={5}
                    spaceBetween={10}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                      1500: { slidesPerView: 5 },
                    }}
                    loop={true}
                    className="list-inline p-0 m-0 row align-items-center iq-rtl-direction"
                  >
                    <SwiperSlide as="li">
                      <Link to="#">
                        <div className="movie-slick position-relative">
                          <img src={trending1} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <Link to="#">
                        <div className="movie-slick position-relative">
                          <img src={trending2} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <Link to="#">
                        <div className="movie-slick position-relative">
                          <img src={trending3} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <Link to="#">
                        <div className="movie-slick position-relative">
                          <img src={trending4} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <Link to="#">
                        <div className="movie-slick position-relative">
                          <img src={trending5} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <Link to="#">
                        <div className="movie-slick position-relative">
                          <img src={trending6} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={1}
                    freeMode={true}
                    watchSlidesProgress={true}
                    id="trending-slider"
                    className="mt-3  list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction"
                  >
                    <SwiperSlide as="li">
                      <div
                        className="tranding-block position-relative"
                        style={{ backgroundImage: `url(${trending1})` }}
                      >
                        <Tab.Container
                          defaultActiveKey="trending-data1"
                          className="trending-custom-tab"
                        >
                          <div className="tab-title-info position-relative iq-ltr-direction">
                            <Nav
                              as="ul"
                              variant="pills"
                              className="trending-pills nav-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
                            >
                              <Nav.Item as="li" className="nav-item">
                                <Nav.Link href="" eventKey="trending-data1">
                                  Overview
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="nav-item">
                                <Nav.Link href="" eventKey="trending-data2">
                                  Episodes
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="nav-item">
                                <Nav.Link href="" eventKey="trending-data3">
                                  Trailers
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="nav-item">
                                <Nav.Link href="" eventKey="trending-data4">
                                  Similar Like This
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <Tab.Content className="trending-content">
                            <Tab.Pane
                              eventKey="trending-data1"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="res-logo">
                                    <div className="channel-logo">
                                      <img
                                        src={logo}
                                        className="c-logo"
                                        alt="copepod"
                                      />
                                    </div>
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  the hero camp
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail">
                                  <span className="badge badge-secondary p-3">
                                    18+
                                  </span>
                                  <span className="ml-3">3 Seasons</span>
                                  <span className="trending-year">2020</span>
                                </div>
                                <div className="d-flex align-items-center series mb-4">
                                  <Link to="#">
                                    <img
                                      src={smalllogo1}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <span className="text-gold ml-3">
                                    #2 in Series Today
                                  </span>
                                </div>
                                <p className="trending-dec wrap">
                                  "Hero Camp" captivates audiences with its
                                  thrilling mix of superpowered action,
                                  coming-of-age drama, and mystery. Through
                                  engaging characters and intense training
                                  sequences, the series explores themes of
                                  teamwork, self-discovery, and the
                                  responsibilities that come with extraordinary
                                  abilities. 
                                </p>
                                <div className="p-btns">
                                  <div className="d-flex align-items-center p-0">
                                    <Link
                                      to="/show-details"
                                      className="btn btn-hover mr-2"
                                      tabIndex="0"
                                      onClick={handleLinkClick}
                                    >
                                      <i
                                        className="fa fa-play mr-2"
                                        aria-hidden="true"
                                      ></i>
                                      Play Now
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-add-line"></i>My List
                                    </Link>
                                  </div>
                                </div>
                                <div className="trending-list mt-4">
                                  <div className="text-primary title">
                                    Starring:
                                    <span className="text-body">
                                      Wagner Moura, Boyd Holbrook, Joanna
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    Genres:
                                    <span className="text-body">
                                      Crime, Action, Thriller, Biography
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    This Is:
                                    <span className="text-body">
                                      Violent, Forceful
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data2"
                              className="overlay-tab  fade show "
                              id="trending-episode1"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  the hero camp
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                  <span className="season_date ml-2">
                                    2 Seasons
                                  </span>
                                  <span className="trending-year">
                                    Feb 2019
                                  </span>
                                </div>
                                <div className="iq-custom-select d-inline-block sea-epi">
                                  {/* <Select options={options1} id="f2" /> */}
                                </div>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode1"
                                >
                                  <div
                                    id="prev11"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="fa fa-chevron-left"></i>
                                  </div>
                                  <div
                                    id="next11"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="fa fa-chevron-right"></i>
                                  </div>
                                  <Swiper
                                    spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev11",
                                      nextEl: "#next11",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 4 },
                                      550: { slidesPerView: 4 },
                                      991: { slidesPerView: 4 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body ">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body ">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data3"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  the hero camp
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode2"
                                >
                                  <div
                                    id="prev12"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="fa fa-chevron-left"></i>
                                  </div>
                                  <div
                                    id="next12"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="fa fa-chevron-right"></i>
                                  </div>
                                  <Swiper
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev12",
                                      nextEl: "#next12",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 1
                                          </Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 2
                                          </Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 3
                                          </Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 4
                                          </Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 5
                                          </Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data4"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  the hero camp
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode3"
                                >
                                  <div
                                    id="prev13"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next13"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev13",
                                      nextEl: "#next13",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={trending01}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Hero Camp" captivates audiences with
                                          its thrilling mix of superpowered
                                          action, coming-of-age drama, and
                                          mystery.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <div
                        className="tranding-block position-relative"
                        style={{ backgroundImage: `url(${trending2})` }}
                      >
                        <Tab.Container
                          defaultActiveKey="trending-data5"
                          className="trending-custom-tab"
                        >
                          <div className="tab-title-info position-relative">
                            <Nav
                              as="ul"
                              variant="pills"
                              className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
                            >
                              <Nav.Item as="li">
                                <Nav.Link
                                  eventKey="trending-data5"
                                  aria-selected="true"
                                >
                                  Overview
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  eventKey="trending-data6"
                                  aria-selected="true"
                                >
                                  Episodes
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  eventKey="trending-data7"
                                  aria-selected="true"
                                >
                                  Trailers
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  eventKey="trending-data8"
                                  aria-selected="true"
                                >
                                  Similar Like This
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <Tab.Content className="trending-content">
                            <Tab.Pane
                              eventKey="trending-data5"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="res-logo">
                                    <div className="channel-logo">
                                      <img
                                        src={logo}
                                        className="c-logo"
                                        alt="copepod"
                                      />
                                    </div>
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  The Appartment
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail">
                                  <span className="badge badge-secondary p-3">
                                    15+
                                  </span>
                                  <span className="ml-3">2 Seasons</span>
                                  <span className="trending-year">2020</span>
                                </div>
                                <div className="d-flex align-items-center series mb-4">
                                  <Link to="#">
                                    <img
                                      src={smalllogo2}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <span className="text-gold ml-3">
                                    #2 in Series Today
                                  </span>
                                </div>
                                <p className="trending-dec">
                                  "The Apartment" is a web series that follows
                                  the lives of a group of friends who share an
                                  apartment in a bustling city. The series
                                  explores the dynamics between the characters
                                  as they navigate through various personal and
                                  professional challenges while living together
                                  under one roof.
                                </p>
                                <div className="p-btns">
                                  <div className="d-flex align-items-center p-0">
                                    <Link
                                      to="#"
                                      className="btn btn-hover mr-2"
                                      tabIndex="0"
                                      onClick={handleLinkClick}
                                    >
                                      <i
                                        className="fa fa-play mr-2"
                                        aria-hidden="true"
                                      ></i>
                                      Play Now
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-add-line"></i>My List
                                    </Link>
                                  </div>
                                </div>
                                <div className="trending-list mt-4">
                                  <div className="text-primary title">
                                    Starring:
                                    <span className="text-body">
                                      Wagner Moura, Boyd Holbrook, Joanna
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    Genres:
                                    <span className="text-body">
                                      Crime, Action, Thriller, Biography
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    This Is:
                                    <span className="text-body">
                                      Violent, Forceful
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data6"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  The Appartment
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                  <span className="season_date ml-2">
                                    2 Seasons
                                  </span>
                                  <span className="trending-year">
                                    Feb 2019
                                  </span>
                                </div>
                                <div className="iq-custom-select d-inline-block sea-epi">
                                  {/* <Select options={options2} id="f3" /> */}
                                </div>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode1"
                                >
                                  <div
                                    id="prev14"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next14"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev14",
                                      nextEl: "#next14",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>

                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data7"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  The Appartment
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode2"
                                >
                                  <div
                                    id="prev15"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next15"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev15",
                                      nextEl: "#next15",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 1
                                          </Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 2
                                          </Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 3
                                          </Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 4
                                          </Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 5
                                          </Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data8"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  The Appartment
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode3"
                                >
                                  <div
                                    id="prev16"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next16"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev16",
                                      nextEl: "#next16",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link to="#" tabIndex="0">
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding02}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Apartment" is a web series that
                                          follows the lives of a group of
                                          friends who share an apartment in a
                                          bustling city. The series explores the
                                          dynamics between the characters as
                                          they navigate through various personal
                                          and professional challenges while
                                          living together under one roof.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <div
                        className="tranding-block position-relative"
                        style={{ backgroundImage: `url(${trending3})` }}
                      >
                        <Tab.Container
                          defaultActiveKey="trending-data9"
                          className="trending-custom-tab"
                        >
                          <div className="tab-title-info position-relative">
                            <Nav
                              as="ul"
                              variant="pills"
                              className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
                              role="tablist"
                            >
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data9"
                                  aria-selected="true"
                                >
                                  Overview
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data10"
                                  aria-selected="true"
                                >
                                  Episodes
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data11"
                                  aria-selected="true"
                                >
                                  Trailers
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data12"
                                  aria-selected="true"
                                >
                                  Similar Like This
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <Tab.Content className="trending-content">
                            <Tab.Pane
                              eventKey="trending-data9"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="res-logo">
                                    <div className="channel-logo">
                                      <img
                                        src={logo}
                                        className="c-logo"
                                        alt="copepod"
                                      />
                                    </div>
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase ">
                                  the marshal king
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail">
                                  <span className="badge badge-secondary p-3">
                                    11+
                                  </span>
                                  <span className="ml-3">3 Seasons</span>
                                  <span className="trending-year">2020</span>
                                </div>
                                <div className="d-flex align-items-center series mb-4">
                                  <Link to="#">
                                    <img
                                      src={smalllogo4}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <span className="text-gold ml-3">
                                    #11 in Series Today
                                  </span>
                                </div>
                                <p className="trending-dec">
                                  "The Marshal King" follows the story of a
                                  legendary lawman, Marshal King, as he rides
                                  into a lawless frontier town plagued by
                                  corruption and violence. 
                                </p>
                                <div className="p-btns">
                                  <div className="d-flex align-items-center p-0">
                                    <Link
                                      to="#"
                                      className="btn btn-hover mr-2"
                                      tabIndex="0"
                                      onClick={handleLinkClick}
                                    >
                                      <i
                                        className="fa fa-play mr-2"
                                        aria-hidden="true"
                                      ></i>
                                      Play Now
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-add-line"></i>
                                      My List
                                    </Link>
                                  </div>
                                </div>
                                <div className="trending-list mt-4">
                                  <div className="text-primary title">
                                    Starring:
                                    <span className="text-body">
                                      Wagner Moura, Boyd Holbrook, Joanna
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    Genres:
                                    <span className="text-body">
                                      Crime, Action, Thriller, Biography
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    This Is:
                                    <span className="text-body">
                                      Violent, Forceful
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data10"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  the marshal king
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                  <span className="season_date ml-2">
                                    2 Seasons
                                  </span>
                                  <span className="trending-year">
                                    Feb 2019
                                  </span>
                                </div>
                                <div className="iq-custom-select d-inline-block sea-epi">
                                  {/* <Select options={options1} id="f4" /> */}
                                </div>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode1"
                                >
                                  <div
                                    id="prev17"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next17"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev17",
                                      nextEl: "#next17",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data11"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  the marshal king
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode2"
                                >
                                  <div
                                    id="prev18"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next18"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev18",
                                      nextEl: "#next18",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="#"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 1
                                          </Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 2
                                          </Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 3
                                          </Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 4
                                          </Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 5
                                          </Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data12"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  the marshal king
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode3"
                                >
                                  <div
                                    id="prev19"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next19"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev19",
                                      nextEl: "#next19",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding04}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "The Marshal King" follows the story
                                          of a legendary lawman, Marshal King,
                                          as he rides into a lawless frontier
                                          town plagued by corruption and
                                          violence.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <div
                        className="tranding-block position-relative"
                        style={{ backgroundImage: `url(${trending4})` }}
                      >
                        <Tab.Container
                          defaultActiveKey="trending-data13"
                          className="trending-custom-tab"
                        >
                          <div className="tab-title-info position-relative">
                            <Nav
                              as="ul"
                              variant="pills"
                              className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
                            >
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data13"
                                  aria-selected="true"
                                >
                                  Overview
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data14"
                                  aria-selected="true"
                                >
                                  Episodes
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data15"
                                  aria-selected="true"
                                >
                                  Trailers
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data16"
                                  aria-selected="true"
                                >
                                  Similar Like This
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <Tab.Content className="trending-content">
                            <Tab.Pane
                              eventKey="trending-data13"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="res-logo">
                                    <div className="channel-logo">
                                      <img
                                        src={logo}
                                        className="c-logo"
                                        alt="copepod"
                                      />
                                    </div>
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase ">
                                  Dark Zone
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail">
                                  <span className="badge badge-secondary p-3">
                                    17+
                                  </span>
                                  <span className="ml-3">1 Season</span>
                                  <span className="trending-year">2020</span>
                                </div>
                                <div className="d-flex align-items-center series mb-4">
                                  <Link to="#">
                                    <img
                                      src={smalllogo5}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <span className="text-gold ml-3">
                                    #2 in Series Today
                                  </span>
                                </div>
                                <p className="trending-dec">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s.
                                </p>
                                <div className="p-btns">
                                  <div className="d-flex align-items-center p-0">
                                    <Link
                                      to="#"
                                      className="btn btn-hover mr-2"
                                      tabIndex="0"
                                      onClick={handleLinkClick}
                                    >
                                      <i
                                        className="fa fa-play mr-2"
                                        aria-hidden="true"
                                      ></i>
                                      Play Now
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-add-line"></i>My List
                                    </Link>
                                  </div>
                                </div>
                                <div className="trending-list mt-4">
                                  <div className="text-primary title">
                                    Starring:
                                    <span className="text-body">
                                      Wagner Moura, Boyd Holbrook, Joanna
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    Genres:
                                    <span className="text-body">
                                      Crime, Action, Thriller, Biography
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    This Is:
                                    <span className="text-body">
                                      Violent, Forceful
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data14"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Dark Zone
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                  <span className="season_date ml-2">
                                    2 Seasons
                                  </span>
                                  <span className="trending-year">
                                    Feb 2019
                                  </span>
                                </div>
                                <div className="iq-custom-select d-inline-block sea-epi">
                                  {/* <Select options={options2} id="f5" /> */}
                                </div>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode1"
                                >
                                  <div
                                    id="prev20"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next20"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev20",
                                      nextEl: "#next20",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes1}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes2}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes3}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes4}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes5}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data15"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Dark Zone
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode2"
                                >
                                  <div
                                    id="prev21"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next21"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev21",
                                      nextEl: "#next21",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={episodes1}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 1
                                          </Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={episodes2}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 2
                                          </Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={episodes3}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 3
                                          </Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={episodes4}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 4
                                          </Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={episodes5}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 5
                                          </Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data16"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Dark Zone
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode3"
                                >
                                  <div
                                    id="prev22"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next22"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev22",
                                      nextEl: "#next22",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes1}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link to="#" tabIndex="0">
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes2}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes3}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes4}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={episodes5}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <div
                        className="tranding-block position-relative"
                        style={{ backgroundImage: `url(${trending5})` }}
                      >
                        <Tab.Container
                          defaultActiveKey="trending-data17"
                          className="trending-custom-tab"
                        >
                          <div className="tab-title-info position-relative">
                            <Nav
                              as="ul"
                              variant="pills"
                              className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
                            >
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data17"
                                  aria-selected="true"
                                >
                                  Overview
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data18"
                                  aria-selected="true"
                                >
                                  Episodes
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data19"
                                  aria-selected="true"
                                >
                                  Trailers
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data20"
                                  aria-selected="true"
                                >
                                  Similar Like This
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <Tab.Content className="trending-content">
                            <Tab.Pane
                              eventKey="trending-data17"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="res-logo">
                                    <div className="channel-logo">
                                      <img
                                        src={logo}
                                        className="c-logo"
                                        alt="copepod"
                                      />
                                    </div>
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Opposites Attract
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail">
                                  <span className="badge badge-secondary p-3">
                                    7+
                                  </span>
                                  <span className="ml-3">2 Seasons</span>
                                  <span className="trending-year">2020</span>
                                </div>
                                <div className="d-flex align-items-center series mb-4">
                                  <Link to="#">
                                    <img
                                      src={smalllogo5}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <span className="text-gold ml-3">
                                    #2 in Series Today
                                  </span>
                                </div>
                                <p className="trending-dec">
                                  "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities. 
                                </p>
                                <div className="p-btns">
                                  <div className="d-flex align-items-center p-0">
                                    <Link
                                      to="#"
                                      className="btn btn-hover mr-2"
                                      tabIndex="0"
                                      onClick={handleLinkClick}
                                    >
                                      <i
                                        className="fa fa-play mr-2"
                                        aria-hidden="true"
                                      ></i>
                                      Play Now
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-add-line"></i>
                                      My List
                                    </Link>
                                  </div>
                                </div>
                                <div className="trending-list mt-4">
                                  <div className="text-primary title">
                                    Starring:
                                    <span className="text-body">
                                      Wagner Moura, Boyd Holbrook, Joanna
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    Genres:
                                    <span className="text-body">
                                      Crime, Action, Thriller, Biography
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    This Is:
                                    <span className="text-body">
                                      Violent, Forceful
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data18"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Opposites Attract
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                  <span className="season_date ml-2">
                                    2 Seasons
                                  </span>
                                  <span className="trending-year">
                                    Feb 2019
                                  </span>
                                </div>
                                <div className="iq-custom-select d-inline-block sea-epi">
                                  {/* <Select options={options2} id="f6" /> */}
                                </div>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode1"
                                >
                                  <div
                                    id="prev23"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next23"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev23",
                                      nextEl: "#next23",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data19"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Opposites Attract
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode2"
                                >
                                  <div
                                    id="prev24"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next24"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev24",
                                      nextEl: "#next24",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 1
                                          </Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 2
                                          </Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 3
                                          </Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 4
                                          </Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 5
                                          </Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data20"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Opposites Attract
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode3"
                                >
                                  <div
                                    id="prev24"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next24"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      pevEl: "#prev24",
                                      nextEl: "#next24",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding05}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                        "Opposites Attract" tells the tale of two
                                  individuals from entirely different worlds,
                                  whose paths unexpectedly intersect. Sarah, a
                                  free-spirited artist with a penchant for
                                  adventure, and Mark, a pragmatic and
                                  disciplined businessman, find themselves drawn
                                  together despite their contrasting
                                  personalities.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide as="li">
                      <div
                        className="tranding-block position-relative"
                        style={{ backgroundImage: `url(${trending6})` }}
                      >
                        <Tab.Container
                          defaultActiveKey="trending-data21"
                          className="trending-custom-tab"
                        >
                          <div className="tab-title-info position-relative">
                            <Nav
                              as="ul"
                              variant="pills"
                              className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
                            >
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data21"
                                  aria-selected="true"
                                >
                                  Overview
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data22"
                                  aria-selected="true"
                                >
                                  Episodes
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data23"
                                  aria-selected="true"
                                >
                                  Trailers
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="trending-data24"
                                  aria-selected="true"
                                >
                                  Similar Like This
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <Tab.Content className="trending-content">
                            <Tab.Pane
                              eventKey="trending-data21"
                              className="overlay-tab fade show"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="res-logo">
                                    <div className="channel-logo">
                                      <img
                                        src={logo}
                                        className="c-logo"
                                        alt="copepod"
                                      />
                                    </div>
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Fire Storm
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail">
                                  <span className="badge badge-secondary p-3">
                                    17+
                                  </span>
                                  <span className="ml-3">2 Seasons</span>
                                  <span className="trending-year">2020</span>
                                </div>
                                <div className="d-flex align-items-center series mb-4">
                                  <Link to="#">
                                    <img
                                      src={smalllogo3}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <span className="text-gold ml-3">
                                    #2 in Series Today
                                  </span>
                                </div>
                                <p className="trending-dec">
                                  "Firestorm" is an intense action-packed
                                  thriller that follows a team of firefighters
                                  battling an unprecedented blaze in the heart
                                  of the city. As towering infernos rage and
                                  chaos ensues, they must race against time to
                                  save lives and stop the devastation. With
                                  courage and determination, they confront
                                  danger head-on, navigating through the
                                  treacherous flames to protect the city and its
                                  people.
                                </p>
                                <div className="p-btns">
                                  <div className="d-flex align-items-center p-0">
                                    <Link
                                      to="#"
                                      className="btn btn-hover mr-2"
                                      tabIndex="0"
                                      onClick={handleLinkClick}
                                    >
                                      <i
                                        className="fa fa-play mr-2"
                                        aria-hidden="true"
                                      ></i>
                                      Play Now
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-link"
                                      tabIndex="0"
                                    >
                                      <i className="ri-add-line"></i>My List
                                    </Link>
                                  </div>
                                </div>
                                <div className="trending-list mt-4">
                                  <div className="text-primary title">
                                    Starring:
                                    <span className="text-body">
                                      Wagner Moura, Boyd Holbrook, Joanna
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    Genres:
                                    <span className="text-body">
                                      Crime, Action, Thriller, Biography
                                    </span>
                                  </div>
                                  <div className="text-primary title">
                                    This Is:
                                    <span className="text-body">
                                      Violent, Forceful
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data22"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Fire Storm
                                </h1>
                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                  <span className="season_date ml-2">
                                    2 Seasons
                                  </span>
                                  <span className="trending-year">
                                    Feb 2019
                                  </span>
                                </div>
                                <div className="iq-custom-select d-inline-block sea-epi">
                                  {/* <Select options={options1} id="f7" /> */}
                                </div>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode1"
                                >
                                  <div
                                    id="prev25"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next25"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev25",
                                      nextEl: "#next25",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data23"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Fire Storm
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode2"
                                >
                                  <div
                                    id="prev26"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next26"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    navigation={{
                                      prevEl: "#prev26",
                                      nextEl: "#next26",
                                    }}
                                    loop={true}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    className="list-inline p-0 m-0"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 1
                                          </Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 2
                                          </Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 3
                                          </Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 4
                                          </Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#" target="_blank">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              target="_blank"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#" target="_blank">
                                            Trailer 5
                                          </Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="trending-data24"
                              className="overlay-tab show fade"
                            >
                              <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                <Link to="#" tabIndex="0">
                                  <div className="channel-logo">
                                    <img
                                      src={logo}
                                      className="c-logo"
                                      alt="stramit"
                                    />
                                  </div>
                                </Link>
                                <h1 className="trending-text big-title text-uppercase">
                                  Fire Storm
                                </h1>
                                <div
                                  className="episodes-contens mt-4"
                                  id="episode3"
                                >
                                  <div
                                    id="prev27"
                                    className="swiper-button swiper-button-prev"
                                  >
                                    <i className="ri-arrow-left-s-line"></i>
                                  </div>
                                  <div
                                    id="next27"
                                    className="swiper-button swiper-button-next"
                                  >
                                    <i className="ri-arrow-right-s-line"></i>
                                  </div>
                                  <Swiper
                                    slidesPerView={4}
                                      spaceBetween={10}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 3 },
                                      1400: { slidesPerView: 4 },
                                    }}
                                    navigation={{
                                      prevEl: "#prev27",
                                      nextEl: "#next27",
                                    }}
                                    loop={true}
                                    className="list-inline p-0 m-0 iq-rtl-direction"
                                  >
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link to="#" tabIndex="0">
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 1</Link>
                                          <span className="text-primary">
                                            2.25 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 2</Link>
                                          <span className="text-primary">
                                            3.23 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 3</Link>
                                          <span className="text-primary">
                                            2 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 4</Link>
                                          <span className="text-primary">
                                            1.12 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="e-item">
                                      <div className="block-image position-relative">
                                        <Link to="#">
                                          <img
                                            src={tranding03}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                        <div className="episode-play-info">
                                          <div className="episode-play">
                                            <Link
                                              to="/show-details"
                                              tabIndex="0"
                                            >
                                              <i className="ri-play-fill"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="episodes-description text-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <Link to="#">Episode 5</Link>
                                          <span className="text-primary">
                                            2.54 m
                                          </span>
                                        </div>
                                        <p className="mb-0">
                                          "Firestorm" is an intense
                                          action-packed thriller that follows a
                                          team of firefighters battling an
                                          unprecedented blaze in the heart of
                                          the city. As towering infernos rage
                                          and chaos ensues, they must race
                                          against time to save lives and stop
                                          the devastation.
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </SwiperSlide>
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

export default Homepage;
