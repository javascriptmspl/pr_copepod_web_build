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
import { familiarFavorites } from "../dummyData/homeDummyData";
import { Top10ShowsInUS, newOnCopepod } from "../dummyData/newAndPopularData";
import { toast } from "react-toastify";

const imag1 =  <svg id="rank-1" width="100%" height="100%" viewBox="-20 0 70 154" class="svg-icon svg-icon-rank-1 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"></path></svg>

// install Swiper modules
SwiperCore.use([Navigation]);

const NewAndPopular = ({itemName}) => {

  const handleAddToWatchList = () => {
    const existingWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    existingWatchList.push(itemName);
    localStorage.setItem('watchList', JSON.stringify(existingWatchList));
    toast.success(`Added "${itemName}" to watch list successfully`);
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

  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  const dispatch = useDispatch();
 
  
useEffect(() => {
  dispatch(GetContentThunk());
}, [dispatch]);


const store = useSelector((state)=>state);
console.log(store,"Sub User store")

const moviesContent=store && store?.contents?.contents
console.log(moviesContent,"moviesContent User store")

  return (
    <>
    
     
      <div className="main-content">
      {/* New on copepod */}
      <section id="iq-new-Popular">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">New on copepod</h4>
                  <Link className="iq-view-all" to="/view-all" onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div id="prev-new-popular" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next-new-popular" className="swiper-button swiper-button-next">
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
                      prevEl: "#prev-new-popular",
                      nextEl: "#next-new-popular",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {newOnCopepod.map((item, index) => (
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
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Top 10 TV Shows */}
        <section id="iq-top-tv-show">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">Top 10 TV Shows</h4>
                  <Link className="iq-view-all" to="/view-all" onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div id="prev-top-tv-show" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next-top-tv-show" className="swiper-button swiper-button-next">
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
                      prevEl: "#prev-top-tv-show",
                      nextEl: "#next-top-tv-show",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
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

          {/* Comming next week */}
          <section id="iq-comming-next-week">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between ">
                  <h4 className="main-title mb-3">Comming Next week</h4>
                  <Link className="iq-view-all" to="/view-all" onClick={handleLinkClick}>
                    View All
                  </Link>
                </div>
                <div id="favorites-contens">
                  <div id="prev-comming-next-week" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next-comming-next-week" className="swiper-button swiper-button-next">
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
                      prevEl: "#prev-comming-next-week",
                      nextEl: "#next-comming-next-week",
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                  >
                    {Top10ShowsInUS.map((item, index) => (
                      <SwiperSlide as="li" key={index}>
                        <div className=" block-images position-relative">
                          <div className="img-box">
                          
                            <img
                              src={item?.imageUrl}
                              className="img-fluid "
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
                  <div id="prev-top-movies" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next-top-movies" className="swiper-button swiper-button-next">
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
                    spaceBetween={20}
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
                                      // data-link="https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
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
        
        
       

      </div>
    </>
  );
};
export default NewAndPopular;
