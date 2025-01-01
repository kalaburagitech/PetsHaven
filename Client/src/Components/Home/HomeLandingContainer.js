import React from "react";
import girlHoldingADog from "./images/girlHoldingADog.png";
import homepageDog from "./images/homepageDog.png";
import footPrint from "./images/footPrint.png";
import { Link } from "react-router-dom";

const HomeLandingContainer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-container">
      <div className="homeContainer-left">
        <div>
          <p className="home-title">
            <div className="home-titlePlusPng">
            <span className="highlight-text">Caring for Your  Pets  </span>
           <img src={homepageDog} alt="Dog sitting" />
            </div>
            Because they’re<br /> <span className="priority-text">Family</span>
          </p>
          <p className="home-second-para">{props.description}</p>
        </div>
        <div className="adopt-btn">
          <Link to="./pets">
            <button className="Home-button" onClick={scrollToTop}>
              <p>Adopt a Pet</p>
              <img src={footPrint} alt="footprint" />
            </button>
          </Link>
        </div>
      </div>
      <div className="homeContainer-right">
        <img
          className="girl-holding-dog"
          src={girlHoldingADog}
          alt="Girl holding a Dog"
        />
      </div>
    </div>
  );
};

export default HomeLandingContainer;