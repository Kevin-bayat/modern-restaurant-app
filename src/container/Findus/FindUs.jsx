import React from "react";

import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./FileUs.css";

const FindUs = () => {
  return (
    <div
      className="app_findUs flex__center section__padding app__bg"
      id="contacts"
    >
      <div className="app_findUs-content">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <p className="p__openSans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", marginTop: "2rem" }}
        >
          Opening Hours
        </p>
        <div className="app_findUs-content_opening">
          <p className="p__openSans">Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className="p__openSans">Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <button type="button" className="custom__button">
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findUs image" />
      </div>
    </div>
  );
};

export default FindUs;
