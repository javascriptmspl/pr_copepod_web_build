import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import interestData from "./data";

const InterestPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (cardId) => {
    // Toggle the selection state of the card
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.includes(cardId)
        ? prevSelectedCards.filter((id) => id !== cardId)
        : [...prevSelectedCards, cardId]
    );
  };

  const isCardSelected = (cardId) => selectedCards.includes(cardId);
  const isNextButtonVisible = selectedCards.length >= 3;

  return (
    <>
      <div className="main-content pb-5">
        <section id="iq-live-news">
          <Container fluid>
            <Row>
              <div className="row col-12 my-5">
                <div className="col-8">
                  <h3>John, select 3 you like.</h3>
                  <p className="pt-2">
                    This helps us to find TV shows and movies you’ll love.
                    Select the ones you like.
                  </p>
                </div>
                <div className="col-4">
                  {isNextButtonVisible && (
                    <Link to="/" className="btn btn-hover" style={{ float: "right" }}>
                      Next
                    </Link>
                  )}
                </div>
              </div>
              <div className="row col-12 ps-2">
                {interestData.map((item, index) => (
                  <div key={index} className={`my-3 col-2 ${isCardSelected(index) ? "selected-card" : ""}`}>
                    <div className="m-3 card-ineterst" onClick={() => handleCardClick(index)}>
                      <img
                        src={item.img}
                        alt={`Interest ${index + 1}`}
                        style={{
                          backgroundSize: "cover",
                          border: isCardSelected(index) ? "1px solid white" : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default InterestPage;