import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import {GetContentThunk } from "../../../store/redux/SLICE/auth/Content";
import { useDispatch,useSelector } from "react-redux";
import { BASE_URL } from '../../../BaseUrl';



//img
import banner from "../../../assets/images/movie-banner/1.jpg";
import banner2 from "../../../assets/images/movie-banner/2.jpg";
import banner3 from "../../../assets/images/movie-banner/3.jpg";
import img1 from "../../../assets/images/upcoming/01.jpg";
import img2 from "../../../assets/images/upcoming/02.jpg";
import img3 from "../../../assets/images/upcoming/03.jpg";
import img4 from "../../../assets/images/upcoming/04.jpg";
import img5 from "../../../assets/images/upcoming/05.jpg";
import movie1 from "../../../assets/images/movies/01.jpg";
import movie2 from "../../../assets/images/movies/02.jpg";
import movie3 from "../../../assets/images/movies/03.jpg";
import movie4 from "../../../assets/images/movies/04.jpg";
import movie5 from "../../../assets/images/movies/05.jpg";
import movie6 from "../../../assets/images/movies/06.jpg";
import movie7 from "../../../assets/images/movies/07.jpg";
import movie8 from "../../../assets/images/movies/08.jpg";
import movie9 from "../../../assets/images/movies/09.jpg";
import movie10 from "../../../assets/images/movies/10.jpg";
import { toast } from "react-toastify";

// install Swiper modules
SwiperCore.use([Navigation]);

