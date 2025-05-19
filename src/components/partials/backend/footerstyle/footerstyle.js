import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import footer1 from "../../../../assets/images/footer/01.jpeg";
import footer2 from "../../../../assets/images/footer/02.jpeg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { rtlModeAction, getRtlMode } from "../../../../store/mode/rtlmode";

const mapStateToProps = (state) => {
  return {
    rtlMode: getRtlMode(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      rtlModeAction,
    },
    dispatch
  ),
});

const FooterStyle = (props) => {
  const [show] = useState(false);
  const [year] = useState(new Date().getFullYear());
  const history = useHistory();

  useEffect(() => {
    const rtlMode = sessionStorage.getItem("rtl-mode");
    if (rtlMode === null) {
      props.rtlModeAction(props.rtlMode);
    } else {
      props.rtlModeAction(rtlMode);
    }
  });

  const handleWatchListClick = () => {
    history.push("/watchlist?tab=watchlist");
  };

  const handleFavoritesClick = () => {
    history.push("/watchlist?tab=favourite");
  };
  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <div className={`rtl-box ${show === true ? "show" : ""}`}>
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="false"
              onClick={() => {
                props.rtlModeAction("ltl");
              }}
              data-value="ltr"
            >
              <Link to="#">LTR</Link>
            </li>
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="true"
              onClick={() => {
                props.rtlModeAction("rtl");
              }}
              data-value="rtl"
            >
              <Link to="#">RTL</Link>
            </li>
          </ul>
        </div>
      </div>
      <footer id="contact" className="footer-one ">
        <div className="footer-top">
          <Container fluid>
            <Row className="footer-standard">
              <Col lg="7">
                <div className="widget text-left">
                  <div className="menu-footer-link-1-container">
                    <ul id="menu-footer-link-1" className="menu p-0">
                      <li>
                        <Link to="/terms-of-service" onClick={handleLinkClick}>Terms Of Use</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy" onClick={handleLinkClick}>Privacy-Policy</Link>
                      </li>
                      <li>
                        <Link to="/faq" onClick={handleLinkClick}>FAQ</Link>
                      </li>
                      <li>
                        <Link
                          to="/watchlist?tab=watchlist"
                          onClick={() => { handleWatchListClick(); handleLinkClick(); }}
                          
                        >
                          Watch List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/watchlist?tab=favourite"
                          onClick={() => { handleFavoritesClick(); handleLinkClick(); }}
                          
                        >
                          Favorites
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget text-left">
                  <div className="textwidget">
                    <p>
                      <small>
                        © {year} Copepod Inc. All Rights Reserved. Unauthorized
                        duplication or reproduction of content is strictly
                        prohibited.
                      </small>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="2" md="6" className="mt-4 mt-lg-0">
                <h6 className="footer-link-title">Follow Us :</h6>
                <ul className="info-share">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/copepod_wp/movie/shadow/"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/intent/tweet?text=Currentlyreading"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://myaccount.google.com/">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  {/* <li>
                    <Link target="_blank" to="#">
                      <i className="fa fa-github"></i>
                    </Link>
                  </li> */}
                </ul>
              </Col>
              <Col lg="3" md="6" className="mt-4 mt-lg-0">
                <div className="widget text-left">
                  <div className="textwidget">
                    <h6 className="footer-link-title">Copepod App</h6>
                    <div className="d-flex align-items-center">
                      <a
                        className="app-image"
                        target="_blank"
                        href="https://play.google.com/store/games?hl=en_IN&gl=US"
                      >
                        <img src={footer1} alt="play-store" />
                      </a>
                      <br />
                      <a
                        className="ml-3 app-image"
                        target="_blank"
                        href="https://www.apple.com/in/app-store"
                      >
                        <img src={footer2} alt="app-store" />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterStyle);
