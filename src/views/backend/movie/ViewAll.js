import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import aboutus1 from "../../../assets/images/bg.jpg";
import img11 from "../../../assets/images/blog/blog1.jpeg";
import img12 from "../../../assets/images/blog/blog3.jpeg";
import im10 from "../../../assets/images/upcoming/03.jpg";
import img4 from "../../../assets/images/upcoming/04.jpg";
import img13 from "../../../assets/images/upcoming/05.jpg";
import img6 from "../../../assets/images/upcoming/03.jpg";
import img7 from "../../../assets/images/upcoming/04.jpg";
import img8 from "../../../assets/images/blog/blog1.jpeg";
import img9 from "../../../assets/images/blog/blog3.jpeg";
import img1 from "../../../assets/images/trending/02.jpg";
import img2 from "../../../assets/images/trending/03.jpg";
import img3 from "../../../assets/images/trending/04.jpg";
import img5 from "../../../assets/images/trending/05.jpg";
import { useHistory } from 'react-router-dom'; 
import { toast } from "react-toastify";

// import img2 from "../../../assets/images/trending/06.jpg";

const ViewAll = () => {
  const [allmoive, setAllmoive] = useState([]);
  const history = useHistory();
  const moivedata = [
    {
      imgSrc: img1,
      title: "The Lost Journey",
      ageRating: "20+",
      duration: "2h 15m",
      link: "/show-details",
    },
    {
      imgSrc: img2,
      title: "Boop Bitty",
      ageRating: "11+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img3,
      title: "Unknown Land",
      ageRating: "17+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img5,
      title: "Blood Block",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img4,
      title: "Champions",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img6,
      title: "The Lost Journey",
      ageRating: "20+",
      duration: "2h 15m",
      link: "/show-details",
    },
    {
      imgSrc: img7,
      title: "Boop Bitty",
      ageRating: "11+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img3,
      title: "Unknown Land",
      ageRating: "17+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img6,
      title: "Blood Block",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img5,
      title: "Champions",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img1,
      title: "The Lost Journey",
      ageRating: "20+",
      duration: "2h 15m",
      link: "/show-details",
    },
    {
      imgSrc: img2,
      title: "Boop Bitty",
      ageRating: "11+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img3,
      title: "Unknown Land",
      ageRating: "17+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img4,
      title: "Blood Block",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img5,
      title: "Champions",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img1,
      title: "The Lost Journey",
      ageRating: "20+",
      duration: "2h 15m",
      link: "/show-details",
    },
    {
      imgSrc: img2,
      title: "Boop Bitty",
      ageRating: "11+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img3,
      title: "Unknown Land",
      ageRating: "17+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img4,
      title: "Blood Block",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
    {
      imgSrc: img5,
      title: "Champions",
      ageRating: "13+",
      duration: "2h 30m",
      link: "/show-details",
    },
  ];

  useEffect(() => {
    setAllmoive(moivedata.slice(0, 12));
  }, []);

  const viewAllData = () => {
    if (allmoive.length === 12) {
      setAllmoive(moivedata);
    } else {
      setAllmoive(moivedata.slice(0, 12));
    }
  };

  const handleHomeClick = () => {
    history.push('/'); // Navigate to the home page
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
  return (
    <>
      <div
        className="iq-breadcrumb-one  iq-bg-over iq-over-dark-20"
        style={{ backgroundImage: `url(${aboutus1})` }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="12">
              <nav className="text-center iq-breadcrumb-two">
                <h2 className="title">View All</h2>
                <Breadcrumb className="main-bg">
                  <Breadcrumb.Item onClick={handleHomeClick}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>movies</Breadcrumb.Item>
                  {/* <Breadcrumb.Item active>
                    The Most Anticipated Movies
                  </Breadcrumb.Item> */}
                </Breadcrumb>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        {" "}
        <main id="main" class="site-main watchlist-contens">
          <div class="container-fluid">
            <div class="iq-main-header d-flex align-items-center justify-content-between mt-5 mt-lg-0">
              <h4 class="main-title">Movie Genres</h4>
            </div>
            <ul class=" row list-inline  mb-0 iq-rtl-direction ">
              {allmoive?.map((item, index) => (
                <li class="slide-item col-lg-3 col-md-4 col-6 mb-4">
                  <div class="block-images position-relative  watchlist-first">
                    <div class="img-box">
                      <img src={item?.imgSrc} className="img-fluid" alt="" />
                    </div>
                    <div class="block-description">
                      <h6 class="iq-title text-left">
                        <a href="../html/genres-detail.html">{item?.title}</a>
                      </h6>
                      <div class="movie-time d-flex align-items-center my-2">
                        <span class="text-white">{item?.duration}</span>
                      </div>
                      <div class="hover-buttons text-left">
                        <Link
                          to="/show-details"
                          role="button"
                          class="btn btn-hover"
                        >
                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                          Play Now
                        </Link>
                      </div>
                    </div>
                    <div class="block-social-info">
                      <ul class="list-inline p-0 m-0 music-play-lists">
                        <li class="share">
                          <span>
                            <i class="ri-share-fill"></i>
                          </span>
                          <div class="share-box">
                            <div class="d-flex align-items-center">
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
                            <i class="ri-heart-fill"></i>
                          </span>
                          <span class="count-box">+3</span>
                        </li>
                        <li>
                          <span onClick={()=>handleAddClick('Added Successfully !')}>
                            <i class="ri-add-line"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button
              class="btn btn-hover hide-me"
              type="button"
              onClick={viewAllData}
            >
              <span class="genres-btn">
                {allmoive.length === 12 ? "Load More" : "Less"}
              </span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ViewAll;
