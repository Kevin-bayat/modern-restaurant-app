import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const Chef = () => {
  return (
    <div className="app__chef app__bg flex__center app__wrapper section__padding">
      <div className="app__chef-image">
        <img src={images.chef} alt="chef img" />
      </div>
      <div className="app__chef-content">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content_quote">
          <div className="app__chef-content_quote-paragraph">
            <img src={images.quote} alt="quote img" />
            <p className="p__openSans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit
              .
            </p>
          </div>
          <span>
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
            Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
            Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
            Nunc.
          </span>
        </div>
        <div className="app__chef-content_name">
          <h2 className="p__cormorant">Kevin Luo</h2>
          <p className="p__openSans">Chef & Founder</p>
        </div>
        <div className="app__chef-content_sign">
          <img src={images.sign} alt="sign img" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