const MovieList = () => {

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

  const dispatch = useDispatch();
 
  
useEffect(() => {
  dispatch(GetContentThunk());
}, [dispatch]);


const store = useSelector((state)=>state);
console.log(store,"Sub User store")

const moviesContent=store && store?.contents?.contents
console.log(moviesContent,"moviesContent User store")

const handleLinkClick = () => {
  window.scrollTo(0, 0); 
};

  return (
    <>
      <section id="movieshow" className="iq-main-slider p-0">
        <div id="prev" className="swiper-button swiper-button-prev">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div id="next" className="swiper-button swiper-button-next">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          centeredSlides={true}
          navigation={{
            prevEl: "#prev",
            nextEl: "#next",
          }}
          loop={true}
          className=""
        >
        
    <SwiperSlide>
    <Link to="/movie-details">
      <div className="shows-img">
        <img src={banner} className="w-100 img" alt="" />
        <div className="shows-content">
          <h4 className="text-white mb-1">Jumbo Queen </h4>
          <div className="movie-time d-flex align-items-center">
            <div className="badge badge-secondary p-1 mr-2">9+</div>
            <span className="text-white">2h 40m</span>
          </div>
          <div
            class="category-page"
            speechify-initial-font-family="Roboto, sans-serif"
            speechify-initial-font-size="16px"
          >
            <div
              class="slider-ratting d-flex align-items-center mr-4 mt-0 mt-md-3"
              data-iq-gsap="onStart"
              data-iq-position-x="-200"
              data-iq-delay="-0.5"
              speechify-initial-font-family="Roboto, sans-serif"
              speechify-initial-font-size="16px"
            >
              <ul
                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <li
                  speechify-initial-font-family="Roboto, sans-serif"
                  speechify-initial-font-size="16px"
                >
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    speechify-initial-font-family="FontAwesome"
                    speechify-initial-font-size="16px"
                  ></i>
                </li>
                <li
                  speechify-initial-font-family="Roboto, sans-serif"
                  speechify-initial-font-size="16px"
                >
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    speechify-initial-font-family="FontAwesome"
                    speechify-initial-font-size="16px"
                  ></i>
                </li>
                <li
                  speechify-initial-font-family="Roboto, sans-serif"
                  speechify-initial-font-size="16px"
                >
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    speechify-initial-font-family="FontAwesome"
                    speechify-initial-font-size="16px"
                  ></i>
                </li>
                <li
                  speechify-initial-font-family="Roboto, sans-serif"
                  speechify-initial-font-size="16px"
                >
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    speechify-initial-font-family="FontAwesome"
                    speechify-initial-font-size="16px"
                  ></i>
                </li>
                <li
                  speechify-initial-font-family="Roboto, sans-serif"
                  speechify-initial-font-size="16px"
                >
                  <i
                    class="fa fa-star-half"
                    aria-hidden="true"
                    speechify-initial-font-family="FontAwesome"
                    speechify-initial-font-size="16px"
                  ></i>
                </li>
              </ul>
              <span
                class="text-white ml-2"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="14px"
              >
                4.7(lmdb)
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </SwiperSlide>
        
          <SwiperSlide>
            <Link to="/movie-details">
              <div className="shows-img">
                <img src={banner2} className="w-100 img1" alt="" />
                <div className="shows-content">
                  <h4 className="text-white mb-1">Jumbo Queen</h4>
                  <div className="movie-time d-flex align-items-center">
                    <div className="badge badge-secondary p-1 mr-2">9+</div>
                    <span className="text-white">2h 40m</span>
                  </div>
                  <div
                    class="category-page"
                    speechify-initial-font-family="Roboto, sans-serif"
                    speechify-initial-font-size="16px"
                  >
                    <div
                      class="slider-ratting d-flex align-items-center mr-4 mt-0 mt-md-3"
                      data-iq-gsap="onStart"
                      data-iq-position-x="-200"
                      data-iq-delay="-0.5"
                      speechify-initial-font-family="Roboto, sans-serif"
                      speechify-initial-font-size="16px"
                    >
                      <ul
                        class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                        speechify-initial-font-family="Roboto, sans-serif"
                        speechify-initial-font-size="16px"
                      >
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star-half"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                      </ul>
                      <span
                        class="text-white ml-2"
                        speechify-initial-font-family="Roboto, sans-serif"
                        speechify-initial-font-size="14px"
                      >
                        4.7(lmdb)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/movie-details">
              <div className="shows-img">
                <img src={banner3} className="w-100 img1" alt="" />
                <div className="shows-content">
                  <h4 className="text-white mb-1">The Lost Journey</h4>
                  <div className="movie-time d-flex align-items-center">
                    <div className="badge badge-secondary p-1 mr-2">20+</div>
                    <span className="text-white">2h 15m</span>
                  </div>
                  <div
                    class="category-page"
                    speechify-initial-font-family="Roboto, sans-serif"
                    speechify-initial-font-size="16px"
                  >
                    <div
                      class="slider-ratting d-flex align-items-center mr-4 mt-0 mt-md-3"
                      data-iq-gsap="onStart"
                      data-iq-position-x="-200"
                      data-iq-delay="-0.5"
                      speechify-initial-font-family="Roboto, sans-serif"
                      speechify-initial-font-size="16px"
                    >
                      <ul
                        class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                        speechify-initial-font-family="Roboto, sans-serif"
                        speechify-initial-font-size="16px"
                      >
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                        <li
                          speechify-initial-font-family="Roboto, sans-serif"
                          speechify-initial-font-size="16px"
                        >
                          <i
                            class="fa fa-star-half"
                            aria-hidden="true"
                            speechify-initial-font-family="FontAwesome"
                            speechify-initial-font-size="16px"
                          ></i>
                        </li>
                      </ul>
                      <span
                        class="text-white ml-2"
                        speechify-initial-font-family="Roboto, sans-serif"
                        speechify-initial-font-size="14px"
                      >
                        4.7(lmdb)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="d-block">
        <Dropdown className="genres-box">
          <Dropdown.Toggle as={Button} variant="secondary">
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
      </div>
      <div className="main-content">
        <section id="iq-favorites">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Trending Banner</h4>
                </div>
                <div id="favorites-contens">
                  <div id="prev1" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next1" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
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
                     { moviesContent&& moviesContent.map((items,index)=>{
                    return <SwiperSlide className="slide-item">
                      <div className="block-images1 block-images position-relative">
                        <div className="img-box">
                          {/* <img src={items?.thumbnail_image} className="img-fluid" alt="" /> */}
                          <img
											
                      src={img1}
											
											style={{
												width: '100%',
											}}
										/>
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">The Last Breath</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                            5+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-0 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                                    href="#"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                      })}
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img2} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Last Night</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              22+
                            </div>
                            <span className="text-white">2h 15m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>

                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img3} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">1980</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              25+
                            </div>
                            <span className="text-white">3h</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img4} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Looters</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              11+
                            </div>
                            <span className="text-white">2h 45m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img5} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Vugotronic</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              9+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="iq-favorites popular movies">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Popular Movies</h4>
                </div>
                <div id="favorites-contens">
                  <div id="prev2" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next2" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
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
                    <SwiperSlide className="slide-item">
                      <div className="block-images1 block-images position-relative">
                        <div className="img-box">
                          <img src={img3} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">The Last Breath</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              5+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span onClick={()=>handleAddClick('Liked Successfully !')}>
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
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img1} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Last Night</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              22+
                            </div>
                            <span className="text-white">2h 15m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img2} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">1980</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              25+
                            </div>
                            <span className="text-white">3h</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img4} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Looters</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              11+
                            </div>
                            <span className="text-white">2h 45m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={img5} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Vugotronic</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              9+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
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
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Special & Latest Movies</h4>
                </div>
                <div id="upcoming-contens">
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
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    <SwiperSlide className="slide-item">
                      <div className="block-images1 block-images position-relative">
                        <div className="img-box">
                          <img src={movie1} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">The Illusion</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              10+
                            </div>
                            <span className="text-white">3h 15m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={movie2} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Burning</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              13+
                            </div>
                            <span className="text-white">2h 20m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie3} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Hubby Kubby</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              9+
                            </div>
                            <span className="text-white">2h 40m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie4} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Open Dead Shot</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              16+
                            </div>
                            <span className="text-white">1h 40m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                                    href ="#"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={movie5} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Jumboo Queen</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              15+
                            </div>
                            <span className="text-white">3h</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="iq-suggestede">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Movies Recommended for you</h4>
                </div>
                <div id="suggestede-contens">
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
                      prevEl: "#prev4",
                      nextEl: "#next4",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="list-inline favorites-slider row p-0 m-0 iq-rtl-direction"
                  >
                    <SwiperSlide className="slide-item">
                      <div className="block-images1 block-images position-relative">
                        <div className="img-box">
                          <img src={movie6} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">The Lost Journey</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              20+
                            </div>
                            <span className="text-white">2h 15m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie7} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Boop Bitty</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              11+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie8} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Unknown Land</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              17+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={movie9} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Blood Block</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              13+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={movie10} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Champions</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              13+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="iq-suggestede content detail">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Content Detail Screen</h4>
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
                    className="list-inline favorites-slider row p-0 m-0 iq-rtl-direction"
                  >
                    <SwiperSlide className="slide-item">
                      <div className="block-images1 block-images position-relative">
                        <div className="img-box">
                          <img src={movie8} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">The Lost Journey</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              20+
                            </div>
                            <span className="text-white">2h 15m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie6} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Boop Bitty</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              11+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie7} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Unknown Land</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              17+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={movie9} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Blood Block</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              13+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={movie10} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="/movie-details">Champions</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              13+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="category-page">
                            <div
                              class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                              data-iq-delay="-0.5"
                              // style="transform: translate(0px, 0px);opacity: 1;"
                              speechify-initial-font-family="Roboto, sans-serif"
                              speechify-initial-font-size="16px"
                            >
                              <ul
                                class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="16px"
                              >
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                                <li
                                  speechify-initial-font-family="Roboto, sans-serif"
                                  speechify-initial-font-size="16px"
                                >
                                  <i
                                    class="fa fa-star-half"
                                    aria-hidden="true"
                                    speechify-initial-font-family="FontAwesome"
                                    speechify-initial-font-size="16px"
                                  ></i>
                                </li>
                              </ul>
                              <span
                                class="text-white ml-2"
                                speechify-initial-font-family="Roboto, sans-serif"
                                speechify-initial-font-size="14px"
                              >
                                4.7(lmdb)
                              </span>
                            </div>
                          </div>
                          <div className="hover-buttons">
                            <Link
                              to="/movie-details"
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
                              <span  onClick={()=>handleAddClick('Added Successfully !')}>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
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
export default MovieList;
