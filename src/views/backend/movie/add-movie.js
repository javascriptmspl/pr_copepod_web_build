import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

//images
import trending from "../../../assets/images/trending/trending-label.png";
import movie1 from "../../../assets/images/movies/06.jpg";
import movie2 from "../../../assets/images/movies/07.jpg";
import movie3 from "../../../assets/images/movies/08.jpg";
import movie4 from "../../../assets/images/movies/09.jpg";
import movie5 from "../../../assets/images/movies/10.jpg";
import upcoming1 from "../../../assets/images/upcoming/01.jpg";
import upcoming2 from "../../../assets/images/upcoming/02.jpg";
import upcoming3 from "../../../assets/images/upcoming/03.jpg";
import upcoming4 from "../../../assets/images/upcoming/04.jpg";
import upcoming5 from "../../../assets/images/upcoming/05.jpg";
import video from "../../../assets/video/sample-video.mp4";
import HeaderStyle1 from "../../../components/partials/backend/headerstyle/headerstyle1";  

// install Swiper modules
SwiperCore.use([Navigation]);

const AddMovie = () => {
  return (
   <>
  
   <div>
   {/* <!-- Slider Start --> */}
      <section className="banner-container">
         <div className="movie-banner tvshows-slider">
            <div  className="swiper-banner-container iq-rtl-direction" data-swiper="banner-detail-slider">
               <div className="swiper-wrapper">
                  <div className="swiper-slide movie-banner-1 swiper-bg">
                     <div className="shows-content h-100">
                        <div className="row align-items-center h-100">
                           <div className="col-lg-7 col-md-12">
                              <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                                 data-delay-in="0.6">The Dinosaur</h1>
                              <div className="flex-wrap align-items-center fadeInLeft animated"  style={{
                                  opacity:"1",
                                 }} data-animation-in="fadeInLeft"
                                
                                 >
                                 <div className="slider-ratting d-flex align-items-center ">
                                    <ul
                                       className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
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
                                          <i className="fa fa-star-half" aria-hidden="true"></i>
                                       </li>
                                    </ul>
                                    <span className="text-white ml-3">4.4(lmdb)</span>
                                 </div>
                                 <div className="d-flex align-items-center movie-banner-time">
                                    <span className="badge badge-secondary p-2">PG</span>
                                    <span className="mx-2 mx-md-3"><i className="ri-checkbox-blank-circle-fill"></i></span>
                                    <span className="trending-time"> 1hr : 44mins</span>
                                    <span className="mx-2 mx-md-3"><i className="ri-checkbox-blank-circle-fill"></i></span>
                                    <span className="trending-year">Feb 2018</span>
                                 </div>
                                 <p className="movie-banner-text" data-animation-in="fadeInUp" data-delay-in="1.2">Dinosaurs are a
                                    diverse group of reptiles of the clade Dinosauria. They first appeared during the
                                    Triassic period, between 243 and 233.23 million years ago, although the exact origin
                                    and timing of the evolution of dinosaurs is the subject of active research.</p>
                              </div>
                              <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp"
                                 data-delay-in="1.2">
                                 <a href="movie-details.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                       aria-hidden="true"></i>Play Now</a>
                              </div>
                           </div>
                           <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                              <a href="video/trailer.mp4" className="video-open playbtn" tabindex="0">
                                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    // xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    x="0px" y="0px" width="80px" height="80px"
                                    viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                                    //  xml:space="preserve"
                                     >
                                    <polygon className="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                       stroke-linejoin="round" stroke-miterlimit="10"
                                       points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                    <circle className="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                       stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                    </circle>
                                 </svg>
                                 <span className="w-trailor text-uppercase">Watch Trailer</span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="swiper-banner-button-next ">
                  <i className="ri-arrow-left-s-line arrow-icon"></i>
               </div>
               <div className="swiper-banner-button-prev">
                  <i className="ri-arrow-right-s-line arrow-icon"></i>
               </div> 
            </div>
         </div>
      </section>
      {/* <!-- MainContent --> */}
   </div>
   </>
  );
};
export default AddMovie;
